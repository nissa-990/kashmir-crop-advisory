import React, { useState } from "react";
import "./MarketPrices.css";

const crops = [
  {
    name: "Brinjal",
    kashmiriName: "وانگن",
    image: "brinjal.png",
  },
  {
    name: "Sweet Pepper",
    kashmiriName: "شملہ مرچ",
    image: "capsicum.png",
  },
  {
    name: "Chillies",
    kashmiriName: "مرچ",
    image: "chillies.png",
  },
  {
    name: "Potato",
    kashmiriName: "آلو",
    image: "potato.png",
  },
  {
    name: "Tomato",
    kashmiriName: "ٹماٹر",
    image: "tomato.png",
  },
  {
    name: "Capsicum",
    kashmiriName: "شملہ مرچ",
    image: "capsicum.png",
  },
  {
    name: "Bottle Gourd",
    kashmiriName: "لوکی",
    image: "bottle-gourd.png",
  },
  {
    name: "Cucumber",
    kashmiriName: "خیار",
    image: "cucumber.png",
  },
  {
    name: "Ridge Gourd",
    kashmiriName: "تورئی",
    image: "ridge-gourd.png",
  },
  {
    name: "Bitter Gourd",
    kashmiriName: "کریلا",
    image: "bitter-gourd.png",
  },
  {
    name: "Pumpkin",
    kashmiriName: "کدو",
    image: "pumpkin.png",
  },
  {
    name: "French Beans",
    kashmiriName: "لوبیا",
    image: "french-beans.png",
  },
  {
    name: "Cauliflower",
    kashmiriName: "پھول گوبھی",
    image: "cauliflower.png",
  },
  {
    name: "Cabbage",
    kashmiriName: "بند گوبھی",
    image: "cabbage.png",
  },
  {
    name: "Knol Khol",
    kashmiriName: "مونج ہاک",
    image: "knol khol.png",
  },
  {
    name: "Radish",
    kashmiriName: "مولی",
    image: "radish.png",
  },
  {
    name: "Turnip",
    kashmiriName: "گوگجی",
    image: "turnip.png",
  },
  {
    name: "Carrot",
    kashmiriName: "گاجر",
    image: "carrot.png",
  },
  {
    name: "Beetroot",
    kashmiriName: "چقندر",
    image: "beetroot.png",
  },
  {
    name: "Spinach",
    kashmiriName: "پالک",
    image: "spinach.png",
  },
  {
    name: "Fenugreek",
    kashmiriName: "میتھی",
    image: "fenugreek.png",
  },
  {
    name: "Onion",
    kashmiriName: "پیاز",
    image: "onion.png",
  },
  {
    name: "Okra",
    kashmiriName: "بھنڈی",
    image: "okra.png",
  },
  {
    name: "Lettuce",
    kashmiriName: "لیٹس",
    image: "lettuce.png",
  },
  {
    name: "Broccoli",
    kashmiriName: "بروکلی",
    image: "broccoli.png",
  },
  {
    name: "Kale",
    kashmiriName: "کیل",
    image: "kale.png",
  },
  {
    name: "Garden Pea",
    kashmiriName: "مٹر",
    image: "garden-pea.png",
  },
];

const ENAM_URL = "https://enam.gov.in/web/dashboard/live_price";
const AGMARKNET_URL =
  "https://agmarknet.gov.in/daily-price-and-arrival-report";

function MarketPrices() {
  const [search, setSearch] = useState("");

  const filteredCrops = crops.filter((crop) => {
    const searchText = search.trim().toLowerCase();

    const searchableText = `
      ${crop.name}
      ${crop.kashmiriName}
    `.toLowerCase();

    return searchableText.includes(searchText);
  });

  return (
    <div className="market-page">
      <section className="market-heading">
        <h1>Live Market Prices</h1>

        <p>
          Select a crop and check current mandi-price information through
          official government portals.
        </p>
      </section>

      <div className="market-search-box">
        <span className="market-search-icon">🔍</span>

        <input
          type="text"
          placeholder="Search tomato, potato, brinjal..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        {search && (
          <button
            type="button"
            className="market-clear-btn"
            onClick={() => setSearch("")}
          >
            Clear
          </button>
        )}
      </div>

      <div className="main-market-links">
        <a
          href={ENAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="main-market-btn enam-main-btn"
        >
          Open e-NAM Live Prices
        </a>

        <a
          href={AGMARKNET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="main-market-btn agmarknet-main-btn"
        >
          Open AGMARKNET Daily Prices
        </a>
      </div>

      <p className="market-count">
        {filteredCrops.length}{" "}
        {filteredCrops.length === 1 ? "crop" : "crops"} found
      </p>

      {filteredCrops.length > 0 ? (
        <div className="market-grid">
          {filteredCrops.map((crop) => (
            <article className="market-card" key={crop.name}>
              <img
                src={`/assets/vegetables/${crop.image}`}
                alt={crop.name}
                className="market-crop-image"
              />

              <div className="market-crop-names">
                <h2>{crop.name}</h2>

                <p lang="ks" dir="rtl" className="market-kashmiri-name">
                  {crop.kashmiriName}
                </p>
              </div>

              <p className="market-card-description">
                Check minimum, modal and maximum mandi-price information for{" "}
                {crop.name}.
              </p>

              <div className="market-card-buttons">
                <a
                  href={ENAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="market-price-btn enam-btn"
                >
                  e-NAM Prices
                </a>

                <a
                  href={AGMARKNET_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="market-price-btn agmarknet-btn"
                >
                  AGMARKNET Prices
                </a>
              </div>

              <p className="market-selection-help">
                On the official portal, select the commodity, state, district,
                market and date.
              </p>
            </article>
          ))}
        </div>
      ) : (
        <div className="no-market-crops">
          <h2>No matching crop found</h2>

          <p>Try searching by the English or Kashmiri crop name.</p>

          <button type="button" onClick={() => setSearch("")}>
            Show All Crops
          </button>
        </div>
      )}

      <div className="market-note">
        <strong>Important:</strong> Prices may vary by market, date, crop
        variety, quality and quantity. Always confirm the selected commodity,
        state, district and mandi on the official portal.
      </div>
    </div>
  );
}

export default MarketPrices;