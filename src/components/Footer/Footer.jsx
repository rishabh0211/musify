import React from 'react';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="left-section">
      <h1 className="footer-heading">Musify</h1>
      <div className="social-links">
        <h3>Follow us on</h3>
        <ul>
          <li>
            <img src="./images/insta.png" alt="social-link" />
          </li>
          <li>
            <img src="./images/linkedin.png" alt="social-link" />
          </li>
          <li>
            <img src="./images/fb.png" alt="social-link" />
          </li>
        </ul>
      </div>
    </div>
    <div className="links-container">
      <div className="important-links">
        <h3 className="list-heading">Important Links</h3>
        <ul>
          <li className="links">About</li>
          <li className="links">FAQs</li>
          <li className="links">Contact Us</li>
        </ul>
      </div>
      <div className="more-links">
        <h3 className="list-heading">More Links</h3>
        <ul>
          <li className="links">Terms and Conditions</li>
          <li className="links">Privacy Policy</li>
          <li className="links">Fulfillment Policy</li>
        </ul>
      </div>
    </div>
    <div className="social-links">
      <h3>Follow us on</h3>
      <ul>
        <li>
          <img src="./images/insta.png" alt="social-link" />
        </li>
        <li>
          <img src="./images/linkedin.png" alt="social-link" />
        </li>
        <li>
          <img src="./images/fb.png" alt="social-link" />
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer
