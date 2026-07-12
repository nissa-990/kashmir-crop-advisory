import React, { useState } from "react";
import "./DiseaseDetection.css";
import vegetableDiseases from "../data/vegetableDiseases";

import {
  FaCamera,
  FaImage,
  FaLeaf,
  FaSearch,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

import leaf from "../assets/leaf.jpg";

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

  const advice =
    result && !result.error
      ? findDiseaseAdvice(result.disease)
      : null;

  return (
    <div className="disease-page">

      {/* Decorative Leaves */}
      <img src={leaf} alt="" className="leaf leaf1" />
      <img src={leaf} alt="" className="leaf leaf2" />
      <img src={leaf} alt="" className="leaf leaf3" />
      <img src={leaf} alt="" className="leaf leaf4" />

      <div className="disease-card">

        <h1>
          <FaLeaf className="title-icon" />
          AI Crop Disease Detection
        </h1>

        <p className="subtitle">
          Upload or capture a vegetable leaf image to detect possible diseases
          using Artificial Intelligence and receive crop-specific management
          recommendations.
        </p>

        <div className="upload-box">

          <label className="camera-btn">
            <FaCamera />
            <span>Take Photo</span>

            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleImageChange}
              hidden
            />
          </label>

          <label className="camera-btn upload-btn">
            <FaImage />
            <span>Upload from Gallery</span>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              hidden
            />
          </label>

          {preview && (
            <img
              src={preview}
              alt="Uploaded leaf"
              className="preview-img"
            />
          )}

        </div>

        <button
          className="predict-btn"
          onClick={handlePredict}
        >
          {loading ? (
            "Analyzing Image..."
          ) : (
            <>
              <FaSearch />
              <span>Detect Disease</span>
            </>
          )}
        </button>

        {result && (
          <div className="result-box">

            <h2>
              <FaCheckCircle />
              Detection Result
            </h2>
                        {result.error ? (
              <p className="error">{result.error}</p>
            ) : (
              <>
                <div className="prediction-summary">

                  <div className="prediction-item">
                    <strong>Disease</strong>
                    <span>{formatDiseaseName(result.disease)}</span>
                  </div>

                  <div className="prediction-item">
                    <strong>Confidence</strong>
                    <span className="confidence">
                      {result.confidence}%
                    </span>
                  </div>

                </div>

                {result.confidence < 70 && (

                  <div className="warning-box">

                    <FaExclamationTriangle className="warning-icon" />

                    <p>
                      Low confidence prediction. Please upload a clearer
                      leaf image or consult an agriculture expert.
                    </p>

                  </div>

                )}

                <div className="advice-box">

                  {advice ? (

                    <>

                      <h3>Crop Specific Recommendation</h3>

                      <div className="info-grid">

                        <div className="info-card">
                          <h4>Crop</h4>
                          <p>{advice.crop}</p>
                        </div>

                        <div className="info-card">
                          <h4>Disease</h4>
                          <p>{advice.name}</p>
                        </div>

                        <div className="info-card full-width">
                          <h4>Causal Organism</h4>
                          <p>{advice.causalOrganism}</p>
                        </div>

                      </div>

                      <div className="recommendation-section">

                        <h4>Symptoms</h4>

                        <ul>
                          {advice.symptoms.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>

                      </div>

                      <div className="recommendation-section">

                        <h4>Management Practices</h4>

                        <ul>
                          {advice.management.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>

                      </div>

                    </>

                  ) : (

                    <>

                      <h3>General Recommendation</h3>

                      <p className="general-advice">

                        Remove infected leaves immediately, maintain
                        proper field sanitation, avoid overhead
                        irrigation, ensure good air circulation,
                        follow crop rotation, and consult your local
                        agriculture expert for crop-specific treatment.

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