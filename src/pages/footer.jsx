import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1 */}
        <div className="footer-column">
          <h3>Online Shopping</h3>
          <ul>
            <li> <Link to="/StudyEssentials">Study Essentials </Link></li>
            <li> <Link to="/CodingDeskSetup">Coding Desk Setup </Link></li>
            <li> <Link to="/LaptopMobileAccessories">Laptop & Mobile </Link></li>
            <li> <Link to="/StickersPosters">Office Supplies </Link></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>Customer Policy</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Shipping & Delivery</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>Our Promise</h3>
          <ul>
            <li>100% Original Products</li>
            <li>7 Day Replace & Return</li>
          </ul>
        </div>

      </div>

      <div className="footer-copyright">
        <p>© 2026 Your Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;