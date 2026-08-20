import React from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkedAlt, FaStore, FaPhoneAlt, FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import "../Dashboard.css"; // Reuses dashboard styling container

function StoreLocator() {
  const navigate = useNavigate();

  // Sample verified store data for Kashmir valley
  const stores = [
    {
      id: 1,
      name: "Kashmir Seed & Agriculture Hub",
      district: "Srinagar",
      address: "Lal Chowk, Near Main Market, Srinagar",
      phone: "+91 99060 12345",
      type: "Certified Seeds & Pesticides",
    },
    {
      id: 2,
      name: "Valley Agro Inputs & Implements",
      district: "Baramulla",
      address: "National Highway, Main Market, Baramulla",
      phone: "+91 94190 67890",
      type: "Fertilizers & Farm Tools",
    },
    {
      id: 3,
      name: "SKUAST Verified Seed Outlet",
      district: "Anantnag",
      address: "Khanabal Ring Road, Anantnag",
      phone: "+91 91495 43210",
      type: "Hybrid Vegetable Seeds",
    },
  ];

  return (
    <div className="teal-dashboard-wrapper" style={{ marginTop: "30px" }}>
      <div className="teal-container">
        
        {/* Back Button */}
        <button 
          className="back-btn" 
          onClick={() => navigate("/advisory")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "#0b3c36",
            color: "#ffffff",
            border: "none",
            padding: "8px 18px",
            borderRadius: "20px",
            fontWeight: "700",
            cursor: "pointer",
            marginBottom: "20px"
          }}
        >
          <FaArrowLeft /> Back to Services
        </button>

        {/* Page Header */}
        <div className="dashboard-header">
          <span className="pill-badge">📍 Map & Supply Directory</span>
          <h1 className="dashboard-title">Agri Store Locator</h1>
          <p className="dashboard-subtitle">
            Locate verified nearby outlets in Jammu & Kashmir for high-quality seeds, fertilizers, organic pesticides, and farming machinery.
          </p>
        </div>

        {/* Store List Directory */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
          {stores.map((store) => (
            <div 
              key={store.id} 
              style={{
                background: "#ffffff",
                border: "1.5px solid #e2efe9",
                borderRadius: "18px",
                padding: "20px",
                boxShadow: "0 6px 18px rgba(11, 60, 54, 0.05)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", color: "#0b3c36" }}>
                <FaStore style={{ fontSize: "22px" }} />
                <h3 style={{ margin: 0, fontSize: "17px", fontWeight: "800" }}>{store.name}</h3>
              </div>

              <span style={{
                display: "inline-block",
                background: "#e2f4f0",
                color: "#0b3c36",
                fontSize: "11px",
                fontWeight: "700",
                padding: "3px 10px",
                borderRadius: "10px",
                marginBottom: "12px"
              }}>
                <FaCheckCircle style={{ marginRight: "4px" }} /> {store.type}
              </span>

              <p style={{ fontSize: "13px", color: "#43635b", margin: "0 0 8px 0", lineHeight: "1.5" }}>
                <strong>District:</strong> {store.district}<br />
                <strong>Address:</strong> {store.address}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#0b3c36", fontWeight: "700", marginTop: "12px" }}>
                <FaPhoneAlt /> {store.phone}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default StoreLocator;