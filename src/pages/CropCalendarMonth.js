import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";

function CropCalendarMonth() {
  const { month } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMonthData = async () => {
      const { data, error } = await supabase
        .from("crops")           // table name
        .select("*")
        .eq("month", month);     // filter by month

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
        <h2>Crop Calendar – {month}</h2>
        <p>No crop calendar data found.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Crop Calendar – {month}</h2>

      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            {Object.keys(data[0])
              .filter((col) => col !== "id")   // ✅ hide id column
              .map((col) => (
                <th key={col}>{col.replaceAll("_", " ")}</th>
              ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.keys(row)
                .filter((col) => col !== "id") // ✅ hide id column
                .map((col) => (
                  <td key={col}>{row[col]}</td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CropCalendarMonth;
