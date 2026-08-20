import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  GiTomato, 
  GiChiliPepper, 
  GiPotato, 
  GiPumpkin, 
  GiPeanut, 
  GiRaddish, 
  GiBroccoli, 
  GiCabbage, 
  GiCarrot, 
  GiGarlic
} from "react-icons/gi";
import { FaCalendarAlt, FaChevronRight } from "react-icons/fa";
import "./CropCalendar.css";

const monthsData = [
  { monthNum: "03", name: "March", icon: <GiTomato />, season: "Spring", activity: "Early Spring Sowing" },
  { monthNum: "04", name: "April", icon: <GiChiliPepper />, season: "Spring", activity: "Seedbed Preparation" },
  { monthNum: "05", name: "May", icon: <GiPotato />, season: "Spring", activity: "Transplanting & Irrigation" },
  { monthNum: "06", name: "June", icon: <GiPumpkin />, season: "Summer", activity: "Weeding & Crop Care" },
  { monthNum: "07", name: "July", icon: <GiPeanut />, season: "Summer", activity: "Mid-Season Harvesting" },
  { monthNum: "08", name: "August", icon: <GiRaddish />, season: "Monsoon", activity: "Pest & Disease Control" },
  { monthNum: "09", name: "September", icon: <GiBroccoli />, season: "Autumn", activity: "Main Crop Harvesting" },
  { monthNum: "10", name: "October", icon: <GiCabbage />, season: "Autumn", activity: "Sowing Winter Crops" },
  { monthNum: "11", name: "November", icon: <GiCarrot />, season: "Winter", activity: "Soil Tillage & Mulching" },
  { monthNum: "12", name: "December", icon: <GiGarlic />, season: "Winter", activity: "Field Maintenance" },
];

function CropCalendar() {
  const navigate = useNavigate();

  return (
    <div className="calendar-page-wrapper">
      <div className="calendar-main-container">
        
        {/* Header Section */}
        <div className="calendar-header">
          <span className="calendar-pill-badge">
            <FaCalendarAlt /> Seasonal Farming Schedule
          </span>
          <h1 className="calendar-title">Crop Calendar</h1>
          <p className="calendar-subtitle">
            Select a month from the seasonal grid below to view detailed sowing, irrigation, and harvest timetables.
          </p>
        </div>

        {/* Calendar Grid */}
        <div className="real-calendar-grid">
          {monthsData.map((month) => (
            <div
              key={month.name}
              className="calendar-tile"
              onClick={() => navigate(`/crop-calendar/${month.name}`)}
            >
              <div className="tile-top-bar">
                <div className="binding-rings">
                  <span></span>
                  <span></span>
                </div>
                <span className="season-tag">{month.season}</span>
              </div>

              <div className="tile-body">
                <div className="tile-number-badge">{month.monthNum}</div>
                
                <div className="tile-icon-box">
                  {month.icon}
                </div>

                <h3 className="tile-month-name">{month.name}</h3>
                <p className="tile-activity-text">{month.activity}</p>
              </div>

              <div className="tile-footer">
                <span>View Schedule</span>
                <FaChevronRight className="tile-arrow" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default CropCalendar;