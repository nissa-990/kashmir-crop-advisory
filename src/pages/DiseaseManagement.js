import vegetableDiseases from "../data/vegetableDiseases";
import { useState } from "react";
import "./DiseaseManagement.css";

function DiseaseManagement() {
  const [selectedCrop, setSelectedCrop] = useState(null);

  <h2>DISEASE MANAGEMENT PAGE RENDERING</h2>

  return (
    <div className="container">
      <h1>
        Common Diseases of Vegetables in Kashmir Division and Their Management
      </h1>

      <div className="crop-grid">
        {vegetableDiseases.map((item, index) => (
          <div className="crop-card" key={index}>
            <h3>{item.crop}</h3>
            <p>{item.shortInfo}</p>

            <button onClick={() => setSelectedCrop(item)}>
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedCrop && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{selectedCrop.crop}</h2>

            {selectedCrop.diseases.map((disease, i) => (
              <div key={i}>
                <h3>{disease.name}</h3>
                <p><strong>Causal organism:</strong> {disease.causalOrganism}</p>

                <strong>Symptoms:</strong>
                <ul>
                  {disease.symptoms.map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ul>

                <strong>Management:</strong>
                <ul>
                  {disease.management.map((m, idx) => (
                    <li key={idx}>{m}</li>
                  ))}
                </ul>
              </div>
            ))}

            <button onClick={() => setSelectedCrop(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DiseaseManagement;
