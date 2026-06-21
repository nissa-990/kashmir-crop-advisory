// cropdata.js

const cropData = [
  {
    name: "Brinjal",
    climateAndSoil: `It requires long warm growing season. Long chilling spells cause considerable damage...`,
    nurseryAndFieldPreparation: `Raised nursery beds are more suited than the flat ones...`,
    recommendedVarieties: [
      { name: "Dilruba", description: "Cross-bred variety, moderately resistant to diseases, yield 150-200 q/ha." },
      { name: "Pusa Purple Long", description: "Dwarf, semi-erect, early-season variety, yield 150-200 q/ha." },
      { name: "Black Beauty", description: "Tall, erect, mid season variety, yield 150-200 q/ha." },
      { name: "Shalimar Improved", description: "Tall, erect, early season, yield 200-225 q/ha." },
      { name: "DBL-02", description: "Non-spiny, long violet fruits, yield 40 t/ha." },
      { name: "Shalimar Brinjal Hybrid-1", description: "Compact flowers, medium long pink fruits, yield 800 q/ha." },
      { name: "Shalimar Brinjal Hybrid-2", description: "Tall compact, purple cylindrical fruits, yield 540 q/ha." },
      { name: "Pusa Hybrid-5", description: "Vigorous, long glossy fruits, yield 520-540 q/ha." }
    ],
    seedlingRaising: {
      sowing: "Seeds are sown on raised seed beds in 5-10mm deep furrows, 5-10 cm apart.",
      seedRate: { varieties: "500-750 g/ha", hybrid: "300-400 g/ha" },
      sowingTime: "Mid April-End of May",
      transplanting: "4-5 weeks old seedlings transplanted in May-June, on ridges for water efficiency."
    },
    spacing: {
      "Pusa Purple Long": "60 x 60 cm",
      "Black Beauty and other recommended varieties": "60 x 45 cm",
      "Hybrids": "60 x 45 cm"
    },
    fertilizers: {
      FYM: { varieties: "20-25 t/ha", hybrids: "20 t/ha" },
      N: { varieties: "120 kg/ha", hybrids: "180 kg/ha" },
      P: { varieties: "90 kg/ha", hybrids: "150 kg/ha" },
      K: { varieties: "60 kg/ha", hybrids: "90 kg/ha" }
    },
    irrigationAndInterculture: "Shallow hoeing every 15-20 days with light weekly irrigation.",
    harvesting: "Fruits harvested when glossy and mature, from July to November.",
    seedProduction: `Isolate varieties, remove off-types, harvest fully ripe fruits, extract seeds by crushing and washing. Store in cool, dry place.`
  },

  {
    name: "Sweet Pepper",
    climateAndSoil: `Grows well in warm and cold climates; dies at freezing temperatures...`,
    nurseryAndFieldPreparation: `Raised nursery beds desired. Field ploughed 3-4 times, planked for levelling...`,
    recommendedVarieties: [
      { name: "California Wonder", description: "Erect, thick-walled, 6-8 cm fruits, yield 60-70 q/ha." },
      { name: "Chinese Giant", description: "Erect, large fruits, yield 50-60 q/ha." },
      { name: "Nishat-1", description: "Compact, yellow ripening fruits, yield 180-200 q/ha." },
      { name: "Shalimar Capsicum Hybrid-1", description: "Compact, 3-4 lobed thick flesh, yield 700-750 q/ha." },
      { name: "Shalimar Capsicum Hybrid-2", description: "Compact, dark green fruits turning red, yield 600-650 q/ha." }
    ],
    seedlingRaising: {
      sowing: "Seeds sown in shallow furrows 5-6 mm deep, 10-15 cm apart, covered with manure or ash.",
      seedRate: { varieties: "1-1.5 kg/ha", hybrids: "300-400 g/ha" },
      sowingTime: { open: "April-mid May", protected: "February-March" },
      transplanting: "4-5 weeks old seedlings at 60x45 cm for varieties, 60x60 cm for hybrids."
    },
    fertilizers: {
      FYM: "20 t/ha, half basal, half top dressing",
      N: { varieties: 120, hybrids: 150 },
      P: { varieties: 90, hybrids: 100 },
      K: { varieties: 60, hybrids: 90 },
      foliarSpray: "NPK 17:10:27 at 0.5%, micronutrients B,Zn,Cu,Fe,Mn,Mo at 0.5% for higher yield."
    },
    irrigationAndInterculture: "Frequent shallow hoeing and weeding. Irrigation every 6-8 days if hot.",
    seedProduction: "Fully ripe fruits harvested, seeds extracted, dried to 8-9% moisture, stored cool/dry."
  },

  {
    name: "Chillies",
    climateAndSoil: "Similar to sweet pepper.",
    nurseryAndFieldPreparation: "Same as sweet pepper.",
    recommendedVarieties: [
      { name: "Shalimar Long", description: "Medium height, bright red fruits, yield 75-100 q/ha." },
      { name: "Kashmir Long 1", description: "Medium tall, thick, moderately pungent, yield 150 q/ha." },
      { name: "PC-56", description: "Medium tall, upright, medium pungency, yield 140-150 q/ha." }
    ],
    seedlingRaising: { sowing: "Similar to capsicum", seedRate: "1.5-2.0 kg/ha", sowingTime: { open: "April-mid May", protected: "February-March" } },
    transplanting: "4-5 weeks old seedlings, spaced 25-30 cm apart, on ridges.",
    fertilizers: { FYM: "20-25 t/ha, half basal, half top dressing", N: 150, P: 90, K: 60 },
    irrigationAndInterculture: "2-3 shallow hoeings with weeding, irrigation every 7-10 days.",
    seedProduction: "Maintain isolation distance, rogues removed, harvest fully ripe fruits, extract and dry seeds."
  },

  {
    name: "Tomato",
    climateSoil: `Warm season crop, sensitive to frost. Optimal 20-27°C. Well-drained, fertile soils rich in organic matter.`,
    nurseryFieldPrep: `Raised nursery beds 1m width, 30 cm above ground. Land ploughed 3-4 times and planked for fine tilth.`,
    recommendedVarieties: [
        { name: "Shalimar-I", details: "Semi-determinate, red round fruits, matures 100-110 days, yields 250-275 q/ha." },
        { name: "Shalimar-II", details: "Early maturing, dwarf, high yield at high elevation, 200-210 q/ha." },
        { name: "Roma", details: "Semi-dwarf, pear shaped, thick pericarp, yields 200-225 q/ha." },
        { name: "Pant Bahar", details: "Bushy, medium size fruits, yields 250 q/ha." },
        { name: "PT-3", details: "70g fruits, suitable for processing, yields 300 q/ha." }
    ],
    seedlingRaising: `Seeds sown on raised beds 5-10 cm apart, lightly covered with compost or ash.`,
    seedRate: `500-600 g/ha`,
    transplanting: `Seedlings 10-15 cm tall, 4-5 weeks old. Spacing: 45x30 cm (Shalimar I), 60x45 cm (Roma & Shalimar II).`,
    manuresFertilizers: `FYM 20 t/ha, N 120-150 kg/ha, P 90-100 kg/ha, K 60 kg/ha. Half applied basal, half as top dressing. Azotobacter seed treatment recommended.`,
    intercultureIrrigation: `Shallow hoeing, staking to avoid fruit rotting, irrigation every 7-10 days.`,
    harvesting: `Harvest at green, breaker, pink, ripe, or over-ripe stage. Seed extraction via fermentation, alkali or acid methods. Dry to 10-12% moisture and store cool and dry.`
},
{
    name: "Potato",
    climateSoil: `Grows sea level to snow line. Optimal tuberization 20°C. Best yield on sandy or silt loam, well-drained soils.`,
    nurseryFieldPrep: `Land ploughed deep once, followed by 3-4 shallow ploughings, planked for fine tilth.`,
    recommendedVarieties: [
        { name: "Kufri Jyoti", details: "Tall, compact, oval white tubers, yields 200-250 q/ha." },
        { name: "Gulmarg Special", details: "Tall, dark green, oval flat white tubers, yields 250-280 q/ha." },
        { name: "Kufri Giriraj", details: "Medium tall, semi-erect, white tubers, resistant to late blight, yields 200-250 q/ha." }
    ],
    dormancy: `Potato tubers have dormancy. Cut into pieces, dip in 1% thiourea for 1 hour, plant immediately.`,
    manuresFertilizers: `FYM 20-25 t/ha, N 150 kg/ha, P 100 kg/ha, K 100 kg/ha. Half applied basal, half at first earthing up. Supplement with vermicompost, biofertilizers, and CaSO4 foliar spray.`,
    plantingTime: `1st Crop: High hills: mid-April–May, Mid hills: mid-March; 2nd Crop: Mid hills: mid-July`,
    transplanting: `Small beds, furrows 60 cm apart, tubers 20 cm apart, cover with 10-15 cm soil ridge.`,
    intercultureIrrigation: `Earthing up at 10-15 cm and 6-8 weeks. Weeding, half ridge irrigation. Stop irrigation 15-20 days before harvest.`,
    harvesting: `Harvest when foliage matures. Cure tubers 10-15 days. Grade tubers by size: small, medium, large, extra-large.`
},
{
    name: "Bottle Gourd",
    climateSoil: `Requires warm and humid climate. Sensitive to frost. Well-drained sandy loam soils rich in organic matter are ideal.`,
    nurseryFieldPrep: `Land ploughed 2-3 times followed by levelling. Beds for seedlings should be 1 m wide and raised.`,
    recommendedVarieties: [
        { name: "Pusa Naveen", details: "Vine type, smooth fruits, light green, yields 150-200 q/ha." },
        { name: "Pusa Summer Prolific", details: "High yielding, slender fruits, suitable for summer crop, yields 200 q/ha." },
        { name: "Arka Suvidha", details: "Vigorous growth, fruits uniform, suitable for high-density planting." }
    ],
    seedlingRaising: `Seeds sown in nursery beds 3-5 cm deep, 30 cm apart. Keep beds moist and shaded initially.`,
    seedRate: `3-4 kg/ha`,
    transplanting: `Seedlings 3-4 weeks old transplanted to main field. Spacing: 2-2.5 m between rows, 1 m between plants.`,
    manuresFertilizers: `FYM 25 t/ha, N 120 kg/ha, P 60 kg/ha, K 80 kg/ha. Half applied as basal, rest in two top dressings.`,
    intercultureIrrigation: `Frequent shallow hoeing, trellis or support for vine growth, irrigation 2-3 times per week during summer.`,
    harvesting: `Harvest when fruits are tender and light green. Frequent picking increases total yield and prolongs harvesting period.`
},
{
    name: "Cucumber",
    climateSoil: `Warm-season crop, sensitive to frost. Optimal temperature 20-30°C. Well-drained sandy loam soils rich in organic matter.`,
    nurseryFieldPrep: `Beds 1 m wide, raised 15 cm. Land ploughed and leveled with fine tilth.`,
    recommendedVarieties: [
        { name: "Pusa Sanyog", details: "High yielding, dark green fruits, 200-250 q/ha." },
        { name: "Pusa Uday", details: "Tolerant to powdery mildew, light green fruits, yields 180-220 q/ha." },
        { name: "Poinsett", details: "Slender, long fruits, suitable for early sowing, yields 150-200 q/ha." }
    ],
    seedlingRaising: `Seeds sown 2-3 cm deep in nursery beds, kept moist and shaded initially.`,
    seedRate: `1.5-2 kg/ha`,
    transplanting: `Seedlings 3-4 weeks old. Spacing: 1.5-2 m between rows, 50-60 cm between plants.`,
    manuresFertilizers: `FYM 20 t/ha, N 120 kg/ha, P 60 kg/ha, K 80 kg/ha. Half as basal, rest in top dressing.`,
    intercultureIrrigation: `Frequent shallow hoeing, trellis support recommended. Irrigate every 3-4 days during summer.`,
    harvesting: `Harvest tender, medium-sized fruits frequently to maintain production.`
},
{
    name: "Ridge Gourd",
    climateSoil: `Warm, humid climate preferred. Frost sensitive. Well-drained sandy loam soils rich in organic matter.`,
    nurseryFieldPrep: `Nursery beds 1 m wide, raised 10-15 cm. Land ploughed 2-3 times and leveled.`,
    recommendedVarieties: [
        { name: "Pusa Nasdar", details: "High yielding, smooth ridged fruits, 150-200 q/ha." },
        { name: "Pusa Sneha", details: "Vigorous growth, uniform fruits, suitable for summer, yields 180-220 q/ha." },
        { name: "Punjab Chhuhara", details: "Early maturing, high quality, yields 160-200 q/ha." }
    ],
    seedlingRaising: `Seeds sown 2-3 cm deep, seedlings 3-4 weeks old ready for transplanting.`,
    seedRate: `3-4 kg/ha`,
    transplanting: `Spacing 2 m between rows, 50-60 cm between plants. Provide trellis support for vine growth.`,
    manuresFertilizers: `FYM 20-25 t/ha, N 120 kg/ha, P 60 kg/ha, K 80 kg/ha. Split application: half basal, half top dressing.`,
    intercultureIrrigation: `Weed management and irrigation 2-3 times per week during summer. Mulching helps retain moisture.`,
    harvesting: `Pick tender fruits frequently to prolong harvesting and increase yield.`
},
{
    name: "Bitter Gourd",
    climateSoil: `Requires warm, humid climate, sensitive to frost. Well-drained loamy soils rich in organic matter.`,
    nurseryFieldPrep: `Nursery beds 1 m wide, 10-15 cm above ground. Land ploughed and leveled.`,
    recommendedVarieties: [
        { name: "Pusa Do Mausami", details: "High yielding, medium bitter fruits, 150-180 q/ha." },
        { name: "Pusa Vishesh", details: "Early maturing, smooth fruits, yields 120-160 q/ha." },
        { name: "Arka Harit", details: "Vigorous vine, high fruit quality, yields 150 q/ha." }
    ],
    seedlingRaising: `Seeds sown 2-3 cm deep in nursery beds. Maintain moisture and partial shade.`,
    seedRate: `2-3 kg/ha`,
    transplanting: `Seedlings 3-4 weeks old, spacing 2 m between rows, 50-60 cm between plants. Trellis recommended.`,
    manuresFertilizers: `FYM 20 t/ha, N 120 kg/ha, P 60 kg/ha, K 80 kg/ha. Half applied basal, half in two top dressings.`,
    intercultureIrrigation: `Frequent hoeing, mulching recommended. Irrigate 2-3 times per week during dry spells.`,
    harvesting: `Harvest tender, medium-sized fruits every 2-3 days to increase total yield.`
},
{
    name: "Pumpkin",
    climateSoil: `Warm-season crop, frost sensitive. Well-drained loamy or sandy loam soils with high organic matter.`,
    nurseryFieldPrep: `Nursery beds 1-1.5 m wide, raised 10-15 cm. Land ploughed and leveled.`,
    recommendedVarieties: [
        { name: "Arka Suryamukhi", details: "High yielding, round yellow-orange fruits, 150-200 q/ha." },
        { name: "Pusa Hybrid-1", details: "Early maturing, smooth fruits, yields 160-180 q/ha." },
        { name: "Kashi Hybrid", details: "Vigorous growth, uniform fruits, suitable for summer crop." }
    ],
    seedlingRaising: `Seeds sown 2-3 cm deep, seedlings ready in 3-4 weeks for transplanting.`,
    seedRate: `1.5-2 kg/ha`,
    transplanting: `Spacing 2-3 m between rows, 1-1.5 m between plants. Provide trellis or space for creeping vines.`,
    manuresFertilizers: `FYM 20-25 t/ha, N 100 kg/ha, P 60 kg/ha, K 80 kg/ha. Apply half basal, half in top dressing.`,
    intercultureIrrigation: `Weed management, mulching recommended. Irrigate once or twice per week depending on rainfall.`,
    harvesting: `Harvest mature fruits when skin hardens. Cure in shade for 7-10 days before storage.`
},
{
    name: "Cabbage",
    recommendedVarieties: [
        { name: "Golden Acre", details: "Early variety, short stalk, compact few outer leaves, small cup-shaped leaves, uniform solid round interior clear white, yield 200-250 q/ha." },
        { name: "Pusa Drum Head (PDH)", details: "Short stalk, wide frame, light green outer leaves with veins, uniform flat solid heads weighing 2-3 kg, resistant to black leg, yield 250-300 q/ha." }
    ],
    recommendedHybrids: [
        { name: "Sri Ganesh Gol", details: "Round, compact bluish green heads, good staying power, maturity 90-95 days." },
        { name: "BSS-50 (Bajrang)", details: "Early (65 days), dark green smooth compact heads, average weight 1 kg." }
    ],
    seedSowingTransplanting: {
        method: "Seeds sown in shallow furrows 5-10 cm apart, covered with compost/ash/soil. Transplant seedlings at 45 days old.",
        sowingTime: "March-April and July-August",
        seedRate: "500-800 g/ha",
        transplantingTime: "April-May and August-September",
        spacing: "45 x 45 cm (Golden Acre), 60 x 45 cm (PDH)"
    },
    manuresFertilizers: {
        FYM: "10 t/ha",
        PoultryManure: "7 t/ha",
        N: "150 kg/ha",
        P: "60 kg/ha",
        K: "60 kg/ha",
        foliarApplication: "5 weekly foliar sprays of polyfeed (19-19-19) at 5 g/l from 30 DAT; 3 sprays of micronutrients B, Zn, Cu, Fe, Mn, Mo at 10-day intervals from 40 DAT."
    },
    intercultureIrrigation: "2-3 intercultural operations, avoid deep hoeing, remove weeds. 6-8 light irrigations at 10-15 day intervals, maintain soil moisture during head formation.",
    harvesting: "Harvest mature heads when firm and solid."
},
{
    name: "Cauliflower",
    recommendedVarieties: [
        { name: "Snow Ball", details: "Late variety, straight upright leaves slightly cover curd, medium compact snow-white curds, yield 200-300 q/ha." },
        { name: "Snow Ball-16", details: "Self-blanching type, compact nobly curds, snow-white, average yield 300 q/ha." },
        { name: "Pusa Katki", details: "Medium-sized plants with bluish green leaves, medium compact white curds, yield 150-200 q/ha." }
    ],
    seedSowingTransplanting: {
        sowingTime: "April-May (spring), July-August (autumn)",
        seedRate: "500-600 g/ha",
        transplantingTime: "May-June (spring), August-September (autumn)",
        spacing: "60 x 30 cm (spring), 60 x 45 cm (autumn)"
    },
    manuresFertilizers: {
        FYM: "25-30 t/ha",
        N: "100 kg/ha",
        P: "120 kg/ha",
        K: "60 kg/ha",
        application: "Entire FYM, P, K and ½ N at sowing; remaining ½ N 30 days after transplanting."
    },
    intercultureIrrigation: "Shallow frequent hoeing to control weeds; maintain optimum soil moisture during curd formation.",
    commonDisorders: [
        { name: "Buttoning", cause: "Poor N, over-aged seedlings, wrong sowing time", correction: "Select proper variety, apply recommended N, transplant healthy seedlings at correct age." },
        { name: "Riceyness", cause: "Warm weather, poor seed quality", correction: "Sow at favorable weather, use high-quality seeds." },
        { name: "Fuzziness", cause: "Unfavorable weather, hereditary factors, delayed harvesting", correction: "Avoid high temperature sowing, harvest timely." },
        { name: "Leafy Curd", cause: "High/low temperature", correction: "Plant varieties so curd formation coincides with optimum temperature." },
        { name: "Blindness", cause: "Low temperature at initial growth, terminal bud injury", correction: "Protect from low temperature, handle seedlings carefully." },
        { name: "Browning", cause: "Boron deficiency", correction: "Apply borax 10-15 kg/ha or spray 0.1% boric acid, harvest properly." },
        { name: "Whip Tail", cause: "Molybdenum deficiency in acidic soils", correction: "Apply 0.5-1.0 kg ammonium molybdate/ha, adjust soil pH to 6.5." },
        { name: "Hollow Stem", cause: "Boron deficiency or excess N", correction: "Spray borax 0.3-0.4%, reduce N, transplant at closer spacing." }
    ]
},
{
    name: "Knol Khol",
    recommendedVarieties: [
        { name: "Early White Vienna", details: "Early (70-80 days), dwarf, medium green foliage, globular round knob, tender crisp flesh, yield 200-250 q/ha." },
        { name: "Purple Vienna", details: "Leaves purplish, knob globular round large, light green flesh, yield 200-250 q/ha." },
        { name: "King of Market", details: "Late (80-90 days), dark green foliage, round flat knob, broad leaves covering knob, yield 250-275 q/ha." }
    ],
    seedSowingTransplanting: {
        method: "Seeds sown in shallow furrows 5-10 cm apart, covered with compost/ash/soil. Transplant 4-6 week-old seedlings.",
        sowingTime: "March-April and July-August",
        seedRate: "1.2-1.5 kg/ha",
        spacing: "30 x 15 cm"
    },
    manuresFertilizers: {
        FYM: "15-20 t/ha",
        N: "125 kg/ha",
        P: "60 kg/ha",
        K: "80 kg/ha",
        additional: "Boron 15 kg/ha + Zinc 15 kg/ha; Azospirillum soil application 5 kg/ha with RFD enhances yield."
    },
    intercultureIrrigation: "Similar to cabbage/cauliflower; avoid hoeing near knob; frequent light irrigation in hot season, maintain soil moisture during knob formation.",
    harvesting: "Harvest mature knobs when firm; available almost year-round except during chilly winter months."
},
{
    name: "Carrot",
    recommendedVarieties: [
        { name: "Early Nantes", details: "Foliage height 15-20 cm, roots cylindrical with small tail, 12-15 cm long, fine textured, orange flesh with self-coloured core, yield 200 q/ha." },
        { name: "Chammam", details: "Dark green semi-erect foliage, long cylindrical semi-blunt roots, orange flesh, tender sweet, less cracking, yield 250-275 q/ha." },
        { name: "Local Black", details: "Spreading type, green to purplish foliage, roots tapering medium size, dark purple with white core, yield 200-250 q/ha." }
    ],
    seedSowing: {
        sowingTime: "August-September",
        seedRate: "3.5-5.0 kg/ha",
        spacing: "30 x 15 cm"
    },
    manuresFertilizers: {
        FYM: "20-25 t/ha",
        N: "90 kg/ha",
        P: "60 kg/ha",
        K: "60 kg/ha",
        organicManure: "FYM 10 t/ha + vermicompost 2 t/ha with biofertilizers (Azotobacter, Azospirillium, PSB 5 kg/ha each) and VAM 15 kg/ha",
        application: "Entire FYM, P, K and ½ N at ridge raising; remaining ½ N 30 days after thinning"
    },
    intercultureIrrigation: "Shallow hoeings to suppress weeds, pre-sowing irrigation for uniform germination, frequent light irrigations to maintain soil moisture.",
    plantSpacing: "60 x 30 cm",
    seedYield: "13-15 q/ha"
},
{
    name: "Radish",
    recommendedVarieties: [
        { name: "White Round", details: "European type, spreading green foliage, globular/round shining white roots, fine-grained pungent flesh, yield 250-300 q/ha." },
        { name: "Red Round", details: "European type, red-skinned roots, crisp white flesh, pungent, yield 250-300 q/ha." },
        { name: "Japanese White Long", details: "Foliage 20-25 cm, cool season, medium-large tops, roots 22-25 cm long, cylindrical, blunt, smooth, pure white flesh, crisp, mildly pungent, yield 200-250 q/ha." },
        { name: "Scarlet Globe", details: "Foliage 10-15 cm, roots round small 2 cm diameter, bright red, crisp white flesh, yield 80-100 q/ha." },
        { name: "Rapid Red White Tip", details: "Small globular roots, bright red with white tip, crisp and snappy flesh, yield 80-100 q/ha." },
        { name: "Scarlet Long", details: "Foliage 15-20 cm, light green, roots long tapering to point, red color, white crispy flesh, yield 80-100 q/ha." }
    ],
    seedSowing: {
        sowingTime: "August-September (White/Red/ Japanese), March-June (Table Radish)",
        seedRate: "7.5-10 kg/ha (main), 8-10 kg/ha (table)",
        spacing: "30 x 15-20 cm (main), 20 x 5-10 cm (table)"
    },
    manuresFertilizers: {
        FYM: "15-20 t/ha",
        N: "50-90 kg/ha depending on variety",
        P: "25-60 kg/ha",
        K: "25-60 kg/ha",
        application: "Entire FYM, P, K and ½ N at ridge raising; remaining ½ N 30 days after thinning"
    },
    intercultureIrrigation: "Shallow hoeings to suppress weeds, light irrigations as required, maintain soil moisture for quality roots.",
    plantSpacing: "60 x 30 cm",
    seedYield: "8-9 q/ha"
},
{
    name: "Turnip",
    recommendedVarieties: [
        { name: "Purple Top White Globe", details: "Temperate type, top dark green erect 20-25 cm, roots large round creamy white with purple top, firm crispy sweet flesh, yield 300-350 q/ha." },
        { name: "Pusa Chandrima", details: "Medium tops, leaves not deeply cut, medium-large globular to roundish flat roots, white fine-grained tender flesh, yield 275-300 q/ha." },
        { name: "Nageen-1", details: "Large round compact pure white roots, fine-grained moderately sweet flesh, yield 350-400 q/ha." }
    ],
    seedSowing: {
        sowingTime: "August-September",
        seedRate: "5-7 kg/ha",
        spacing: "30 x 15-20 cm"
    },
    manuresFertilizers: {
        FYM: "15-20 t/ha",
        N: "90-120 kg/ha",
        P: "90 kg/ha",
        K: "60 kg/ha",
        application: "Entire FYM, P, K and ½ N at ridge raising; remaining ½ N 30 days after thinning"
    },
    intercultureIrrigation: "2-3 shallow hoeings with weedings, light irrigations during pod development, maintain soil moisture.",
    plantSpacing: "60 x 30 cm",
    seedYield: "14-18 q/ha"
},
{
    name: "Beetroot",
    recommendedVarieties: [
        { name: "Crimson Globe", details: "Medium to tall tops, large bright green leaves with coppery shade, veins red, roots round to flat round medium red shoulders, dark red flesh, non-corrosive taste raw." },
        { name: "Detroit Dark Red", details: "Small glossy dark green foliage with maroon tinge, midrib thin, maroon veins, perfectly round deep red roots, smooth attractive flesh, corrosive raw taste, responsive to higher N & P." }
    ],
    seedSowing: {
        sowingTime: "August-September",
        seedRate: "10-12 kg/ha",
        spacing: "30 x 15-20 cm"
    },
    manuresFertilizers: {
        FYM: "20-25 t/ha",
        N: "70 kg/ha",
        P: "25 kg/ha",
        K: "60 kg/ha",
        application: "Entire FYM, P, K and ½ N at ridge raising; remaining ½ N 30 days after thinning"
    },
    intercultureIrrigation: "Shallow hoeings to control weeds, maintain soil moisture, light frequent irrigations during root formation.",
    plantSpacing: "60 x 30 cm",
    seedYield: "Not specified"
},
{
    name: "Okra",
    climateSoil: "Long warm season crop. Seeds fail below 20°C, optimum 25-30°C. Highly susceptible to frost. Loamy soils rich in organic matter with good moisture retention are best.",
    landPreparation: "Plough 3-4 times, followed by planking for clod breaking and leveling.",
    recommendedVariety: {
        name: "Pusa Sawani",
        details: "Plant height 150-200 cm, single stemmed, moderately hairy green stem, leaves 5-lobed, fruits ridged, 12-15 cm long, dark green, yield 60-80 q/ha."
    },
    seedSowing: {
        method: "Seeds pre-soaked in hot water (50°C, 30 mins), directly sown on ridge tops 15-20 cm high",
        seedRate: "15-20 kg/ha",
        spacing: "45 x 30 cm",
        sowingTime: "Late April-May",
        thinning: "Thin when seedlings are 7-10 cm high to 30 cm spacing"
    },
    manuresFertilizers: {
        FYM: "20-25 t/ha",
        N: "120 kg/ha",
        P: "90 kg/ha",
        K: "60 kg/ha",
        application: "Entire FYM, P, K and ½ N before sowing; remaining ½ N after thinning"
    },
    intercultureIrrigation: "Hoe 2-3 times in early growth; weed 1-2 times. Maintain soil moisture, irrigate every 5-8 days in hot season.",
    seedProduction: "Retain first 10 fruits on main stem for seed. Foliar spray 100 ppm NAA at 30 and 50 days after sowing for higher yield."
},
{
    name: "Broccoli",
    climateSoil: "Cool season crop; sensitive to very low/high temperatures. Optimal growth 10-25°C, heading stage 15-20°C. Well-drained medium to heavy soils rich in organic matter. Moist soil required.",
    varieties: ["Solan Green Head", "Lucky", "Fiesta"],
    nurseryRaising: "Plough nursery beds, mix with well-rotted FYM. Treat seeds with Thiram/Captan 2.5 g/kg. Sow July-August, lines 8-10 cm apart, seeds 2-3 cm apart, depth 1-1.5 cm.",
    transplanting: "After 4-6 weeks. Spacing 45x45 cm; rich soils may use 45x30 cm. Avoid over-mature seedlings.",
    manuresFertilizers: {
        FYM: "15-20 t/ha",
        N: "80-100 kg/ha",
        P: "80 kg/ha",
        K: "60 kg/ha",
        application: "Full P & K and ½ N at land prep; remaining ½ N split top-dressed: 4-5 weeks after transplanting and before head formation"
    },
    irrigation: "Frequent irrigation every 10-15 days. Avoid dry soil and waterlogging.",
    interculture: "Shallow hoeing to remove weeds, final light earthing-up beneficial.",
    harvesting: "Harvest heads 10-15 cm stems when bud cluster is green and compact. Pick regularly. Yield 100-150 q/ha."
},
{
    name: "Lettuce",
    climateSoil: "Cool season crop, 12-15°C optimum. Sensitive to high temperature; hot weather causes bitter taste, tip burn, and rotting. Performs best on rich, friable, organic soils, pH 5.8-6.6.",
    types: ["Head - Capitata (Butterhead, Crisphead)", "Leaf - Crispa", "Cos - Longifolia", "Asparagus - Asparagus type"],
    varieties: ["Iceberg", "Great Lakes", "Bogampo", "L-S-1", "L-S-2"],
    nurserySowing: "Sow in nursery July-August; transplant seedlings at 5-6 weeks. Some leaf types can be direct sown.",
    seedRate: "500 g/ha",
    manuresFertilizers: { N: "100 kg/ha", P: "60 kg/ha", K: "60 kg/ha" },
    intercultureIrrigation: "Intermittent hoeing and weeding for aeration. Maintain uniform moisture; proper drainage to prevent rotting.",
    harvesting: "Leaf lettuce harvested at full or half-grown size. Head lettuce harvested when heads are well-formed and solid. Can store 2-3 weeks at 0°C and 90-95% RH."
},
{
    name: "Onion",
    climateSoil: "Thrives in cool season; long days favour bulb formation. Dry weather at maturity is favourable. Grows well on light, humus-rich, friable, well-drained soils. Avoid heavy soils.",
    nurseryFieldPreparation: "Raised nursery beds; seeds treated with Thiram 2-2.5 g/kg, sown 1-1.5 cm deep, 5-7 cm apart, August. Transplant after 8-10 weeks into well-prepared fields (ploughed 3-4 times).",
    recommendedVarieties: [
        { name: "Red Globe", details: "Foliage 30-35 cm, dark green, bronze-red globular bulbs, slightly pungent, good keeping quality, yield 200-250 q/ha" },
        { name: "Yellow Globe", details: "Foliage 30-35 cm, pale yellow globular bulbs, moderately pungent, yield 200-250 q/ha" },
        { name: "Brown Spanish", details: "Long day type, maturity 160-180 days, yield 28 t/ha, can store up to 6 months" }
    ],
    seedSowing: {
        seedRate: "7.5-10 kg/ha",
        transplantingTime: "Oct-Nov / Late Feb-Mar",
        spacing: "20 x 15 cm",
        treatment: "PBA @ 10^-4 (1 g in 10 L water) for 2 hours before sowing"
    },
    manuresFertilizers: {
        FYM: "20-30 t/ha",
        N: "100 kg/ha",
        P: "80 kg/ha",
        K: "60 kg/ha",
        application: "Entire FYM, P, K and ½ N before transplanting; remaining ½ N as top dressing"
    },
    intercultureIrrigation: "Shallow hoeing 2-3 times, irrigation as needed, avoid field drying. Stop irrigation 15-20 days before maturity.",
    seedProduction: "Select healthy, true-to-type bulbs, plant in November, spacing 60 x 20 cm. Isolation 1000 m from other onion varieties.",
    harvesting: "Harvest when 50-60% tops fall. Cure in shade for complete drying. Seed harvested when capsules turn silvery with black seeds."
},

  {
    name: "French Beans",
    climateSoil:
      "French bean is a warm season crop, sensitive to frost and very high temperatures. Optimum soil temperature is 25–30°C. Sandy loam soils are best. Excess moisture and high nitrogen delay maturity.",
    landPreparation:
      "Land is ploughed 3–4 times followed by planking for leveling. Soil should have optimum moisture at sowing. Avoid growing beans repeatedly on the same land.",
    varieties: [
      "Bountiful (Bush type) – 100–120 q/ha",
      "Master (Bush type) – 100 q/ha",
      "Arka Komal (Bush type) – 100–150 q/ha",
      "Contender (Bush type) – 100–150 q/ha",
      "Kentucky Wonder (Pole type) – 100–150 q/ha",
      "Painted Lady (Pole type)",
      "Asparagus Bean (Pole type)"
    ],
    seedSowing: {
      method: "2–3 seeds per hill, shallow sowing",
      seedRate:
        "Bush: 80–100 kg/ha, Pole: 25–30 kg/ha, Asparagus: 20–25 kg/ha",
      sowingTime:
        "Bush: Mid April–June, Pole: May (1st–3rd week), Asparagus: Mid May–June",
      spacing:
        "Bush: 30×10 cm, Pole: 100×50 cm, Asparagus: 100×50 cm"
    },
    fertilizers: {
      FYM: "20–25 t/ha",
      N: "30 kg/ha",
      P: "60 kg/ha",
      K: "60 kg/ha",
      application:
        "Entire FYM, P, K and half N at sowing; remaining N at true leaf stage"
    },
    irrigation:
      "Light irrigation as needed. Avoid excess water. Irrigation before flowering and pod setting is beneficial.",
    seedProduction:
      "Isolate varieties by 50 m (foundation) and 40 m (certified). Rogue off-types. Harvest pods at half-ripe stage."
  },

  {
    name: "Garden Pea",
    climateSoil:
      "Cool season crop requiring warm weather during ripening. Optimum germination temperature is 22°C. Thrives on well-drained loamy soils.",
    landPreparation:
      "Plough land 3–4 times followed by planking to ensure proper seed germination.",
    varieties: [
      "Bonneville – 175–200 q/ha",
      "Shalimar Mattar – 175–200 q/ha",
      "Arkel – 5 t/ha"
    ],
    seedSowing: {
      method:
        "2–3 seeds per hill, soaked overnight; Rhizobium inoculation recommended",
      seedRate: "80–90 kg/ha",
      sowingTime: "October–November",
      spacing: "30×10 cm"
    },
    fertilizers: {
      FYM: "20–25 t/ha",
      N: "40 kg/ha",
      P: "60 kg/ha",
      K: "60 kg/ha",
      note:
        "Apply sulphur (30 kg) and boron (2 kg) if deficiency exists"
    },
    irrigation:
      "1–2 irrigations if rainfall is absent. Timely staking increases yield.",
    seedProduction:
      "Rogue off-types. Harvest fully ripe pods. Dry seeds to 9% moisture before storage."
  },

  {
    name: "Kale",
    climateSoil:
      "Cool season leafy vegetable. Some varieties are frost tolerant while others are frost sensitive.",
    varieties: [
      "G.M. Dari – 200–250 q/ha",
      "Khanyari – 250–300 q/ha",
      "Kawdari – 250–300 q/ha",
      "Kashmiri Haak – 300–350 q/ha",
      "Anchar Haak – 200–250 q/ha"
    ],
    seedSowing: {
      nurseryRaising: "Seedlings raised in nursery beds like cabbage",
      transplantingTime:
        "30–40 days old or 10–15 cm tall seedlings",
      spacing: "30×10–15 cm"
    },
    fertilizers: {
      FYM: "25–30 t/ha",
      N: "90 kg/ha",
      P: "60 kg/ha",
      K: "60 kg/ha",
      application:
        "Half N at transplanting, remaining after 30 days"
    },
    irrigation:
      "Frequent light irrigation during hot season. Avoid deep hoeing.",
    seedProduction:
      "Replant true-to-type plants (stecklings). Maintain 1000 m isolation distance."
  },

  {
    name: "Spinach",
    climateSoil:
      "Cool season crop, frost tolerant. Mild temperature and short days favor yield. Grows best on well-drained loamy soils.",
    landPreparation:
      "Land is ploughed 2–3 times, pulverized and leveled by planking.",
    varieties: [
      "Shalimar Green – 150–200 q/ha",
      "Prickly Seeded – 100–200 q/ha"
    ],
    seedSowing: {
      method:
        "Sown in lines 15 cm apart or broadcast; seeds treated with thiram",
      seedRate:
        "Prickly: 10–12 kg/ha, Shalimar Green: 5–6 kg/ha",
      sowingTime: "October–March"
    },
    fertilizers: {
      FYM: "25–30 t/ha",
      N: "60 kg/ha",
      application:
        "Half N before sowing, remaining after thinning"
    },
    irrigation:
      "Maintain moist soil. Irrigate every 7–10 days during dry spells.",
    harvesting:
      "Harvest before flowering when leaves are fully developed."
  },

  {
    name: "Fenugreek",
    climateSoil:
      "Cool season crop tolerant to frost. Grows best on well-drained loamy soils rich in organic matter.",
    landPreparation:
      "Land ploughed 3–4 times followed by leveling. Beds of 3×2 m prepared.",
    varieties: [
      "Pusa Early Bunching – 60–80 q/ha",
      "Kasuri Methi"
    ],
    seedSowing: {
      spacing: "20–30 cm rows",
      seedRate: "20–25 kg/ha",
      sowingTime: "September–November"
    },
    fertilizers: {
      FYM: "10–15 t/ha",
      N: "60 kg/ha",
      application:
        "Half N at sowing, remaining after thinning"
    },
    irrigation:
      "Light irrigation required. Irrigation after each cutting if needed.",
    harvesting:
      "Harvest in 2–3 pickings when leaves are big enough."
  }
];

export default cropData;


