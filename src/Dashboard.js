import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Select Category</h2>

      <div className="dashboard">
        <div
          className="card"
          onClick={() => navigate("/crop-advisory")}
          style={{ cursor: "pointer" }}
        >
          Select Crop
        </div>

        <div
          className="card"
          onClick={() => navigate("/market-prices")}
          style={{ cursor: "pointer" }}
        >
          Market Prices
        </div>

        <div
          className="card"
          onClick={() => navigate("/weather")}
          style={{ cursor: "pointer" }}
        >
          Weather Updates
        </div>

        <div
          className="card"
          onClick={() => navigate("/government-schemes")}
          style={{ cursor: "pointer" }}
        >
          Government Schemes
        </div>

        <div
          className="card"
          onClick={() => navigate("/crop-calendar")}
          style={{ cursor: "pointer" }}
        >
          Crop Calendar
        </div>

        <div
          className="card"
          onClick={() => navigate("/disease-management")}
          style={{ cursor: "pointer" }}
        >
          Disease Management
        </div>
      </div>
    </div>
  );
}

export default Dashboard;