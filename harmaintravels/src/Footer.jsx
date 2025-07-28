import React, { useState, useEffect } from 'react';
import './Style/Footer.css';

const Footer = () => {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const handleScroll = () => {
      lastScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (lastScrollY > 300) {
            setIsBackToTopVisible(true);
          } else {
            setIsBackToTopVisible(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="footer-column">
            <h3>FR Harmain Travel and Tours</h3>
            <p>
              We provide complete Umrah and tour packages with exceptional service. 
              Our mission is to make your spiritual journey comfortable and memorable.
            </p>
            
          </div>

          <div className="footer-column">
            <h3>Navigation</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Umrah Packages</a></li>
              <li><a href="#">Tour Packages</a></li>
              <li><a href="#">Contact us </a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>


          <div className="footer-column">
            <h3>Contact</h3>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  Office No. 22, Haroon Mansion<br />
                  Khaber Bazar, Peshawar<br />
                  Pakistan
                </span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone-alt"></i>
                <span>
                  Phone: 091-2566690<br />
                  Ext: 91, 92, 93<br />
                  Mon-Sat, 9am-6pm
                </span>
              </div>
              <div className="contact-item">
                <i className="fab fa-whatsapp"></i>
                <span>
                  WhatsApp: 0300-585-0300<br />
                  WhatsApp: 0345-585-0345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>
            &copy; {currentYear} FR Harmain Travel and Tours. All rights reserved.
          </p>
        </div>
      </footer>

      <div
        className={`back-to-top ${isBackToTopVisible ? 'visible' : ''}`}
        id="backToTop"
        aria-label="Back to top"
        onClick={handleBackToTop}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleBackToTop();
          }
        }}
      >
        <i className="fas fa-arrow-up"></i>
      </div>
    </>
  );
};

export default Footer;