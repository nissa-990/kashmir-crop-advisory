import React, { useState } from "react";
import "./DiseaseDetection.css";
import vegetableDiseases from "../data/vegetableDiseases";

function DiseaseDetection() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const handlePredict = async () => {
    if (!image) {
      alert("Please upload a leaf image first.");
      return;
    }

    setLoading(true);
    setResult(null);

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Prediction error:", error);
      alert("Could not connect to AI backend. Make sure Flask is running.");
    }

    setLoading(false);
  };

  const formatDiseaseName = (name) => {
    if (!name) return "";
    return name
      .replaceAll("__", " - ")
      .replaceAll("_", " ")
      .replaceAll("-", " ");
  };

  const findDiseaseAdvice = (predictionName) => {
    if (!predictionName) return null;

    const cleanPrediction = predictionName
      .toLowerCase()
      .replaceAll("__", " ")
      .replaceAll("_", " ")
      .replaceAll("-", " ");

    for (let cropData of vegetableDiseases) {
      for (let disease of cropData.diseases) {
        const diseaseName = disease.name.toLowerCase();

        if (cleanPrediction.includes(diseaseName)) {
          return {
            crop: cropData.crop,
            ...disease,
          };
        }
      }
    }

    return null;
  };

  const advice = result && !result.error ? findDiseaseAdvice(result.disease) : null;

  return (
    <div className="disease-page">
      <div className="disease-card">
        <h1>Crop Disease Detection</h1>

        <p className="subtitle">
          Upload or capture a crop leaf image to detect possible disease.
        </p>

        <div className="upload-box">
          <label className="camera-btn">
             📷 Take Photo
             <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleImageChange}
            hidden
          />
        </label>

        <label className="camera-btn upload-btn">
               🖼️ Upload from Gallery
               <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              hidden
            />

        </label>

          {preview && (
            <img src={preview} alt="Uploaded leaf" className="preview-img" />
          )}
        </div>

        <button className="predict-btn" onClick={handlePredict}>
          {loading ? "Detecting..." : "Detect Disease"}
        </button>

        {result && (
          <div className="result-box">
            <h2>Detection Result</h2>

            {result.error ? (
              <p className="error">{result.error}</p>
            ) : (
              <>
                <p>
                  <strong>Disease:</strong>{" "}
                  {formatDiseaseName(result.disease)}
                </p>

                <p>
                  <strong>Confidence:</strong> {result.confidence}%
                </p>

                {result.confidence < 70 && (
                  <p className="low-confidence">
                    ⚠ Low confidence prediction. Please upload a clearer leaf
                    image or consult an agriculture expert.
                  </p>
                )}

                <div className="advice-box">
                  {advice ? (
                    <>
                      <h3>Crop-Specific Advice</h3>

                      <p>
                        <strong>Crop:</strong> {advice.crop}
                      </p>

                      <p>
                        <strong>Disease:</strong> {advice.name}
                      </p>

                      <p>
                        <strong>Causal Organism:</strong>{" "}
                        {advice.causalOrganism}
                      </p>

                      <h4>Symptoms</h4>
                      <ul>
                        {advice.symptoms.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>

                      <h4>Management</h4>
                      <ul>
                        {advice.management.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <>
                      <h3>Suggested Advice</h3>
                      <p>
                        Remove heavily infected leaves, avoid overhead watering,
                        maintain field hygiene, and consult a local agriculture
                        expert for crop-specific treatment.
                      </p>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default DiseaseDetection;