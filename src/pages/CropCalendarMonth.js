import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import { FaArrowLeft, FaCalendarAlt } from "react-icons/fa";
import "./CropCalendar.css";

function CropCalendarMonth() {
  const { month } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMonthData = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("crops")
        .select("*")
        .eq("month", month);

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setData(data || []);
      }
      setLoading(false);
    };

    fetchMonthData();
  }, [month]);

  const visibleColumns = data.length > 0 
    ? Object.keys(data[0]).filter((col) => col !== "id" && col !== "created_at")
    : [];

  // Helper to format long text (like nutrient management) into bullet points nicely
  const renderCellContent = (col, value) => {
    if (!value) return "—";

    if (col === "crop") {
      return <span className="crop-pill">{value}</span>;
    }

    if (col === "time_of_sowing" || col === "time_of_transplanting") {
      return <span className="time-highlight">{value}</span>;
    }

    // Split items separated by ';' or '|' into clean inline list items
    if (typeof value === "string" && (value.includes(";") || value.includes("|"))) {
      const items = value.split(/[;|]/).map((item) => item.trim()).filter(Boolean);
      return (
        <ul className="cell-list">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    }

    return value;
  };

  return (
    <div className="month-detail-container">
      {/* Detail Header Box */}
      <div className="detail-header-card">
        <button className="back-btn" onClick={() => navigate("/crop-calendar")}>
          <FaArrowLeft /> Back to Calendar
        </button>

        <div className="detail-title-group">
          <span className="calendar-pill-badge">
            <FaCalendarAlt /> Seasonal Schedule
          </span>
          <h1>Crop Calendar — {month}</h1>
          <p>
            Detailed agricultural recommendations for sowing, transplanting, spacing, and nutrient management.
          </p>
        </div>
      </div>

      {/* Loading & Content States */}
      {loading ? (
        <div className="table-card-wrapper state-box">
          <div className="spinner"></div>
          <p>Fetching crop schedule for {month}...</p>
        </div>
      ) : data.length === 0 ? (
        <div className="table-card-wrapper state-box">
          <h3>No Crop Data Found</h3>
          <p>There are no crop schedule records available for {month}.</p>
        </div>
      ) : (
        /* Professional Wide Table System */
        <div className="table-card-wrapper">
          <div className="table-responsive-box">
            <table className="modern-crop-table">
              <thead>
                <tr>
                  {visibleColumns.map((col) => (
                    <th key={col} className={`th-${col}`}>
                      {col.replaceAll("_", " ")}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {data.map((row, index) => (
                  <tr key={row.id || index}>
                    {visibleColumns.map((col) => (
                      <td key={col} className={`td-${col}`}>
                        {renderCellContent(col, row[col])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default CropCalendarMonth;