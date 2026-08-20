import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMicrophone, FaSearch, FaRedo, FaLeaf, FaChevronRight } from "react-icons/fa";
import "./CropAdvisory.css";

const crops = [
  { name: "Brinjal", kashmiriName: "وانگن", voiceWords: ["brinjal", "baingan", "wangan", "vangan"], image: "brinjal.png", slug: "brinjal" },
  { name: "Sweet Pepper", kashmiriName: "شملہ مرچ", voiceWords: ["sweet pepper", "capsicum", "shimla mirch"], image: "capsicum.png", slug: "sweet-pepper" },
  { name: "Chillies", kashmiriName: "مرچ", voiceWords: ["chilli", "chillies", "mirchi", "mirch"], image: "chillies.png", slug: "chillies" },
  { name: "Potato", kashmiriName: "آلو", voiceWords: ["potato", "aloo", "alu"], image: "potato.png", slug: "potato" },
  { name: "Tomato", kashmiriName: "ٹماٹر", voiceWords: ["tomato", "tamatar"], image: "tomato.png", slug: "tomato" },
  { name: "Capsicum", kashmiriName: "شملہ مرچ", voiceWords: ["capsicum", "shimla mirch", "sweet pepper"], image: "capsicum.png", slug: "capsicum" },
  { name: "Bottle Gourd", kashmiriName: "لوکی", voiceWords: ["bottle gourd", "lauki", "loki"], image: "bottle-gourd.png", slug: "bottle-gourd" },
  { name: "Cucumber", kashmiriName: "خیار", voiceWords: ["cucumber", "kheera", "khira"], image: "cucumber.png", slug: "cucumber" },
  { name: "Ridge Gourd", kashmiriName: "تورئی", voiceWords: ["ridge gourd", "tori", "torai"], image: "ridge-gourd.png", slug: "ridge-gourd" },
  { name: "Bitter Gourd", kashmiriName: "کریلا", voiceWords: ["bitter gourd", "karela"], image: "bitter-gourd.png", slug: "bitter-gourd" },
  { name: "Pumpkin", kashmiriName: "کدو", voiceWords: ["pumpkin", "kaddu", "kadu"], image: "pumpkin.png", slug: "pumpkin" },
  { name: "French Beans", kashmiriName: "لوبیا", voiceWords: ["french beans", "beans", "lobia"], image: "french-beans.png", slug: "french-beans" },
  { name: "Cauliflower", kashmiriName: "پھول گوبھی", voiceWords: ["cauliflower", "phool gobhi", "phool gobi"], image: "cauliflower.png", slug: "cauliflower" },
  { name: "Cabbage", kashmiriName: "بند گوبھی", voiceWords: ["cabbage", "band gobhi", "band gobi"], image: "cabbage.png", slug: "cabbage" },
  { name: "Knol Khol", kashmiriName: "مونج ہاک", voiceWords: ["knol khol", "monj haakh", "monj hak", "ganth gobhi"], image: "knol khol.png", slug: "knol-khol" },
  { name: "Radish", kashmiriName: "مولی", voiceWords: ["radish", "mooli", "muli"], image: "radish.png", slug: "radish" },
  { name: "Turnip", kashmiriName: "گوگجی", voiceWords: ["turnip", "gogji", "gogjee"], image: "turnip.png", slug: "turnip" },
  { name: "Carrot", kashmiriName: "گاجر", voiceWords: ["carrot", "gajar"], image: "carrot.png", slug: "carrot" },
  { name: "Beetroot", kashmiriName: "چقندر", voiceWords: ["beetroot", "beet", "chukandar", "chakundar"], image: "beetroot.png", slug: "beetroot" },
  { name: "Spinach", kashmiriName: "پالک", voiceWords: ["spinach", "palak"], image: "spinach.png", slug: "spinach" },
  { name: "Fenugreek", kashmiriName: "میتھی", voiceWords: ["fenugreek", "methi"], image: "fenugreek.png", slug: "fenugreek" },
  { name: "Onion", kashmiriName: "پیاز", voiceWords: ["onion", "pyaaz", "pyaz"], image: "onion.png", slug: "onion" },
  { name: "Okra", kashmiriName: "بھنڈی", voiceWords: ["okra", "bhindi"], image: "okra.png", slug: "okra" },
  { name: "Lettuce", kashmiriName: "لیٹس", voiceWords: ["lettuce"], image: "lettuce.png", slug: "lettuce" },
  { name: "Broccoli", kashmiriName: "بروکلی", voiceWords: ["broccoli"], image: "broccoli.png", slug: "broccoli" },
  { name: "Kale", kashmiriName: "کیل", voiceWords: ["kale"], image: "kale.png", slug: "kale" },
  { name: "Garden Pea", kashmiriName: "مٹر", voiceWords: ["garden pea", "garden peas", "pea", "peas", "matar"], image: "garden-pea.png", slug: "garden-pea" },
];

function CropAdvisory() {
  const [search, setSearch] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [voiceMessage, setVoiceMessage] = useState("");

  const filteredCrops = crops.filter((crop) => {
    const searchText = search.trim().toLowerCase();
    const searchableWords = [
      crop.name,
      crop.kashmiriName,
      ...(crop.voiceWords || []),
    ]
      .join(" ")
      .toLowerCase();

    return searchableWords.includes(searchText);
  });

  const startVoiceSearch = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setVoiceMessage("Voice search is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "ur-IN";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => {
      setIsListening(true);
      setVoiceMessage("Listening... Speak crop name.");
    };

    recognition.onresult = (event) => {
      const alternatives = Array.from(event.results[0]).map((result) =>
        result.transcript.toLowerCase().trim()
      );

      let matchedCrop = null;
      for (const crop of crops) {
        const cropWords = [
          crop.name.toLowerCase(),
          crop.kashmiriName,
          ...(crop.voiceWords || []).map((word) => word.toLowerCase()),
        ];

        const isMatched = alternatives.some((spokenText) =>
          cropWords.some(
            (word) => spokenText.includes(word) || word.includes(spokenText)
          )
        );

        if (isMatched) {
          matchedCrop = crop;
          break;
        }
      }

      if (matchedCrop) {
        setSearch(matchedCrop.name);
        setVoiceMessage(`Selected ${matchedCrop.name} (${matchedCrop.kashmiriName})`);
      } else {
        const heardText = alternatives[0] || "";
        setSearch(heardText);
        setVoiceMessage(`No crop found for "${heardText}".`);
      }
    };

    recognition.onerror = () => {
      setVoiceMessage("Voice recognition failed.");
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <div className="crop-advisory-page-wrapper">
      <div className="crop-advisory-main-card">
        
        {/* Banner Header */}
        <div className="advisory-top-banner">
          <div className="header-badge-row">
            <span className="banner-pill-badge">
              <FaLeaf /> Kashmir Crop Directory
            </span>
            <span className="category-tag-badge">Vegetables</span>
          </div>
          <h1 className="banner-title">Vegetable Advisory</h1>
          <p className="banner-subtitle">
            Search or tap any crop to access Kashmiri advisories, disease treatment, and seasonal guidelines.
          </p>
        </div>

        {/* Search & Voice Section */}
        <div className="advisory-search-container">
          <div className="search-bar-inner">
            <FaSearch className="search-glass-icon" />
            <input
              type="text"
              placeholder="Search vegetable or speak..."
              className="advisory-search-input"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setVoiceMessage("");
              }}
            />
          </div>

          <button
            type="button"
            className={`voice-search-btn ${isListening ? "active-listening" : ""}`}
            onClick={startVoiceSearch}
            disabled={isListening}
          >
            <FaMicrophone className="mic-icon" />
            <span>{isListening ? "Listening..." : "Voice"}</span>
          </button>
        </div>

        {voiceMessage && (
          <div className="voice-status-pill">{voiceMessage}</div>
        )}

        {/* Modern Horizontal Row Crop List */}
        {filteredCrops.length > 0 ? (
          <div className="crop-row-list">
            {filteredCrops.map((crop) => (
              <Link
                key={crop.slug}
                to={`/crop-advisory/${crop.slug}`}
                className="crop-row-card"
              >
                <div className="crop-row-left">
                  <div className="crop-image-wrapper">
                    <img
                      src={`/assets/vegetables/${crop.image}`}
                      alt={crop.name}
                    />
                  </div>
                  <div className="crop-info-text">
                    <h3 className="crop-english-title">{crop.name}</h3>
                    <span className="crop-kashmiri-title" lang="ks" dir="rtl">
                      {crop.kashmiriName}
                    </span>
                  </div>
                </div>

                <div className="crop-row-right">
                  <span className="vegetable-pill">More-Info</span>
                  <FaChevronRight className="arrow-icon" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="empty-search-state">
            <p>No matching vegetable found for "{search}".</p>
            <button
              type="button"
              className="reset-btn"
              onClick={() => {
                setSearch("");
                setVoiceMessage("");
              }}
            >
              <FaRedo /> Show All 27 Vegetables
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default CropAdvisory;