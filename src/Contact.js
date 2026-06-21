import { FaEnvelope, FaMapMarkerAlt, FaUniversity } from "react-icons/fa";
import "./contact.css";

function Contact() {
  return (
    <div className="container">
      <h1>Contact </h1>
      <p>For any queries, feel free to reach out to us:</p>

      <div className="contact-item">
        <FaEnvelope className="contact-icon" />
        <span>creativecruisedyd@gmail.com</span>
      </div>

      <div className="contact-item">
        <FaMapMarkerAlt className="contact-icon" />
        <span>
          IOT, Zakura, Srinagar <br />
          University of Kashmir
        </span>
      </div>

      <div className="contact-item">
        <FaUniversity className="contact-icon" />
        <span>Design Your Degree (DYD)</span>
      </div>
    </div>
  );
}

export default Contact;
