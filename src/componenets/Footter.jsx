import React from 'react'
import "./css/Foottor.css"
export default function Footter() {

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62674.53787415567!2d36.86027046952063!3d10.951388348765452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x165a9f8cd2f8b63b%3A0xfccea67d471c8a4a!2sInjibara%20University!5e0!3m2!1sen!2set!4v1766683830173!5m2!1sen!2set";
    const iframeStyle = {
      border: 0, // JSX style object uses camelCase for properties
      width: "300px",
      height: "100px",
    };
    const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          {/* <p>Contact us: </p>
          <p>Email:</p>
          <p>Phone:</p> */}

          <div style={{marginRight:"100px"}}> </div>
        </div>
        <div className="footer-links">
          <a href="/" className="about-us-link">
            About Us
          </a>
          {" | "}
          <a href="/" className="privacy-policy-link">
            Privacy Policy
          </a>{" "}
          {" | "}
          <a href="/" className="terms-of-service-link">
            Terms of Service
          </a>
        </div>

        <div className="social-media-icons">
          <a href="https://www.facebook.com/Injiuni" target="_blank">
            <i class="fa-brands fa-facebook"></i>
          </a>

          <a href="https://t.me/injiuniversity" target="_blank">
            <i class="fa-brands fa-telegram"></i>
          </a>

          <a href="http://www.youtube.com/@InjibaraUniversity" target="_blank">
            <i class="fa-brands fa-youtube"></i>
          </a>

          <a
            href="https://twitter.com/InjibaraU48824
"
            target="_blank"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
        <div className="google-map">
          <h4>INU Google Map</h4>
          <iframe
            src={mapSrc}
            width="300"
            height="100"
            style={iframeStyle} // Pass the style object
            allowFullScreen={true} // Use camelCase and boolean for attribute
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Embedded Google Map" // Good practice for accessibility
          ></iframe>
        </div>
      </footer>
      <div style={{backgroundColor:"dodgerblue",color:"white",fontSize:"20px",width:"102%"}}>&copy; {currentYear} Injibara University</div>
    </div>
  );
}
