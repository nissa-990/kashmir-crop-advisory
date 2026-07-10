import { useState } from "react";
import { Link } from "react-router-dom";
import "./CropAdvisory.css";
import "./crops/CropData.js";

const crops = [
  {
    name: "Brinjal",
    kashmiriName: "وانگن",
    voiceWords: ["brinjal", "baingan", "wangan", "vangan"],
    image: "brinjal.png",
    slug: "brinjal",
  },
  {
    name: "Sweet Pepper",
    kashmiriName: "شملہ مرچ",
    voiceWords: ["sweet pepper", "capsicum", "shimla mirch"],
    image: "capsicum.png",
    slug: "sweet-pepper",
  },
  {
    name: "Chillies",
    kashmiriName: "مرچ",
    voiceWords: ["chilli", "chillies", "mirchi", "mirch"],
    image: "chillies.png",
    slug: "chillies",
  },
  {
    name: "Potato",
    kashmiriName: "آلو",
    voiceWords: ["potato", "aloo", "alu"],
    image: "potato.png",
    slug: "potato",
  },
  {
    name: "Tomato",
    kashmiriName: "ٹماٹر",
    voiceWords: ["tomato", "tamatar"],
    image: "tomato.png",
    slug: "tomato",
  },
  {
    name: "Capsicum",
    kashmiriName: "شملہ مرچ",
    voiceWords: ["capsicum", "shimla mirch", "sweet pepper"],
    image: "capsicum.png",
    slug: "capsicum",
  },
  {
    name: "Bottle Gourd",
    kashmiriName: "لوکی",
    voiceWords: ["bottle gourd", "lauki", "loki"],
    image: "bottle-gourd.png",
    slug: "bottle-gourd",
  },
  {
    name: "Cucumber",
    kashmiriName: "خیار",
    voiceWords: ["cucumber", "kheera", "khira"],
    image: "cucumber.png",
    slug: "cucumber",
  },
  {
    name: "Ridge Gourd",
    kashmiriName: "تورئی",
    voiceWords: ["ridge gourd", "tori", "torai"],
    image: "ridge-gourd.png",
    slug: "ridge-gourd",
  },
  {
    name: "Bitter Gourd",
    kashmiriName: "کریلا",
    voiceWords: ["bitter gourd", "karela"],
    image: "bitter-gourd.png",
    slug: "bitter-gourd",
  },
  {
    name: "Pumpkin",
    kashmiriName: "کدو",
    voiceWords: ["pumpkin", "kaddu", "kadu"],
    image: "pumpkin.png",
    slug: "pumpkin",
  },
  {
    name: "French Beans",
    kashmiriName: "لوبیا",
    voiceWords: ["french beans", "beans", "lobia"],
    image: "french-beans.png",
    slug: "french-beans",
  },
  {
    name: "Cauliflower",
    kashmiriName: "پھول گوبھی",
    voiceWords: ["cauliflower", "phool gobhi", "phool gobi"],
    image: "cauliflower.png",
    slug: "cauliflower",
  },
  {
    name: "Cabbage",
    kashmiriName: "بند گوبھی",
    voiceWords: ["cabbage", "band gobhi", "band gobi"],
    image: "cabbage.png",
    slug: "cabbage",
  },
  {
    name: "Knol Khol",
    kashmiriName: "مونج ہاک",
    voiceWords: ["knol khol", "monj haakh", "monj hak", "ganth gobhi"],
    image: "knol khol.png",
    slug: "knol-khol",
  },
  {
    name: "Radish",
    kashmiriName: "مولی",
    voiceWords: ["radish", "mooli", "muli"],
    image: "radish.png",
    slug: "radish",
  },
  {
    name: "Turnip",
    kashmiriName: "گوگجی",
    voiceWords: ["turnip", "gogji", "gogjee"],
    image: "turnip.png",
    slug: "turnip",
  },
  {
    name: "Carrot",
    kashmiriName: "گاجر",
    voiceWords: ["carrot", "gajar"],
    image: "carrot.png",
    slug: "carrot",
  },
  {
    name: "Beetroot",
    kashmiriName: "چقندر",
    voiceWords: ["beetroot", "beet", "chukandar", "chakundar"],
    image: "beetroot.png",
    slug: "beetroot",
  },
  {
    name: "Spinach",
    kashmiriName: "پالک",
    voiceWords: ["spinach", "palak"],
    image: "spinach.png",
    slug: "spinach",
  },
  {
    name: "Fenugreek",
    kashmiriName: "میتھی",
    voiceWords: ["fenugreek", "methi"],
    image: "fenugreek.png",
    slug: "fenugreek",
  },
  {
    name: "Onion",
    kashmiriName: "پیاز",
    voiceWords: ["onion", "pyaaz", "pyaz"],
    image: "onion.png",
    slug: "onion",
  },
  {
    name: "Okra",
    kashmiriName: "بھنڈی",
    voiceWords: ["okra", "bhindi"],
    image: "okra.png",
    slug: "okra",
  },
  {
    name: "Lettuce",
    kashmiriName: "لیٹس",
    voiceWords: ["lettuce"],
    image: "lettuce.png",
    slug: "lettuce",
  },
  {
    name: "Broccoli",
    kashmiriName: "بروکلی",
    voiceWords: ["broccoli"],
    image: "broccoli.png",
    slug: "broccoli",
  },
  {
    name: "Kale",
    kashmiriName: "کیل",
    voiceWords: ["kale"],
    image: "kale.png",
    slug: "kale",
  },
  {
    name: "Garden Pea",
    kashmiriName: "مٹر",
    voiceWords: ["garden pea", "garden peas", "pea", "peas", "matar"],
    image: "garden-pea.png",
    slug: "garden-pea",
  },
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
      setVoiceMessage(
        "Voice search is not supported in this browser. Please type the crop name."
      );
      return;
    }

    const recognition = new SpeechRecognition();

    // Urdu recognition is used because most browsers do not currently
    // provide reliable native Kashmiri speech recognition.
    recognition.lang = "ur-IN";
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.maxAlternatives = 3;

    recognition.onstart = () => {
      setIsListening(true);
      setVoiceMessage("🎤 Listening... Please say the crop name.");
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
            (word) =>
              spokenText.includes(word) || word.includes(spokenText)
          )
        );

        if (isMatched) {
          matchedCrop = crop;
          break;
        }
      }

      if (matchedCrop) {
        setSearch(matchedCrop.name);
        setVoiceMessage(
          `✅ ${matchedCrop.name} (${matchedCrop.kashmiriName}) selected`
        );
      } else {
        const heardText = alternatives[0] || "";
        setSearch(heardText);
        setVoiceMessage(`No crop found for "${heardText}". Please try again.`);
      }
    };

    recognition.onerror = (event) => {
      if (event.error === "not-allowed") {
        setVoiceMessage(
          "Microphone permission was denied. Please allow microphone access."
        );
      } else if (event.error === "no-speech") {
        setVoiceMessage("No speech was detected. Please try again.");
      } else {
        setVoiceMessage("Voice recognition failed. Please try again.");
      }

      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <div className="container">
      <h2>Select Crop</h2>

      <div className="search-area">
        <input
          type="text"
          placeholder="Search crop by typing or voice"
          className="search-box"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
            setVoiceMessage("");
          }}
        />

        <button
          type="button"
          className={`voice-btn ${isListening ? "listening" : ""}`}
          onClick={startVoiceSearch}
          disabled={isListening}
          aria-label="Search crop using voice"
        >
          {isListening ? "🎙 Listening..." : "🎤 Speak"}
        </button>
      </div>

      {voiceMessage && (
        <p className="voice-message">{voiceMessage}</p>
      )}

      {filteredCrops.length > 0 ? (
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

              <div className="crop-name">
                <p className="english-name">{crop.name}</p>

                <p
                  className="kashmiri-name"
                  lang="ks"
                  dir="rtl"
                >
                  {crop.kashmiriName}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="no-crops-found">
          <p>No matching crop found.</p>

          <button
            type="button"
            onClick={() => {
              setSearch("");
              setVoiceMessage("");
            }}
          >
            Show All Crops
          </button>
        </div>
      )}
    </div>
  );
}

export default CropAdvisory;