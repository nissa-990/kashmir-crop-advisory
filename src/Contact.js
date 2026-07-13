import "./Contact.css";
import {
  FaEnvelope,
  FaUniversity,
  FaMapMarkerAlt
} from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-container">

        <h1>Contact Us</h1>

        <h3>
          Any questions or remarks? Just write us a message!
        </h3>

        <form className="contact-form">

          <div className="input-row">

            <div className="input-box">
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter a valid email address"
              />
            </div>

            <div className="input-box">
              <label>Name</label>

              <input
                type="text"
                placeholder="Enter your Name"
              />
            </div>

          </div>

          <button type="submit">
            SUBMIT
          </button>

        </form>

        <div className="contact-info">

          <div className="info-box">

            <div className="circle">
              <FaEnvelope />
            </div>

            <h2>Email Us</h2>

            <p>
              creativecruisedyd@gmail.com
            </p>

          </div>

          <div className="info-box">

            <div className="circle">
              <FaUniversity />
            </div>

            <h2>Department</h2>

            <p>
              Design Your Degree
            </p>

          </div>

          <div className="info-box">

            <div className="circle">
              <FaMapMarkerAlt />
            </div>

            <h2>Visit Us</h2>

            <p>
              IOT Zakura<br />
              University of Kashmir
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;