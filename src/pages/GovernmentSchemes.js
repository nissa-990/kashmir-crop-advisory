import React, { useState } from "react";
import "./GovernmentSchemes.css";

const schemes = [
  {
    icon: "🌾",
    title: "Holistic Agriculture Development Programme (HADP)",
    category: "J&K Scheme",
    department: "Agriculture Production Department, Jammu & Kashmir",
    eligibility:
      "Farmers, FPOs, rural youth and agri-entrepreneurs in Jammu and Kashmir, subject to the selected project guidelines.",
    benefits:
      "Support for agriculture, horticulture, livestock, protected cultivation, machinery, processing, training and agri-enterprises.",
    application:
      "Register and explore the available projects through the official HADP portal.",
    learnMoreLink: "https://hadp.jk.gov.in/",
    applyLink: "https://hadp.jk.gov.in/",
    keywords:
      "hadp jammu kashmir farming youth subsidy agriculture horticulture"
  },

  {
    icon: "🍎",
    title: "High-Density Orchard Development under HADP",
    category: "J&K Horticulture",
    department: "Agriculture Production and Horticulture Departments, J&K",
    eligibility:
      "Eligible orchard growers meeting the conditions of the relevant HADP horticulture activity.",
    benefits:
      "Support related to modern orchards, quality planting material, orchard rejuvenation and high-density plantations.",
    application:
      "Check the relevant horticulture project and activities through the HADP project dashboard.",
    learnMoreLink: "https://hadp.jk.gov.in/AgriDash/AgriDashPage",
    applyLink: "https://hadp.jk.gov.in/",
    keywords:
      "apple orchard high density plantation horticulture kashmir fruit"
  },

  {
    icon: "🥬",
    title: "Protected Cultivation and Exotic Vegetables",
    category: "J&K Scheme",
    department: "Agriculture Production Department, J&K",
    eligibility:
      "Eligible farmers and entrepreneurs interested in open-field or protected vegetable cultivation.",
    benefits:
      "Support for protected structures, vegetable production, modern cultivation and market-oriented farming.",
    application:
      "Open the HADP portal and select the vegetable and protected-cultivation project.",
    learnMoreLink: "https://hadp.jk.gov.in/AgriDash/AgriDashPage",
    applyLink: "https://hadp.jk.gov.in/",
    keywords:
      "vegetable greenhouse polyhouse protected cultivation exotic vegetables"
  },

  {
    icon: "🐝",
    title: "Promotion of Apiculture under HADP",
    category: "J&K Scheme",
    department: "Agriculture Production Department, J&K",
    eligibility:
      "Farmers, rural youth, self-help groups and entrepreneurs interested in beekeeping.",
    benefits:
      "Support for scientific beekeeping, honey production, skill development and related infrastructure.",
    application:
      "Explore the Apiculture project and eligible activities through the HADP portal.",
    learnMoreLink: "https://hadp.jk.gov.in/AgriDash/AgriDashPage",
    applyLink: "https://hadp.jk.gov.in/",
    keywords:
      "bee honey beekeeping apiculture kashmir hadp"
  },

  {
    icon: "🌿",
    title: "Medicinal and Aromatic Plants under HADP",
    category: "J&K Scheme",
    department: "Agriculture Production Department, J&K",
    eligibility:
      "Eligible farmers, producer groups and entrepreneurs interested in medicinal or aromatic crops.",
    benefits:
      "Support for commercial cultivation, planting material, value-chain development and market opportunities.",
    application:
      "Select the medicinal and aromatic plants project through the HADP portal.",
    learnMoreLink: "https://hadp.jk.gov.in/AgriDash/AgriDashPage",
    applyLink: "https://hadp.jk.gov.in/",
    keywords:
      "medicinal aromatic herbs plants lavender hadp kashmir"
  },

  {
    icon: "🚜",
    title: "Farm Mechanisation and Machinery Support",
    category: "Central Support",
    department: "Department of Agriculture and Farmers Welfare",
    eligibility:
      "Eligibility depends on the machinery, applicant category and current state or UT guidelines.",
    benefits:
      "Support related to farm machinery, equipment, custom-hiring services and mechanisation.",
    application:
      "Check available services and state-level procedures on the official farm-mechanisation portal.",
    learnMoreLink: "https://agrimachinery.nic.in/",
    applyLink: "https://agrimachinery.nic.in/",
    keywords:
      "tractor machine equipment power tiller subsidy mechanisation"
  },

  {
    icon: "💰",
    title: "PM-KISAN Samman Nidhi",
    category: "Central Scheme",
    department: "Ministry of Agriculture and Farmers Welfare",
    eligibility:
      "Eligible landholding farmer families, subject to official exclusions and verification.",
    benefits:
      "Income support of ₹6,000 per year in three equal instalments.",
    application:
      "Use the official portal for registration, e-KYC, beneficiary status and related services.",
    learnMoreLink: "https://pmkisan.gov.in/",
    applyLink: "https://pmkisan.gov.in/RegistrationFormupdated.aspx",
    keywords:
      "pm kisan money income support farmer ekyc payment"
  },

  {
    icon: "🛡️",
    title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    category: "Central Scheme",
    department: "Ministry of Agriculture and Farmers Welfare",
    eligibility:
      "Farmers cultivating crops notified for the relevant season and area.",
    benefits:
      "Insurance protection against eligible crop losses caused by natural calamities, pests and diseases.",
    application:
      "Check enrolment, notified crops and insurance services on the official PMFBY portal.",
    learnMoreLink: "https://pmfby.gov.in/",
    applyLink: "https://pmfby.gov.in/",
    keywords:
      "insurance crop loss rain flood drought pest disease pmfby"
  },

  {
    icon: "🥕",
    title: "Mission for Integrated Development of Horticulture (MIDH)",
    category: "Central Scheme",
    department: "Department of Agriculture and Farmers Welfare",
    eligibility:
      "Horticulture growers and eligible beneficiaries under approved components.",
    benefits:
      "Support for nurseries, protected cultivation, horticulture development and post-harvest infrastructure.",
    application:
      "Review the official guidelines and contact the local Horticulture Department for the relevant component.",
    learnMoreLink: "https://midh.gov.in/",
    applyLink: "https://midh.gov.in/",
    keywords:
      "midh horticulture fruit vegetable nursery greenhouse post harvest"
  },

  {
    icon: "💧",
    title: "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)",
    category: "Central Scheme",
    department: "Government of India",
    eligibility:
      "Farmers and eligible projects covered under the applicable irrigation component.",
    benefits:
      "Support for irrigation access, water-use efficiency and the Per Drop More Crop approach.",
    application:
      "Contact the local Agriculture or Horticulture Department for components available in the district.",
    learnMoreLink: "https://pmksy.gov.in/",
    applyLink: "https://pmksy.gov.in/",
    keywords:
      "irrigation water drip sprinkler pmksy per drop more crop"
  },

  {
    icon: "💳",
    title: "Kisan Credit Card (KCC)",
    category: "Credit Support",
    department: "Government of India and Participating Banks",
    eligibility:
      "Farmers and eligible agriculture or allied-sector applicants, subject to bank assessment.",
    benefits:
      "Timely access to agricultural credit for inputs, crop production and eligible allied activities.",
    application:
      "Apply through a participating bank and review scheme information on the official portal.",
    learnMoreLink: "https://fasalrin.gov.in/",
    applyLink: "https://www.myscheme.gov.in/schemes/kcc",
    keywords:
      "kcc credit bank loan farmer seeds fertilizer finance"
  },

  {
    icon: "🧪",
    title: "Soil Health Card",
    category: "Farmer Service",
    department: "Ministry of Agriculture and Farmers Welfare",
    eligibility:
      "Farmers seeking soil testing and nutrient recommendations.",
    benefits:
      "Information about soil nutrients, pH and fertiliser recommendations for better crop management.",
    application:
      "Use the official Soil Health Card portal or contact the nearest soil-testing facility.",
    learnMoreLink: "https://soilhealth.dac.gov.in/",
    applyLink: "https://soilhealth.dac.gov.in/",
    keywords:
      "soil test nutrients fertilizer health card ph"
  },

  {
    icon: "🏗️",
    title: "Agriculture Infrastructure Fund (AIF)",
    category: "Infrastructure Finance",
    department: "Department of Agriculture and Farmers Welfare",
    eligibility:
      "Eligible farmers, FPOs, cooperatives, agri-entrepreneurs and infrastructure projects.",
    benefits:
      "Financing support for post-harvest infrastructure and viable community farming assets.",
    application:
      "Register and submit the proposal through the official AIF portal.",
    learnMoreLink: "https://agriinfra.dac.gov.in/",
    applyLink: "https://agriinfra.dac.gov.in/Home/Registration",
    keywords:
      "aif warehouse cold storage infrastructure loan processing fpo"
  },

  {
    icon: "🏪",
    title: "National Agriculture Market (e-NAM)",
    category: "Market Access",
    department: "Department of Agriculture and Farmers Welfare",
    eligibility:
      "Farmers, FPOs, traders and other eligible agriculture-market stakeholders.",
    benefits:
      "Digital access to mandi information, prices, trading services and agricultural markets.",
    application:
      "Use the official e-NAM portal to review farmer and stakeholder services.",
    learnMoreLink: "https://enam.gov.in/",
    applyLink: "https://enam.gov.in/web/Enam_ctrl/enam_registration",
    keywords:
      "enam mandi market price trading farmer fpo online"
  },

  {
    icon: "🐝",
    title: "National Beekeeping and Honey Mission",
    category: "Central Scheme",
    department: "Ministry of Agriculture and Farmers Welfare",
    eligibility:
      "Eligible beekeepers, farmers, groups and organisations under current programme guidelines.",
    benefits:
      "Promotion of scientific beekeeping, quality honey production, employment and income generation.",
    application:
      "Check the National Bee Board or Agriculture Department for active components and applications.",
    learnMoreLink: "https://nbb.gov.in/",
    applyLink: "https://nbb.gov.in/",
    keywords:
      "honey bee beekeeping national bee board mission"
  }
];
function GovernmentSchemes() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSchemes = schemes.filter((scheme) => {
    const searchableText = `
      ${scheme.title}
      ${scheme.category}
      ${scheme.department}
      ${scheme.eligibility}
      ${scheme.benefits}
      ${scheme.application}
      ${scheme.keywords}
    `.toLowerCase();

    return searchableText.includes(searchTerm.trim().toLowerCase());
  });

  return (
    <div className="scheme-page">
      <section className="scheme-heading">
        <h1>Government Schemes for Farmers</h1>

        <p>
          Explore agriculture and horticulture programmes relevant to farmers
          in Jammu and Kashmir.
        </p>
      </section>

      <div className="scheme-search-box">
        <span className="scheme-search-icon">🔍</span>

        <input
          type="text"
          placeholder="Search apple, insurance, machinery, PM-KISAN..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        {searchTerm && (
          <button
            type="button"
            className="clear-search-btn"
            onClick={() => setSearchTerm("")}
          >
            Clear
          </button>
        )}
      </div>

      <p className="scheme-count">
        {filteredSchemes.length}{" "}
        {filteredSchemes.length === 1 ? "scheme" : "schemes"} found
      </p>

      <p className="scheme-updated">
        Information checked: July 2026
      </p>

      {filteredSchemes.length > 0 ? (
        <div className="scheme-grid">
          {filteredSchemes.map((scheme) => (
            <article className="scheme-card" key={scheme.title}>
              <div className="scheme-card-header">
                <span className="scheme-icon">{scheme.icon}</span>

                <span className="scheme-category">
                  {scheme.category}
                </span>
              </div>

              <h2>{scheme.title}</h2>

              <div className="scheme-detail">
                <h3>Department</h3>
                <p>{scheme.department}</p>
              </div>

              <div className="scheme-detail">
                <h3>Who can benefit?</h3>
                <p>{scheme.eligibility}</p>
              </div>

              <div className="scheme-detail">
                <h3>Main benefits</h3>
                <p>{scheme.benefits}</p>
              </div>

              <div className="scheme-detail">
                <h3>How to proceed</h3>
                <p>{scheme.application}</p>
              </div>

              <div className="scheme-actions">
                <a
                  href={scheme.learnMoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scheme-link-btn learn-btn"
                >
                  Learn More
                </a>

                <a
                  href={scheme.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scheme-link-btn apply-now-btn"
                >
                  Apply / Open Portal
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="no-schemes">
          <h2>No matching schemes found</h2>

          <p>
            Try searching for apple, insurance, machinery, horticulture or
            PM-KISAN.
          </p>

          <button
            type="button"
            onClick={() => setSearchTerm("")}
          >
            Show All Schemes
          </button>
        </div>
      )}

      <div className="scheme-notice">
        <strong>Important:</strong> Eligibility, benefits, subsidies and
        application periods may change. Please verify the latest details on
        the official portal or through the nearest Agriculture or
        Horticulture Office.
      </div>
    </div>
  );
}

export default GovernmentSchemes;