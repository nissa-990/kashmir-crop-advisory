import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import {
  FaSeedling,
  FaCloudSun,
  FaCalendarAlt,
  FaRupeeSign,
  FaLandmark,
  FaNotesMedical,
  FaBug,
} from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">

      <div className="container">

        <div className="dashboard-header">
          <h2>🌿 Explore Agricultural Services</h2>

          <p>
            Choose a service to access crop advisory, weather updates,
            market prices, disease management and government schemes.
          </p>
        </div>

        <div className="dashboard">

          {/* Crop Advisory */}
          <div
            className="card"
            onClick={() => navigate("/crop-advisory")}
          >
            <FaSeedling className="card-icon" />
            <h3>Crop Advisory</h3>
            <p>View crop recommendations for vegetable cultivation.</p>
          </div>

          {/* Market Prices */}
          <div
            className="card"
            onClick={() => navigate("/market-prices")}
          >
            <FaRupeeSign className="card-icon" />
            <h3>Market Prices</h3>
            <p>View the latest vegetable market prices.</p>
          </div>

          {/* Weather */}
          <div
            className="card"
            onClick={() => navigate("/weather")}
          >
            <FaCloudSun className="card-icon" />
            <h3>Weather Updates</h3>
            <p>Check live weather forecasts for Kashmir.</p>
          </div>

          {/* Government Schemes */}
          <div
            className="card"
            onClick={() => navigate("/government-schemes")}
          >
            <FaLandmark className="card-icon" />
            <h3>Government Schemes</h3>
            <p>Explore subsidies and government support schemes.</p>
          </div>

          {/* Crop Calendar */}
          <div
            className="card"
            onClick={() => navigate("/crop-calendar")}
          >
            <FaCalendarAlt className="card-icon" />
            <h3>Crop Calendar</h3>
            <p>View the month-wise sowing and harvesting schedule.</p>
          </div>

          {/* Disease Management */}
          <div
            className="card"
            onClick={() => navigate("/disease-management")}
          >
            <FaNotesMedical className="card-icon" />
            <h3>Disease Management</h3>
            <p>Learn disease prevention and treatment methods.</p>
          </div>

          {/* Disease Detection */}
          <div
            className="card"
            onClick={() => navigate("/disease-detection")}
          >
            <FaBug className="card-icon" />
            <h3>Disease Detection</h3>
            <p>Upload crop images for AI-based disease detection.</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;