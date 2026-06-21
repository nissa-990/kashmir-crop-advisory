import { useState } from "react";
import { Link } from "react-router-dom";
import "./CropAdvisory.css";
import "./crops/CropData.js"

function CropAdvisory() {
  const crops = [
    { name: "Brinjal", image: "brinjal.png", slug: "brinjal" },
    { name: "Sweet Pepper", image: "capsicum.png", slug: "sweet-pepper" },
    { name: "Chillies", image: "chillies.png", slug: "chillies" },
    { name: "Potato", image: "potato.png", slug: "potato" },
    { name: "Tomato", image: "tomato.png", slug: "tomato" },
    { name: "Capsicum", image: "capsicum.png", slug: "capsicum" },
    { name: "Bottle Gourd", image: "bottle-gourd.png", slug: "bottle-gourd" },
    { name: "Cucumber", image: "cucumber.png", slug: "cucumber" },
    { name: "Ridge Gourd", image: "ridge-gourd.png", slug: "ridge-gourd" },
    { name: "Bitter Gourd", image: "bitter-gourd.png", slug: "bitter-gourd" },
    { name: "Pumpkin", image: "pumpkin.png", slug: "pumpkin" },
    { name: "French Beans", image: "french-beans.png", slug: "french-beans" },
    { name: "Cauliflower", slug: "cauliflower", image: "cauliflower.png" },
    { name: "Cabbage", slug: "cabbage", image: "cabbage.png" },
    { name: "Knol Khol", slug: "knol khol", image: "knol khol.png" },
    { name: "Radish", slug: "radish", image: "radish.png" },
    { name: "Turnip", slug: "turnip", image: "turnip.png" },
    { name: "Carrot", slug: "carrot", image: "carrot.png" },
    { name: "Beetroot", slug: "beetroot", image: "beetroot.png" },
    { name: "Spinach", slug: "spinach", image: "spinach.png" },
    { name: "Fenugreek", slug: "fenugreek", image: "fenugreek.png" },
    { name: "Onion", slug: "onion", image: "onion.png" },
    { name: "Okra", slug: "okra", image: "okra.png" },
    { name: "Lettuce", slug: "lettuce", image: "lettuce.png" },
    { name: "Broccoli", slug: "broccoli", image: "broccoli.png" },
    { name: "Kale", slug: "kale", image: "kale.png" },
    { name: "Garden-pea", slug: "garden-pea", image: "garden-pea.png" }
  ];
  console.log("Total crops:", crops.length);

  const [search, setSearch] = useState("");

  const filteredCrops = crops.filter((crop) =>
    crop.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Select Crop</h2>

      <input
        type="text"
        placeholder="Search Crop"
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="crop-grid">
        {filteredCrops.map((crop) => (
          <Link
            key={crop.slug}
            to={`/crop-advisory/${crop.slug}`}
            className="crop-card"
          >
            <img
              src={`/assets/vegetables/${crop.image}`}
              alt={crop.name}
            />
            <p>{crop.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CropAdvisory;
