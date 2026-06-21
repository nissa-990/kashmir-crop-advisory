
import { useNavigate } from "react-router-dom";

const months = [
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function CropCalendar() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Crop Calendar</h2>
      <p>Select a month</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {months.map((month) => (
          <div
            key={month}
            className="card"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/crop-calendar/${month}`)}
          >
            {month}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CropCalendar;

