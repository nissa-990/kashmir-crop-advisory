import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import About from "./About";
import Contact from "./Contact";
import CropAdvisory from "./CropAdvisory";
import GovernmentSchemes from "./pages/GovernmentSchemes";
import DiseaseDetection from "./pages/DiseaseDetection";
import CropPage from "./pages/CropPage";
import CropCalendar from "./pages/CropCalendar";
import CropCalendarMonth from "./pages/CropCalendarMonth";
import DiseaseManagement from "./pages/DiseaseManagement";
import Weather from "./pages/Weather";
import Home from "./pages/Home";
import BackgroundLeaves from "./BackgroundLeaves";

import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
        <BackgroundLeaves />

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* DASHBOARD */}
        <Route path="/advisory" element={<Dashboard />} />

        {/* CROP ADVISORY */}
        <Route path="/crop-advisory" element={<CropAdvisory />} />
        <Route path="/crop-advisory/:slug" element={<CropPage />} />

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

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;