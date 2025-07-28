import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMountain, FaCalendarAlt, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import './Style/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navbarRef = useRef(null);
  const navigate = useNavigate();

  // Handle scroll effect for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu/dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        if (window.innerWidth < 992) setIsMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setOpenDropdown(null);
  };

  // Toggle dropdown
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  // Open PDF or Image from /public/assets/
  const openPdf = (pdfName) => {
    const pdfPaths = {
      'NTN': '/NTNFRHARMAIN.jpg',
      'IATA': '/IATA2025.pdf',
      'DTS': '/DTS2025.jpeg',
      'SECURITY': '/FRSECURITYEXCHANGE.jpg',
    };
    if (pdfPaths[pdfName]) {
      window.open(pdfPaths[pdfName], '_blank');
    }
    if (window.innerWidth < 992) {
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
    }
  };

  // Book Now button logic (navigate to new route or implement modal)
  const handleBookingClick = (e) => {
    e.preventDefault();
    // For navigation to /booking (make sure the route exists)
    navigate('/booking');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top ${isScrolled ? 'scrolled' : ''}`}
      id="customNavbar"
      ref={navbarRef}
    >
      <div className="container">
        {/* Brand/Logo */}
        <Link
          className="navbar-brand"
          to="/"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="logo-container">
            <div className="logo-icon">
              <FaMountain className="logo-icon-img" />
            </div>
            <div className="logo-text">
              <span className="logo-main">FR HARMAIN TRAVEL AND TOURS PVT(LTD)</span>
              <span className="logo-sub">Enrollment No:1218</span>
            </div>
          </div>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className={`navbar-toggler ${isMobileMenuOpen ? 'open' : ''}`}
          type="button"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className={`navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/aboutus"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown('packages');
                }}
              >
                Company profile <FaChevronDown className="ms-1" style={{ fontSize: '0.8rem' }} />
              </a>
              <div className={`dropdown-menu ${openDropdown === 'packages' ? 'show' : ''}`}>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openPdf('NTN');
                  }}
                >
                  National TAX NUMBER
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openPdf('SECURITY');
                  }}
                >
                  FR SECURITY EXCHANGE CERTIFICATE
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openPdf('IATA');
                  }}
                >
                  IATA CERTIFICATE
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openPdf('DTS');
                  }}
                >
                  DTS
                </a>
              </div>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contactus"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* CTA Button (Right) */}
          <div className="d-flex ms-lg-3">
            <a
              href="/booking"
              className="btn booking-btn"
              onClick={handleBookingClick}
            >
              <FaCalendarAlt className="me-2" />
              Book Now
              <FaArrowRight className="ms-2" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
