import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import About from "./About";
import Contact from "./Contact";
import CropAdvisory from "./CropAdvisory";
import GovernmentSchemes from "./pages/GovernmentSchemes";
import DiseaseDetection from "./pages/DiseaseDetection";
import MarketPrices from "./pages/MarketPrices";
import CropPage from "./pages/CropPage";
import CropCalendar from "./pages/CropCalendar";
import CropCalendarMonth from "./pages/CropCalendarMonth";
import DiseaseManagement from "./pages/DiseaseManagement";
import Weather from "./pages/Weather";
import Home from "./pages/Home";
import StoreLocator from "./pages/StoreLocator"; // Imported Agri Store Locator page

import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { App as CapacitorApp } from "@capacitor/app";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Listen for the Android hardware back button
    const backListener = CapacitorApp.addListener("backButton", () => {
      if (location.pathname === "/") {
        // Minimize the app if on the Home screen
        CapacitorApp.minimizeApp();
      } else {
        // Step back to the previous page in history
        navigate(-1);
      }
    });

    // Cleanup the listener when the component unmounts
    return () => {
      backListener.then((handler) => handler.remove());
    };
  }, [navigate, location]);

  return (
    <div>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* DASHBOARD */}
        <Route path="/advisory" element={<Dashboard />} />

        {/* CROP ADVISORY */}
        <Route path="/crop-advisory" element={<CropAdvisory />} />
        <Route path="/crop-advisory/:slug" element={<CropPage />} />

        {/* MARKET PRICES */}
        <Route path="/market-prices" element={<MarketPrices />} />

        {/* CROP CALENDAR */}
        <Route path="/crop-calendar" element={<CropCalendar />} />
        <Route
          path="/crop-calendar/:month"
          element={<CropCalendarMonth />}
        />

        {/* WEATHER */}
        <Route path="/weather" element={<Weather />} />

        {/* DISEASE MANAGEMENT */}
        <Route
          path="/disease-management"
          element={<DiseaseManagement />}
        />

        {/* DISEASE DETECTION */}
        <Route
          path="/disease-detection"
          element={<DiseaseDetection />}
        />

        {/* GOVERNMENT SCHEMES */}
        <Route
          path="/government-schemes"
          element={<GovernmentSchemes />}
        />

        {/* AGRI STORE LOCATOR */}
        <Route path="/store-locator" element={<StoreLocator />} />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;