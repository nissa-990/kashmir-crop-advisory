from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
import json

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