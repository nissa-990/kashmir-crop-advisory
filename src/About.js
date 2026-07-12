import "./pages/About.css";
import aboutImage from "./assets/vegetables/tomat.jpg";

import {
  FaLeaf,
  FaBug,
  FaUsers,
  FaMapMarkedAlt,
} from "react-icons/fa";

function About() {
  return (
    <div className="about-page">

      <div className="about-container">

        {/* Left Image */}

        <div className="about-image">
          <img src={aboutImage} alt="Tomato Crop" />
        </div>

        {/* Right Content */}

        <div className="about-content">

          <span className="about-tag">
            🌿 Empowering Kashmir Agriculture
          </span>

          <h2>
            Kashmir Crop Advisory System
          </h2>

          <p>
            The Kashmir Crop Advisory System is an intelligent agricultural
            platform developed to support vegetable growers across Kashmir by
            providing reliable, region-specific, and easy-to-access farming
            information. The platform combines agricultural knowledge with
            modern digital technologies to help farmers make informed decisions,
            improve crop productivity, and adopt better cultivation practices.
          </p>

          <p>
            Our long-term vision is to continuously enhance the platform with
            Artificial Intelligence, geo-spatial technologies, multilingual
            support, and real-time agricultural insights, making it a complete
            digital companion for the farming community of Kashmir.
          </p>

          {/* Circular Vision Cards */}

          <div className="vision-grid">

            <div className="vision-item">

              <div className="vision-circle">
                <FaLeaf className="feature-icon" />
              </div>

              <h4>Smart Farming</h4>

              <p>
                Using technology to promote modern farming practices and
                improve agricultural productivity.
              </p>

            </div>

            <div className="vision-item">

              <div className="vision-circle">
                <FaBug className="feature-icon" />
              </div>

              <h4>AI Innovation</h4>

              <p>
                Expanding AI-powered crop disease detection and intelligent
                agricultural recommendations.
              </p>

            </div>

            <div className="vision-item">

              <div className="vision-circle">
                <FaUsers className="feature-icon" />
              </div>

              <h4>Farmer Support</h4>

              <p>
                Providing simple, reliable and multilingual agricultural
                information for farmers across Kashmir.
              </p>

            </div>

            <div className="vision-item">

              <div className="vision-circle">
                <FaMapMarkedAlt className="feature-icon" />
              </div>

              <h4>Regional Intelligence</h4>

              <p>
                Integrating geo-spatial mapping, district-wise crop advisory
                and local language support for region-specific guidance.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;