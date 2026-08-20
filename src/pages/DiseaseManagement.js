import React, { useState } from "react";
import vegetableDiseases from "../data/vegetableDiseases";
import { 
  FaShieldAlt, 
  FaTimes, 
  FaBug, 
  FaArrowRight, 
  FaCheckCircle, 
  FaNotesMedical 
} from "react-icons/fa";
import "./DiseaseManagement.css";

function DiseaseManagement() {
  const [selectedCrop, setSelectedCrop] = useState(null);

  return (
    <div className="dm-page-wrapper">
      <div className="dm-container">
        
        {/* Header Section */}
        <div className="dm-header">
          <span className="dm-pill-badge">
            <FaShieldAlt /> Crop Health Advisory
          </span>
          <h1 className="dm-title">
            Vegetable Disease & Protection Management
          </h1>
          <p className="dm-subtitle">
            Scientific disease diagnostics, causal organism identifiers, and field prevention strategies tailored for Kashmir valley growers.
          </p>
        </div>

        {/* Interactive Crop Grid */}
        <div className="dm-crop-grid">
          {vegetableDiseases.map((item, index) => (
            <div 
              className="dm-crop-card" 
              key={index}
              onClick={() => setSelectedCrop(item)}
            >
              <div className="dm-card-top">
                <div className="dm-card-icon-box">
                  <FaNotesMedical />
                </div>
                <span className="dm-crop-badge">
                  <FaCheckCircle /> Disease Management Guide
                </span>
              </div>

              <div className="dm-card-main">
                <h3>{item.crop}</h3>
                <p className="dm-card-desc">{item.shortInfo}</p>
              </div>

              <div className="dm-card-footer">
                <span className="dm-disease-count">
                  <FaBug /> {item.diseases ? `${item.diseases.length} Identified` : "Advisory"}
                </span>

                <button 
                  className="dm-action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCrop(item);
                  }}
                >
                  <span>View Plan</span>
                  <FaArrowRight className="dm-btn-arrow" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Overlay */}
        {selectedCrop && (
          <div className="dm-modal-overlay" onClick={() => setSelectedCrop(null)}>
            <div className="dm-modal" onClick={(e) => e.stopPropagation()}>
              
              <div className="dm-modal-header">
                <div>
                  <span className="dm-modal-tag">Diagnostic Advisory</span>
                  <h2>{selectedCrop.crop} Protection Plan</h2>
                </div>
                <button 
                  className="dm-modal-close-icon" 
                  onClick={() => setSelectedCrop(null)}
                >
                  <FaTimes />
                </button>
              </div>

              {/* Vertical Scrollable Content */}
              <div className="dm-modal-body">
                {selectedCrop.diseases.map((disease, i) => (
                  <div key={i} className="dm-disease-block">
                    <div className="dm-disease-title-row">
                      <FaBug className="dm-bug-icon" />
                      <h3>{disease.name}</h3>
                    </div>

                    <div className="dm-causal-box">
                      <strong>Causal Organism:</strong> <span>{disease.causalOrganism}</span>
                    </div>

                    <div className="dm-section-group">
                      <h4 className="dm-section-label">Symptoms & Signs:</h4>
                      <ul className="dm-bullet-list">
                        {disease.symptoms.map((s, idx) => (
                          <li key={idx}>{s}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="dm-section-group">
                      <h4 className="dm-section-label">Recommended Management:</h4>
                      <ul className="dm-bullet-list dm-management-list">
                        {disease.management.map((m, idx) => (
                          <li key={idx}>{m}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="dm-modal-footer">
                <button 
                  className="dm-modal-close-btn" 
                  onClick={() => setSelectedCrop(null)}
                >
                  Close Advisory
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default DiseaseManagement;