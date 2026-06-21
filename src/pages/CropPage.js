import { useParams } from "react-router-dom";
import cropData from "../crops/CropData";
import CropDetails from "../crops/CropDetail";

function CropPage() {
  const { slug } = useParams();

  const rawCrop = cropData.find(
    c => c.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!rawCrop) {
    return <h2 style={{ padding: "20px" }}>Crop not found</h2>;
  }

  const crop = {
    name: rawCrop.name,
    sections: Object.entries(rawCrop)
      .filter(([key]) => key !== "name")
      .map(([key, value]) => ({
        title: key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, str => str.toUpperCase()),
        content: formatContent(value)
      }))
  };

  return <CropDetails crop={crop} />;
}

function formatContent(value) {
  if (typeof value === "string") {
    return <p>{value}</p>;
  }

  if (Array.isArray(value)) {
    return (
      <ul>
        {value.map((item, i) =>
          typeof item === "string" ? (
            <li key={i}>{item}</li>
          ) : (
            <li key={i}>
              <strong>{item.name}</strong>: {item.details || item.description}
            </li>
          )
        )}
      </ul>
    );
  }

  if (typeof value === "object") {
    return (
      <ul>
        {Object.entries(value).map(([k, v], i) => (
          <li key={i}>
            <strong>{k}:</strong>{" "}
            {typeof v === "object" ? JSON.stringify(v) : v}
          </li>
        ))}
      </ul>
    );
  }

  return null;
}

export default CropPage;
