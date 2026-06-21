import { useState } from "react";
import "./CropDetails.css";

function CropDetails({ crop }) {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="crop-details">
      <h1>{crop.name}</h1>

      {crop.sections.map((section, index) => (
        <div key={index}>
          <button
            className="dropdown-btn"
            onClick={() => toggle(index)}
          >
            ▶ {section.title}
          </button>

          {open === index && (
            <div className="dropdown-content">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CropDetails;
