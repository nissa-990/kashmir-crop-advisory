import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSeedling,
  FaCloudSun,
  FaCalendarAlt,
  FaRupeeSign,
  FaLandmark,
  FaNotesMedical,
  FaBug,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Crop Advisory",
      desc: "View tailored crop recommendations for vegetable cultivation.",
      icon: <FaSeedling />,
      route: "/crop-advisory",
      badge: "Popular",
    },
    {
      title: "Market Prices",
      desc: "View the latest vegetable market prices across Kashmir mandis.",
      icon: <FaRupeeSign />,
      route: "/market-prices",
    },
    {
      title: "Weather Updates",
      desc: "Check live weather forecasts, temperature trends, and alerts.",
      icon: <FaCloudSun />,
      route: "/weather",
      badge: (
        <span className="live-badge">
          <span className="live-dot"></span> Live
        </span>
      ),
    },
    {
      title: "Government Schemes",
      desc: "Explore agricultural subsidies and government support schemes.",
      icon: <FaLandmark />,
      route: "/government-schemes",
    },
    {
      title: "Crop Calendar",
      desc: "View month-wise local sowing, irrigation, and harvesting schedules.",
      icon: <FaCalendarAlt />,
      route: "/crop-calendar",
    },
    {
      title: "Disease Management",
      desc: "Learn crop disease prevention, control, and treatment methods.",
      icon: <FaNotesMedical />,
      route: "/disease-management",
    },
    {
      title: "Disease Detection",
      desc: "Upload crop leaf images for instant AI-based disease diagnosis.",
      icon: <FaBug />,
      route: "/disease-detection",
      badge: "AI Powered",
    },
    {
      title: "Agri Store Locator",
      desc: "Locate verified shops across Kashmir for seeds, fertilizers, and tools.",
      icon: <FaMapMarkedAlt />,
      route: "/store-locator",
      badge: "New",
    },
  ];

  return (
    <div className="teal-dashboard-wrapper">
      <div className="teal-container">
        
        {/* Header Title Section */}
        <div className="dashboard-header">
          <span className="pill-badge">🌱 Kashmiri Farmer Hub</span>
          <h1 className="dashboard-title">Explore Agricultural Services</h1>
          <p className="dashboard-subtitle">
            Choose a service to access intelligent crop advisories, live weather updates, 
            market rates, disease control, store locations, and government support schemes.
          </p>
        </div>

        {/* Dashboard Services Grid */}
        <div className="services-glass-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-service-card"
              onClick={() => navigate(service.route)}
            >
              {service.badge && (
                <span className="card-top-badge">{service.badge}</span>
              )}

              <div className="service-icon-wrapper">
                {service.icon}
              </div>

              <h3 className="card-service-title">{service.title}</h3>
              <p className="card-service-desc">{service.desc}</p>

              <div className="card-action-link">
                <span>Access Service</span>
                <IoIosArrowForward className="arrow-icon" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Dashboard;