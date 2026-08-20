import React from "react";
import "../Home.css";

// Relative Image Imports
import farmerImage from "../assets/vegetables/farmers-smiling.jpg"; 
import heroFarmImage from "../assets/vegetables/hero.jpeg"; 
import aboutImage from "../assets/vegetables/farmer.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// Icons
import { GiPlantSeed, GiMedicines } from "react-icons/gi";
import { WiRain } from "react-icons/wi";
import { FaCalendarAlt, FaLandmark, FaUserFriends, FaTrophy, FaChartLine } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineSecurity } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

function Home() {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-unified-wrapper">
      {/* MAIN CONTAINER ALIGNED TO NAVBAR */}
      <div className="main-app-container">
        
        {/* TOP RIGHT TEAL CURVE LAYERS */}
        <div className="hero-top-right-wave-sage"></div>
        <div className="hero-top-right-wave-teal"></div>

        {/* 3D LEAF ACCENTS */}
        <div className="leaf-3d leaf-top-left"></div>
        <div className="leaf-3d leaf-bottom-left"></div>
        <div className="leaf-3d leaf-bottom-circle"></div>

        {/* ================= HERO SECTION ================= */}
        <section className="hero-section" id="home">
          <div className="hero-inner-content">
            <div className="hero-grid">
              
              {/* LEFT TEXT CONTENT */}
              <div className="hero-text-content">
                <div className="hero-tag-badge">🌱 Smart Farming, Better Future</div>
                
                <h1 className="main-headline">
                  Smart Vegetable <br />
                  <span className="highlight">Advisory</span>
                </h1>
                
                <p className="hero-description">
                  Get expert advice on vegetable farming, disease management, and crop growth tailored specifically for Kashmir.
                </p>
                
                <div className="hero-buttons">
                  <button className="cta-btn primary-btn" onClick={() => (window.location.href = "/advisory")}>
                    Get Advisory <IoIosArrowForward />
                  </button>
                  <button className="cta-btn secondary-btn" onClick={() => scrollToSection("#about")}>
                    Learn More <IoIosArrowForward />
                  </button>
                </div>

                {/* 3 QUICK FEATURES ROW */}
                <div className="quick-features-row">
                  <div className="quick-feature-item">
                    <div className="icon-wrap icon-green"><HiOutlineLightBulb /></div>
                    <div className="text-wrap">
                      <h4>Expert Advisors</h4>
                      <p>Guidance from farming experts</p>
                    </div>
                  </div>
                  <div className="quick-feature-item">
                    <div className="icon-wrap icon-blue"><GiPlantSeed /></div>
                    <div className="text-wrap">
                      <h4>Healthy Crops</h4>
                      <p>Tips for better yield & quality</p>
                    </div>
                  </div>
                  <div className="quick-feature-item">
                    <div className="icon-wrap icon-orange"><MdOutlineSecurity /></div>
                    <div className="text-wrap">
                      <h4>Disease Control</h4>
                      <p>Protect crops from pests</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT OVERLAPPING CIRCLES */}
              <div className="hero-image-display">
                <div className="image-masks-container">
                  <div className="mask-bigger-circle">
                    <img src={heroFarmImage} alt="Large farm overview" />
                  </div>
                  <div className="mask-smaller-circle">
                    <img src={farmerImage} alt="Smiling farmer" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= WHAT WE OFFER (SERVICES) ================= */}
        <section className="services-section" id="crop-advisory">
          <div className="services-wave-bg"></div>

          <div className="leaf-3d leaf-services-left"></div>
          <div className="leaf-3d leaf-services-right"></div>
          
          <div className="services-content-wrapper">
            <div className="services-header-clean">
              <div className="section-badge">OUR SERVICES 🌿</div>
              <h2>What We Offer</h2>
              <div className="title-divider"></div>
              <p>Tailored digital solutions for the Kashmiri farmer.</p>
            </div>

            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24} 
              slidesPerView={3}
              loop={true}
              speed={800}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="services-slider"
            >
              <SwiperSlide>
                <div className="service-card">
                  <div className="service-icon-badge"><GiPlantSeed /></div>
                  <h3>Crop Advisory</h3>
                  <p>Personalized scientific advice for your vegetable crops tailored to Kashmiri soil.</p>
                  <a href="/advisory" className="card-learn-more">Learn More <IoIosArrowForward/></a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="service-card">
                  <div className="service-icon-badge"><GiMedicines /></div>
                  <h3>Disease Management</h3>
                  <p>Identify and manage crop diseases effectively with preventive spraying advice.</p>
                  <a href="/disease-detection" className="card-learn-more">Learn More <IoIosArrowForward/></a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="service-card">
                  <div className="service-icon-badge"><FaChartLine /></div>
                  <h3>Growth Monitoring</h3>
                  <p>Track crop growth cycles and get timely suggestions for maximum yield.</p>
                  <a href="/advisory" className="card-learn-more">Learn More <IoIosArrowForward/></a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="service-card">
                  <div className="service-icon-badge"><WiRain /></div>
                  <h3>Weather Updates</h3>
                  <p>Real-time district weather alerts and spray advisories powered by Open-Meteo.</p>
                  <a href="/weather" className="card-learn-more">Learn More <IoIosArrowForward/></a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="service-card">
                  <div className="service-icon-badge"><FaCalendarAlt /></div>
                  <h3>Crop Calendar</h3>
                  <p>Month-by-month local sowing, irrigation, and harvesting schedules.</p>
                  <a href="/advisory" className="card-learn-more">Learn More <IoIosArrowForward/></a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="service-card">
                  <div className="service-icon-badge"><FaLandmark /></div>
                  <h3>Government Schemes</h3>
                  <p>Direct guidance on state subsidies, agricultural grants, and welfare benefits.</p>
                  <a href="/advisory" className="card-learn-more">Learn More <IoIosArrowForward/></a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* ================= ABOUT US ================= */}
        <section className="about-section" id="about">
          <div className="about-grid">
            <div className="about-image-mask">
              <img src={aboutImage} alt="Kashmiri farm with mountains" />
            </div>

            <div className="about-text-content">
              <div className="hero-tag-badge">ABOUT US</div>
              
              <h2>Empowering Vegetable <br /> Farmers Across Kashmir</h2>
              <p>Kashmir Vegetable Advisory is a modern agricultural support platform connecting scientific field research with practical farming. It provides crop advisory, weather forecasts, crop calendars, disease management, disease detection, and government schemes specifically designed for vegetable cultivation in Kashmir.</p>
              
              <div className="about-stats-grid">
                <div className="stat-card">
                  <div className="stat-icon-wrap icon-green"><FaUserFriends /></div>
                  <div className="stat-text-wrap">
                    <span className="count-number">500+</span>
                    <p>Happy Farmers</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon-wrap icon-blue"><GiPlantSeed /></div>
                  <div className="stat-text-wrap">
                    <span className="count-number">100+</span>
                    <p>Expert Advisors</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon-wrap icon-orange"><FaTrophy /></div>
                  <div className="stat-text-wrap">
                    <span className="count-number">98%</span>
                    <p>Success Rate</p>
                  </div>
                </div>
              </div>
              
              <button className="cta-btn primary-btn" onClick={() => (window.location.href = "/about")}>
                Learn More About Us <IoIosArrowForward/>
              </button>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="main-footer" id="contact">
          <div className="footer-content-grid">
            <div className="footer-brand-col">
              <div className="footer-logo">
                <span className="logo-text-footer">Baeol Sanz</span>
              </div>
              <p className="footer-tagline">Smart solutions for healthy crops and better future.</p>
              <div className="social-links-row">
                <a href="#f" className="social-icon">F</a>
                <a href="#t" className="social-icon">T</a>
                <a href="#i" className="social-icon">I</a>
                <a href="#w" className="social-icon">W</a>
              </div>
            </div>

            <div className="footer-links-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="/advisory">Crop Advisory</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4>Services</h4>
              <ul>
                <li><a href="/advisory">Crop Advisory</a></li>
                <li><a href="/disease-detection">Disease Management</a></li>
                <li><a href="/weather">Weather Updates</a></li>
              </ul>
            </div>

            <div className="footer-contact-col">
              <h4>Contact Info</h4>
              <ul>
                <li><span className="c-icon">📞</span> +91 91037 47292</li>
                <li><span className="c-icon">✉️</span> info@baeolsanz.com</li>
                <li><span className="c-icon">📍</span> IoT, Zakura Campus, University of Kashmir, 190006</li>
              </ul>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default Home;