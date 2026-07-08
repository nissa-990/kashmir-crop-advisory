import Navbar from "./Navbar";
import DiseaseDetection from "./pages/DiseaseDetection";
import Dashboard from "./Dashboard";
import About from "./About";
import Contact from "./Contact";
import CropAdvisory from "./CropAdvisory";
import CropPage from "./pages/CropPage";
import CropCalendar from "./pages/CropCalendar";
import CropCalendarMonth from "./pages/CropCalendarMonth";
import DiseaseManagement from "./pages/DiseaseManagement";
import Weather from "./pages/Weather";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* 🌱 HOME PAGE */}
        <Route
          path="/"
          element={
            <div className="home-container">
              {/* HERO SECTION */}
              <section className="hero-section">
                <h1>Kashmir Crop Advisory</h1>

                <p className="hero-text">
                  A digital agricultural support platform designed to bridge
                  the gap between scientific knowledge and on-ground farming
                  practices in Kashmir.
                </p>

                <button
                  className="hero-btn"
                  onClick={() => (window.location.href = "/advisory")}
                >
                  Explore Crop Advisory
                </button>
              </section>

              {/* INTRO SECTION */}
              <section className="intro-section">
                <h2>About the Platform</h2>
                <p>
                  This platform provides crop-wise advisory, crop calendars,
                  and disease management information tailored to the
                  agro-climatic conditions of Kashmir.
                </p>

                <p className="note">
                  ⚠️ This website is currently under development and will be
                  expanded with market prices, weather updates, and government
                  schemes.
                </p>
              </section>
            </div>
          }
        />

        {/* 📊 DASHBOARD */}
        <Route path="/advisory" element={<Dashboard />} />

        {/* 🌾 CROP ADVISORY */}
        <Route path="/crop-advisory" element={<CropAdvisory />} />
        <Route path="/crop-advisory/:slug" element={<CropPage />} />

        {/* 📅 CROP CALENDAR */}
        <Route path="/crop-calendar" element={<CropCalendar />} />
        <Route path="/crop-calendar/:month" element={<CropCalendarMonth />} />

        {/* 🦠 DISEASE MANAGEMENT */}
        <Route path="/disease-management" element={<DiseaseManagement />} />

        {/* 🌦 WEATHER */}
        <Route path="/weather" element={<Weather />} />

        <Route path="/disease-detection" element={<DiseaseDetection />} />

        {/* ℹ️ OTHER PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;