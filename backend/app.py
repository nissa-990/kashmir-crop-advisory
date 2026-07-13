from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
import json
from dotenv import load_dotenv
import os
from groq import Groq

# Load environment variables
load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), ".env"))

# Read Groq API Key
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
print("Groq Key Loaded:", GROQ_API_KEY is not None)
print(GROQ_API_KEY)

# Create Groq client
groq_client = Groq(api_key=GROQ_API_KEY)

app = Flask(__name__)
CORS(app)

# Load trained model
model = tf.keras.models.load_model("model/plant_disease_model.keras")

# Load class names
with open("model/classes.json", "r") as f:
    class_indices = json.load(f)

# Convert index -> class name
class_names = {v: k for k, v in class_indices.items()}


@app.route("/")
def home():
    return "Crop Disease Detection API is Running!"


# ---------- Test Groq ----------
@app.route("/test-groq")
def test_groq():
    try:
        response = groq_client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "user",
                    "content": "Say hello in one short sentence."
                }
            ]
        )

        return jsonify({
            "response": response.choices[0].message.content
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500
@app.route("/weather-advisory", methods=["POST"])
def weather_advisory():
    try:
        data = request.json

        district = data.get("district")
        current = data.get("current")
        daily = data.get("daily")

        prompt = f"""
You are an experienced agricultural scientist and crop advisory expert.

Your task is to provide practical farming advice based on the weather forecast.

District:
{district}

Current Weather:
Temperature: {current['temperature_2m']}°C
Humidity: {current['relative_humidity_2m']}%
Wind Speed: {current['wind_speed_10m']} km/h
Weather Code: {current['weather_code']}

Next 7 Days Maximum Temperature:
{daily['temperature_2m_max']}

Next 7 Days Minimum Temperature:
{daily['temperature_2m_min']}

Instructions:

Analyze the current weather and the next 7-day forecast before giving advice.

Provide the response in the following format:

🌱 Suitable Crops
• Mention crops and vegetables suitable for sowing in the current weather.

🚫 Crops to Avoid
• Mention crops that should not be sown in the present weather.
• Explain the reason briefly.

🏔 Kashmir Suitability
• If a recommended crop is not commonly cultivated in Kashmir, clearly mention:
  "This crop is generally not cultivated in Kashmir but may be suitable in regions with similar weather."

🌦 Weather Impact
• Explain how the current and upcoming weather will affect farming activities.

🛡 Preventive Measures
• Give 3–5 practical precautions farmers should take.

🦠 Disease & Pest Risk
• Mention diseases or pests that are likely because of the current weather and humidity.
• Suggest preventive actions.

📅 Next 3–4 Days Recommendation
• Advise whether farmers should sow now, delay sowing, irrigate, spray fungicides, or perform any other important activity.

Rules:
- Base every recommendation on the provided weather data.
- Keep the response practical and farmer-friendly.
- Use bullet points.
- Keep the total response under 300 words.
- Do not invent unrealistic advice.
"""

        response = groq_client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.4,
        )

        advisory = response.choices[0].message.content

        return jsonify({
            "advisory": advisory
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500

# ---------- Disease Detection ----------
@app.route("/predict", methods=["POST"])
def predict():

    if "image" not in request.files:
        return jsonify({"error": "No image uploaded"})

    file = request.files["image"]

    image = Image.open(file).convert("RGB")
    image = image.resize((224, 224))

    image = np.array(image) / 255.0
    image = np.expand_dims(image, axis=0)

    prediction = model.predict(image)

    predicted_class = np.argmax(prediction)

    confidence = float(np.max(prediction))

    disease = class_names[predicted_class]

    return jsonify({
        "disease": disease,
        "confidence": round(confidence * 100, 2)
    })


if __name__ == "__main__":
    app.run(debug=True)