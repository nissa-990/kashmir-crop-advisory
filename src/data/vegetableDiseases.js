const vegetableDiseases = [
  {
    crop: "Tomato",
    shortInfo: "Major fungal and soil-borne diseases affecting tomato crops.",
    diseases: [
      {
        name: "Damping off",
        causalOrganism: "Pythium spp., Rhizoctonia spp.",
        symptoms: [
          "Seedlings collapse before or after emergence",
          "Darkening of stem near soil surface"
        ],
        management: [
          "Treat nursery soil with formalin",
          "Seed treatment with captan or thiram",
          "Avoid excess irrigation"
        ]
      }
    ]
  },
  {
    crop: "Brinjal",
    shortInfo: "Seedling and fruit diseases common in brinjal.",
    diseases: [
      {
        name: "Phomopsis blight",
        causalOrganism: "Diaporthe vexans",
        symptoms: [
          "Dark brown spots on leaves",
          "Fruit rot and mummification"
        ],
        management: [
          "Seed treatment with carbendazim",
          "Crop rotation for 3 years"
        ]
      }
    ]
  },
  {
  crop: "Chilli",
  shortInfo: "Major fungal diseases affecting chilli crops in Kashmir.",
  diseases: [
    {
      name: "Damping Off",
      causalOrganism: "Phytophthora spp., Pythium spp., Rhizoctonia spp.",
      symptoms: [
        "Seedlings collapse before or after emergence",
        "Stem rotting near soil surface"
      ],
      management: [
        "Follow nursery sanitation",
        "Seed treatment with carbendazim or thiram",
        "Avoid excessive irrigation"
      ]
    },
    {
      name: "Anthracnose",
      causalOrganism: "Colletotrichum capsici",
      symptoms: [
        "Die-back of twigs from tip",
        "Black circular sunken spots on fruits",
        "Premature fruit drop"
      ],
      management: [
        "Remove infected plant debris",
        "Crop rotation for at least 3 years",
        "Spray carbendazim or mancozeb at recommended dose"
      ]
    },
    {
      name: "Wilt",
      causalOrganism: "Fusarium pallidoroseum, Fusarium solani",
      symptoms: [
        "Drooping and yellowing of leaves",
        "Brown discoloration of vascular tissues",
        "Complete wilting of plant"
      ],
      management: [
        "Seed treatment with carbendazim",
        "Seedling root dip before transplanting",
        "Ensure proper drainage and avoid waterlogging"
      ]
    }
  ]
},
{
  crop: "Capsicum",
  shortInfo: "Capsicum suffers from soil-borne and moisture-related diseases.",
  diseases: [
    {
      name: "Wilt and Root Rot",
      causalOrganism: "Fusarium solani",
      symptoms: [
        "Wilting of plants",
        "Root decay and stunted growth"
      ],
      management: [
        "Follow crop rotation",
        "Seed treatment with carbendazim",
        "Avoid waterlogged conditions"
      ]
    },
    {
      name: "Phytophthora Blight",
      causalOrganism: "Phytophthora capsici",
      symptoms: [
        "Black lesions on stem and fruits",
        "Plant collapse under wet conditions"
      ],
      management: [
        "Use resistant varieties",
        "Maintain proper drainage",
        "Spray metalaxyl or mancozeb at 10–12 day intervals"
      ]
    },
    {
      name: "Sun Scald",
      causalOrganism: "Physiological disorder",
      symptoms: [
        "Yellowish blotches on leaves",
        "Brown sunken patches on fruits"
      ],
      management: [
        "Avoid defoliation",
        "Maintain proper moisture",
        "Spray dithiocarbamates when required"
      ]
    }
  ]
},
{
  crop: "Potato",
  shortInfo: "Potato crops in Kashmir are prone to blight diseases.",
  diseases: [
    {
      name: "Early Blight",
      causalOrganism: "Alternaria solani",
      symptoms: [
        "Brown leaf spots with concentric rings",
        "Premature leaf fall"
      ],
      management: [
        "Remove infected crop debris",
        "Spray mancozeb or hexaconazole",
        "Repeat sprays at 10–20 day intervals"
      ]
    },
    {
      name: "Late Blight",
      causalOrganism: "Phytophthora infestans",
      symptoms: [
        "Brown patches on leaves",
        "Rapid rotting under humid conditions",
        "Stem and tuber infection"
      ],
      management: [
        "Use healthy seed tubers",
        "Seed treatment with metalaxyl",
        "Spray metalaxyl or copper oxychloride at 12–15 day intervals"
      ]
    }
  ]
},
{
  crop: "Potato",
  shortInfo: "Potato crops in Kashmir are prone to blight diseases.",
  diseases: [
    {
      name: "Early Blight",
      causalOrganism: "Alternaria solani",
      symptoms: [
        "Brown leaf spots with concentric rings",
        "Premature leaf fall"
      ],
      management: [
        "Remove infected crop debris",
        "Spray mancozeb or hexaconazole",
        "Repeat sprays at 10–20 day intervals"
      ]
    },
    {
      name: "Late Blight",
      causalOrganism: "Phytophthora infestans",
      symptoms: [
        "Brown patches on leaves",
        "Rapid rotting under humid conditions",
        "Stem and tuber infection"
      ],
      management: [
        "Use healthy seed tubers",
        "Seed treatment with metalaxyl",
        "Spray metalaxyl or copper oxychloride at 12–15 day intervals"
      ]
    }
  ]
},
{
  crop: "Cucumber",
  shortInfo:
    "Cucumber crops in Kashmir are affected by bacterial and fungal diseases under humid conditions.",
  diseases: [
    {
      name: "Angular Leaf Spot",
      causalOrganism: "Pseudomonas syringae pv. lachrymans",
      symptoms: [
        "Small water-soaked angular lesions on leaves",
        "Lesions turn tan on upper surface and gummy underneath",
        "Necrotic centres may fall out creating shot holes",
        "White crusty bacterial exudate on stems and fruits",
        "Fruit rotting and discoloration of vascular tissues"
      ],
      management: [
        "Ensure proper field sanitation",
        "Spray streptocycline @ 2–4 g per 10 litres of water",
        "Repeat spraying at 7–10 day intervals (3 sprays)"
      ]
    },
    {
      name: "Alternaria Leaf Spot",
      causalOrganism: "Alternaria cucumerina",
      symptoms: [
        "Small tan spots on leaves that enlarge and coalesce",
        "Dark concentric rings appear on older lesions",
        "Severe infection causes defoliation",
        "Fruits exposed to sun scald injury"
      ],
      management: [
        "Adopt phytosanitary measures",
        "Seed treatment with captan 50 WP (0.25%) or thiram 75 DS (0.25%)",
        "Spray mancozeb 75 WP (0.3%) or hexaconazole 5 EC (0.03%) every 8–10 days"
      ]
    },
    {
      name: "Powdery Mildew",
      causalOrganism: "Erysiphe cichoracearum",
      symptoms: [
        "White powdery patches on leaves and stems",
        "Fungal growth spreads over entire leaf surface",
        "Black pin-head fruiting bodies appear",
        "Defoliation reduces fruit quality and yield"
      ],
      management: [
        "Maintain field sanitation",
        "Seed treatment with triadimefon or carbendazim",
        "Spray dinocap, hexaconazole, carbendazim or triadimefon at 10–15 day intervals"
      ]
    }
  ]
},
{
  crop: "Bottle Gourd",
  shortInfo:
    "Bottle gourd crops are commonly affected by leaf spot and powdery mildew diseases.",
  diseases: [
    {
      name: "Alternaria Leaf Spot",
      causalOrganism: "Alternaria cucumerina",
      symptoms: [
        "Tan to dark brown spots on leaves",
        "Spots enlarge and may merge causing leaf drying",
        "Severe infection leads to defoliation"
      ],
      management: [
        "Maintain field hygiene",
        "Seed treatment with captan or thiram",
        "Spray mancozeb or hexaconazole at recommended intervals"
      ]
    },
    {
      name: "Powdery Mildew",
      causalOrganism: "Sphaerotheca fuliginea, Erysiphe cichoracearum",
      symptoms: [
        "White powdery growth on leaf surface",
        "Black pin-head fungal bodies visible",
        "Premature leaf fall and reduced fruit yield"
      ],
      management: [
        "Follow same management practices as cucumber",
        "Spray carbendazim, dinocap or hexaconazole at 10–15 day intervals"
      ]
    }
  ]
},
{
  crop: "Pumpkin",
  shortInfo:
    "Pumpkin and summer squash crops are mainly affected by powdery mildew in Kashmir.",
  diseases: [
    {
      name: "Powdery Mildew",
      causalOrganism: "Sphaerotheca fuliginea, Erysiphe cichoracearum",
      symptoms: [
        "White powdery patches on leaves and stems",
        "Fungal growth spreads rapidly under dry conditions",
        "Defoliation leads to reduced fruit quality"
      ],
      management: [
        "Maintain proper field sanitation",
        "Spray dinocap or carbendazim at recommended doses",
        "Repeat sprays at 10–15 day intervals"
      ]
    }
  ]
},
{
  crop: "French Beans",
  shortInfo:
    "French beans in Kashmir are affected mainly by fungal diseases such as rust, anthracnose, and root rot, particularly under humid and cool conditions.",
  diseases: [
    {
      name: "Rust",
      causalOrganism: "Uromyces phaseoli typica",
      symptoms: [
        "Minute white raised spots appear on leaves",
        "Spots enlarge to form brown powdery pustules",
        "Later stages show dark brown or black sori",
        "Severe infection causes premature leaf drop"
      ],
      management: [
        "Adopt field sanitation and destroy infected plant debris",
        "Use disease-free seeds and follow 3–4 year crop rotation",
        "Seed treatment with thiram or carbendazim",
        "Spray triadimefon or flusilazole at first appearance of disease"
      ]
    },
    {
      name: "Root Rot",
      causalOrganism: "Fusarium solani f. sp. phaseoli",
      symptoms: [
        "Dry rotting of taproot near collar region",
        "Reddish discoloration of stem tissues",
        "Yellowing and desiccation of foliage",
        "Reduced water absorption due to damaged roots"
      ],
      management: [
        "Follow crop rotation",
        "Ensure proper drainage and avoid waterlogging",
        "Seed treatment with carbendazim or captan",
        "Apply balanced fertilizers and organic manure"
      ]
    }
  ]
},
{
  crop: "Beans",
  shortInfo:
    "Beans grown in Kashmir are prone to fungal and viral diseases that reduce yield and seed quality if not managed properly.",
  diseases: [
    {
      name: "Angular Leaf Spot",
      causalOrganism: "Phaeoisariopsis griseola",
      symptoms: [
        "Circular spots on leaves that later become angular",
        "Dark grey spots on upper surface and light grey below",
        "Elongated dark lesions on stems and petioles",
        "Shriveled or poorly developed seeds in infected pods"
      ],
      management: [
        "Use resistant varieties",
        "Practice crop rotation and field sanitation",
        "Seed treatment with thiram or carbendazim",
        "Spray carbendazim, mancozeb or copper oxychloride"
      ]
    },
    {
      name: "Anthracnose",
      causalOrganism: "Colletotrichum lindemuthianum",
      symptoms: [
        "Brick red to purplish discoloration along leaf veins",
        "Elongated dark lesions on stems and petioles",
        "Sunken black cankerous spots on pods",
        "Pinkish spore masses appear under humid conditions"
      ],
      management: [
        "Use disease-free seeds",
        "Follow three-year crop rotation",
        "Seed treatment with carbendazim or thiram",
        "Foliar sprays of carbendazim or mancozeb"
      ]
    },
    {
      name: "Bean Common Mosaic Virus",
      causalOrganism: "Bean Common Mosaic Virus (BCMV)",
      symptoms: [
        "Downward curling and puckering of leaves",
        "Mottling and chlorosis on foliage",
        "Bushy and stunted plant growth",
        "Reduced pod formation and yield"
      ],
      management: [
        "Use virus-free seeds",
        "Remove infected plants and nearby host weeds",
        "Adjust planting time to reduce vector activity",
        "Control aphid vectors through recommended practices"
      ]
    }
  ]
},
{
  crop: "Peas",
  shortInfo:
    "Pea crops in Kashmir are commonly affected by seedling diseases and fungal infections influenced by cool temperatures and high soil moisture.",
  diseases: [
    {
      name: "Seed and Seedling Rot",
      causalOrganism: "Pythium spp.",
      symptoms: [
        "Seed rot before germination",
        "Water-soaked, soft and translucent seedlings",
        "Poor plant emergence in wet soils",
        "Severe damage under cool and moist conditions"
      ],
      management: [
        "Seed treatment with metalaxyl or thiram",
        "Use high-germination quality seeds",
        "Avoid excessive soil moisture",
        "Ensure proper field drainage"
      ]
    },
    {
      name: "Fusarium Root Rot",
      causalOrganism: "Fusarium solani f. sp. pisi",
      symptoms: [
        "Reddish-brown streaks near soil line",
        "Yellowing of lower leaves",
        "Stunted plant growth",
        "Root discoloration and decay"
      ],
      management: [
        "Follow long crop rotation",
        "Improve soil fertility and structure",
        "Avoid excessive ammonical fertilizers",
        "Seed treatment with carbendazim or captan"
      ]
    },
    {
      name: "Powdery Mildew",
      causalOrganism: "Erysiphe pisi",
      symptoms: [
        "White powdery growth on leaf surface",
        "Purplish discoloration of underlying tissues",
        "Early senescence of plants",
        "Reduced pod quality and yield"
      ],
      management: [
        "Remove and destroy crop residues",
        "Seed treatment with triadimefon",
        "Spray hexaconazole, dinocap or sulphur",
        "Repeat sprays at recommended intervals"
      ]
    }
  ]
},
{
  crop: "Cabbage",
  shortInfo:
    "Cabbage grown in Kashmir is affected by several fungal and bacterial diseases under cool and humid conditions, especially during nursery and head formation stages.",
  diseases: [
    {
      name: "Black Leg",
      causalOrganism: "Phoma lingam",
      symptoms: [
        "Ash-grey spots with black pycnidia on leaves",
        "Linear lesions with purplish margins on stems",
        "Dark cankers at soil line extending to roots",
        "Sudden wilting and death of plants",
        "Shriveled seeds in severe infection"
      ],
      management: [
        "Adopt phytosanitary measures",
        "Hot water seed treatment at 50°C for 30 minutes",
        "Seed treatment with carbendazim, thiram or captan",
        "Spray mancozeb, carbendazim or copper oxychloride",
        "Follow crop rotation for at least three years",
        "Destroy infected crop residues"
      ]
    },
    {
      name: "Damping Off",
      causalOrganism: "Phytophthora spp., Pythium spp., Rhizoctonia solani",
      symptoms: [
        "Seedlings killed at pre- and post-emergence",
        "Water-soaked lesions at collar region",
        "Seedlings topple and collapse"
      ],
      management: [
        "Use treated seeds in nursery beds",
        "Hot water and streptocycline seed treatment",
        "Ensure proper drainage",
        "Avoid excessive irrigation"
      ]
    },
    {
      name: "Downy Mildew",
      causalOrganism: "Peronospora parasitica",
      symptoms: [
        "Purplish brown spots on lower leaf surface",
        "Yellow to tan lesions on upper surface",
        "Downy fungal growth beneath leaves",
        "Heads exposed to soft rot during transit"
      ],
      management: [
        "Adopt phytosanitary practices",
        "Avoid crucifers in same field for two years",
        "Seed treatment with metalaxyl or mancozeb",
        "Spray metalaxyl, mancozeb or copper oxychloride",
        "Remove and destroy infected debris"
      ]
    },
    {
      name: "Black Rot",
      causalOrganism: "Xanthomonas campestris pv. campestris",
      symptoms: [
        "V-shaped yellow lesions from leaf margins",
        "Blackened veins",
        "Vascular discoloration in stem",
        "Unilateral leaf stunting"
      ],
      management: [
        "Field sanitation",
        "Hot water seed treatment at 52°C",
        "Streptocycline seed dip",
        "Fortnightly streptocycline sprays",
        "Two-year crop rotation"
      ]
    }
  ]
},
{
  crop: "Cauliflower",
  shortInfo:
    "Cauliflower in Kashmir is prone to nursery and field diseases, particularly under cool, moist conditions that favor fungal and bacterial pathogens.",
  diseases: [
    {
      name: "Alternaria Leaf Spot",
      causalOrganism: "Alternaria brassicae, Alternaria brassicicola",
      symptoms: [
        "Dark circular leaf spots with concentric rings",
        "Linear lesions on petioles and stems",
        "Seedling damping off in severe infection"
      ],
      management: [
        "Spray mancozeb, zineb or copper oxychloride",
        "Apply hexaconazole at recommended dose",
        "Repeat sprays at 12–15 day intervals"
      ]
    },
    {
      name: "Downy Mildew",
      causalOrganism: "Peronospora parasitica",
      symptoms: [
        "Brownish discoloration on curd surface",
        "Dark depressed lesions on stem",
        "Downy fungal growth under humid conditions"
      ],
      management: [
        "Adopt same management as cabbage",
        "Seed treatment with metalaxyl or mancozeb",
        "Ensure proper air circulation",
        "Remove infected plant debris"
      ]
    },
    {
      name: "Damping Off",
      causalOrganism: "Rhizoctonia spp.",
      symptoms: [
        "Water-soaked lesions at soil line",
        "Seedlings collapse and die",
        "Constriction of stem near ground level"
      ],
      management: [
        "Same as cabbage",
        "Use disease-free nursery beds",
        "Avoid waterlogging"
      ]
    },
    {
      name: "Black Rot",
      causalOrganism: "Xanthomonas campestris pv. campestris",
      symptoms: [
        "Yellowing and V-shaped lesions on leaves",
        "Blackened veins",
        "Systemic vascular infection"
      ],
      management: [
        "Same as cabbage",
        "Hot water seed treatment",
        "Streptocycline sprays"
      ]
    }
  ]
},
{
  crop: "Knol-Khol",
  shortInfo:
    "Knol-khol cultivation in Kashmir is affected mainly by foliar fungal diseases, particularly under cool and humid environmental conditions.",
  diseases: [
    {
      name: "Alternaria Blight",
      causalOrganism: "Alternaria brassicae, Alternaria brassicicola",
      symptoms: [
        "Dark circular leaf spots",
        "Concentric ring formation",
        "Linear lesions on stems and petioles",
        "Stunted growth in severe cases"
      ],
      management: [
        "Spray mancozeb or zineb",
        "Apply copper oxychloride",
        "Repeat sprays at 12–15 day intervals",
        "Maintain proper field sanitation"
      ]
    }
  ]
},
{
  crop: "Carrot",
  shortInfo:
    "Carrot cultivation in Kashmir is mainly affected by foliar fungal diseases under cool and humid conditions, particularly during later growth stages.",
  diseases: [
    {
      name: "Alternaria Blight",
      causalOrganism: "Alternaria dauci, Alternaria radicina",
      symptoms: [
        "Irregular dark brown to black necrotic lesions on leaves",
        "Pronounced yellow chlorotic zone around lesions",
        "Older leaves are more severely affected",
        "Fleshy roots are generally not affected"
      ],
      management: [
        "Follow same management practices as cabbage",
        "Maintain proper field sanitation",
        "Spray recommended fungicides such as mancozeb or copper oxychloride",
        "Adopt crop rotation and avoid excess moisture"
      ]
    }
  ]
},
{
  crop: "Radish",
  shortInfo:
    "Radish grown in Kashmir is vulnerable to fungal and bacterial diseases that affect leaves and fleshy roots, especially under moist conditions.",
  diseases: [
    {
      name: "Alternaria Leaf Spot",
      causalOrganism: "Alternaria raphani",
      symptoms: [
        "Yellow raised spherical to elliptical spots on leaves",
        "Lesions up to 1 cm in diameter",
        "Black fungal sporulation on spots",
        "Centre of lesions dries and may fall out"
      ],
      management: [
        "Adopt same management practices as cabbage",
        "Maintain field sanitation",
        "Apply recommended fungicidal sprays",
        "Avoid overcrowding and excess irrigation"
      ]
    },
    {
      name: "Bacterial Soft Rot",
      causalOrganism: "Erwinia carotovora",
      symptoms: [
        "Soft watery decay of fleshy tissues",
        "Slimy consistency of infected roots",
        "Water exudation as rot progresses",
        "Rapid tissue breakdown in moist conditions"
      ],
      management: [
        "Maintain strict field sanitation",
        "Avoid injury to roots during harvesting",
        "Ensure proper drainage in fields",
        "Store harvested roots in dry, cool conditions"
      ]
    }
  ]
},
{
  crop: "Onion",
  shortInfo:
    "Onion cultivation in Kashmir is mainly affected by fungal foliar diseases, especially under humid and cool climatic conditions, leading to reduced bulb and seed yield.",
  diseases: [
    {
      name: "Downy Mildew",
      causalOrganism: "Peronospora destructor",
      symptoms: [
        "Plants become dwarfed, distorted and pale green",
        "Violet downy fungal growth on leaves during humid weather",
        "Oval to cylindrical pale lesions on leaves",
        "Infected seed stalks show uneven and stunted growth",
        "Weak stems bend or break causing poor seed formation"
      ],
      management: [
        "Heat onion bulbs at 40°C for 8 hours before sowing",
        "Dip bulbs in metalaxyl MZ @ 0.3% for 8–12 hours",
        "Spray metalaxyl MZ @ 0.2% at 10–14 day intervals",
        "Maintain field sanitation and avoid excess irrigation"
      ]
    },
    {
      name: "Purple Blotch",
      causalOrganism: "Stemphylium vesicarium",
      symptoms: [
        "Small water-soaked light yellow spots on leaves",
        "Lesions turn purple and enlarge into spindle-shaped patches",
        "Dark brown to black lesions due to heavy sporulation",
        "Blighting and drying of leaves",
        "Toppling of seed umbels in severe infection"
      ],
      management: [
        "Adopt phytosanitary measures",
        "Treat seeds with captan or thiram",
        "Spray hexaconazole or mancozeb at 8–10 day intervals",
        "Control thrips population to reduce disease severity"
      ]
    }
  ]
},
{
  crop: "Spinach",
  shortInfo:
    "Spinach grown in Kashmir is prone to leaf spot disease which affects foliage quality and market value, especially during moist growing conditions.",
  diseases: [
    {
      name: "Leaf Spot",
      causalOrganism: "Cercospora beticola",
      symptoms: [
        "Small circular ash-coloured spots on lower leaves",
        "Deep violet or reddish-purple margins around spots",
        "Spots coalesce causing wrinkling and drying of leaves",
        "Papery centres fall out leaving irregular holes",
        "Severe infection leads to leaf drop"
      ],
      management: [
        "Adopt proper field sanitation",
        "Treat seeds with carbendazim @ 0.2%",
        "Spray mancozeb 75 WP @ 0.3% at 8–10 day intervals",
        "Alternatively spray carbendazim 50 WP @ 0.05%"
      ]
    }
  ]
}
];

export default vegetableDiseases;
