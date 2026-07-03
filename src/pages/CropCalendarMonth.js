import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import "./CropCalendar.css";

function CropCalendarMonth() {
  const { month } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMonthData = async () => {
      console.log("Selected month:", month);

      const { data, error } = await supabase
        .from("crops")
        .select("*")
        .eq("month", month);

      console.log("Returned data:", data);
      console.table(data);
      console.log("Returned error:", error);

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setData(data);
      }
    };

    fetchMonthData();
  }, [month]);

  if (data.length === 0) {
    return (
      <div className="container">
        <h2>Crop Calendar - {month}</h2>
        <p>No crop calendar data found.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Crop Calendar - {month}</h2>

      <div className="table-container">
        <table className="crop-table">
          <thead>
            <tr>
              {Object.keys(data[0])
                .filter((col) => col !== "id" && col !== "created_at")
                .map((col) => (
                  <th key={col}>{col.replaceAll("_", " ")}</th>
                ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.keys(row)
                  .filter((col) => col !== "id" && col !== "created_at")
                  .map((col) => (
                    <td key={col}>{row[col]}</td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CropCalendarMonth;