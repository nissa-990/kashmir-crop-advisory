import React, { useState } from "react";
import { FaChevronDown, FaSeedling } from "react-icons/fa";
import "./CropDetails.css";

function CropDetails({ crop }) {
  const [open, setOpen] = useState(0); // Opens first section by default

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="crop-details-wrapper">
      <div className="crop-details-card">
        {/* Header Section */}
        <div className="crop-header">
          <div className="crop-title-badge">
            <FaSeedling className="badge-icon" />
            <span>Crop Management Guide</span>
          </div>
          <h1>{crop.name}</h1>
          <p className="crop-subtitle">
            Explore step-by-step agricultural recommendations, cultivation practices, and harvest guidelines for {crop.name}.
          </p>
        </div>

        {/* Accordions List */}
        <div className="accordion-list">
          {crop.sections.map((section, index) => {
            const isOpen = open === index;
            return (
              <div 
                key={index} 
                className={`accordion-item ${isOpen ? "active" : ""}`}
              >
                <button
                  className="accordion-header-btn"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="accordion-title">{section.title}</span>
                  <div className={`chevron-circle ${isOpen ? "rotate" : ""}`}>
                    <FaChevronDown />
                  </div>
                </button>

                {isOpen && (
                  <div className="accordion-content-body">
                    <div className="inner-content">{section.content}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CropDetails;