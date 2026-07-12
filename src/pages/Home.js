import "../Home.css";

function Home() {
  return (
    <div className="home-container">

      {/* ================= HERO ================= */}

      <section className="hero-section">

        <div className="hero-left">

          <div className="hero-badge">
            🌱 Kashmir Vegetable Advisory
          </div>

          <h1 className="hero-title">
            Smart Vegetable Advisory
            <br />
            <span>for Kashmir</span>
          </h1>

          

          <p className="hero-description">
            A digital platform providing crop advisory, disease
            management, weather updates, crop calendars,
            disease detection and government schemes specially
            designed for vegetable cultivation in Kashmir.
          </p>
                    <div className="hero-services">

            <div className="service-mini">
              <div className="service-icon">🌱</div>
              <span>Crop Advisory</span>
            </div>

            <div className="service-mini">
              <div className="service-icon">🌦</div>
              <span>Weather Updates</span>
            </div>

            <div className="service-mini">
              <div className="service-icon">🦠</div>
              <span>Disease Management</span>
            </div>

            <div className="service-mini">
              <div className="service-icon">📅</div>
              <span>Crop Calendar</span>
            </div>

            <div className="service-mini">
              <div className="service-icon">🏛</div>
              <span>Government Schemes</span>
            </div>

          </div>

          <div className="hero-buttons">

            <button
              className="hero-btn"
              onClick={() => (window.location.href = "/advisory")}
            >
              Explore Crop Advisory →
            </button>

            <button
              className="hero-btn-outline"
              onClick={() =>
                document
                  .querySelector(".intro-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </button>

          </div>

        </div>

        <div className="hero-right">

          <div className="hero-circle">

            <img
              src="/assets/vegetables/hero.jpeg"
              alt="Kashmir Vegetable Farming"
              className="hero-image"
            />

          </div>

        </div>

      </section>

      {/* ================= WHAT WE OFFER ================= */}

      <section className="offer-section">

        <h2>What We Offer</h2>

        <p>
          Everything you need for better vegetable farming
        </p>

        <div className="offer-grid">

                 <div className="offer-card">

            <div className="offer-icon green">
              🌱
            </div>

            <h3>Crop Advisory</h3>

            <p>
              Scientific cultivation recommendations for
              vegetable crops.
            </p>

          </div>

          <div className="offer-card">

            <div className="offer-icon blue">
              🌦
            </div>

            <h3>Weather Updates</h3>

            <p>
              Live weather forecasts and alerts for
              Kashmir districts.
            </p>

          </div>

          <div className="offer-card">

            <div className="offer-icon orange">
              📅
            </div>

            <h3>Crop Calendar</h3>

            <p>
              Month-wise sowing and harvesting schedule
              for vegetables.
            </p>

          </div>

          <div className="offer-card">

            <div className="offer-icon purple">
              🦠
            </div>

            <h3>Disease Detection</h3>

            <p>
              Upload crop images for AI-based disease
              prediction.
            </p>

          </div>
           <div className="offer-card">

  <div className="offer-icon yellow">
    💹
  </div>

  <h3>Market Prices</h3>

  <p>
    Check the latest vegetable market prices across Kashmir to make better selling decisions.
  </p>

</div>
          <div className="offer-card">

            <div className="offer-icon darkgreen">
              🏛
            </div>

            <h3>Government Schemes</h3>

            <p>
              Information about subsidies and
              government support programs.
            </p>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="intro-section">

        <div className="intro-image">

          <img
            src="/assets/vegetables/farmer.jpg"
            alt="Farmer"
          />

        </div>

        <div className="intro-content">

          <span className="about-tag">
            ABOUT THE PLATFORM
          </span>

          <h2>
            Empowering Vegetable 
            <br />
            Farmers Across Kashmir
          </h2>

          <p>

            Kashmir Vegetable Advisory is a modern agricultural
            support platform that connects scientific
            recommendations with practical farming. It provides
            crop advisory, weather forecasts, crop calendars,
            disease management, disease detection and
            government schemes specifically designed for
            vegetable cultivation in Kashmir.

          </p>

          <button
            className="about-btn"
            onClick={() => (window.location.href = "/about")}
          >
            Learn More →
          </button>

        </div>

      </section>

    </div>
  );
}

export default Home;