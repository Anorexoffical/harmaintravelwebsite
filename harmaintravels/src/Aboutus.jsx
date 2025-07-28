import React from 'react';
import Navbar from './Navbar';
import './Style/Aboutus.css';
import storyImage from "./assets/image4.png";     // Replace with real images if needed
import serviceImage from "./assets/image7.jpg";
import ceoImage from "./assets/image4.png";
import visionImage from "./assets/image4.png";
import missionImage from "./assets/image4.png";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="backgroudimag">
        <Navbar />
        <div className="text-container">
          <h1 className="centered-text">About Us</h1>
        </div>
      </div>

      <div className="content-container px-4 py-4">
        {/* Section Heading */}
        <div className="text-center mb-4">
          <h2 className="text-danger text-uppercase">Our Story</h2>
          <h1 className="main-title">
            Trusted Pilgrimage Facilitators Since <span className="maintex">1998</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="row g-4">
          {/* Image Section */}
          <div className="col-lg-6">
            <img
              src={storyImage}
              alt="FR Haramain Travel Story"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Info Section */}
          <div className="col-lg-6">
            <p className="text-dark mb-4 text-justify">
              Established in 1998, <b>FR HARMAIN TRAVEL AND TOURS PVT (LTD)</b> has emerged as one of the most respected and reliable agencies specializing in Hajj, Umrah, and international tours. With government <b>Enrollment No: 1218</b>, our journey began with a vision to provide seamless, worry-free, and spiritual travel experiences for every pilgrim.
              <br/><br/>
              With a legacy spanning over two decades, we take pride in facilitating thousands of pilgrims to the holy cities of Makkah and Madinah. Our commitment to professionalism, ethical transparency, and customer-focused services sets us apart in the industry. Whether it’s Hajj, Umrah, Ziyarat tours, or affordable ticketing, we ensure comfort, guidance, and personalized solutions throughout your sacred journey.
            </p>

            {/* Stats Section */}
            <div className="row row-cols-2 mb-4">
              {[
                { count: '20,000+', label: 'Pilgrims Served' },
                { count: '26+', label: 'Years of Trusted Service' },
                { count: '15+', label: 'Expert Service Team' },
                { count: '10+', label: 'Pilgrimage Destinations' },
              ].map((stat, index) => (
                <div key={index} className="col text-center">
                  <h3 className="fw-bold text-black">{stat.count}</h3>
                  <p className="text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CEO Message */}
      <div className="row g-4 py-5 align-items-center">
        {/* Text Section */}
        <div className="col-lg-6 col-md-6 col-sm-12 order-lg-1 order-2">
          <h1 className="ceoheading">
            <span className='mainwordabout2'>CEO Message:</span> Rehmat Ullah
          </h1>
          <p className="ceoparagraph">
            <i>
              "As one of the largest and most dependable travel service providers in Pakistan, our greatest strength is our satisfied customers — pilgrims who trust us year after year for Hajj and Umrah. We offer comprehensive packages, world-class support, and a commitment to your well-being throughout every step of your sacred journey. Our dedicated team continues to uphold the highest standards in customer care and service excellence."
            </i>
          </p>
        </div>
        {/* Image Section */}
        <div className="col-lg-6 col-md-6 col-sm-12 order-lg-2 order-1">
          <img
            src={visionImage}
            alt="Our Vision"
            className="img-fluid rounded shadow"
            width={800}
          />
        </div>
      </div>

      {/* Director Message / Mission section */}
      <div className="row g-4 py-5 align-items-center">
        {/* Image Section */}
        <div className="col-lg-6 col-sm-12 col-md-6">
          <img
            src={missionImage}
            alt="Director Message"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Text Section */}
        <div className="col-lg-6 col-sm-12 col-md-6">
          <h1 className="ceoheading">
            <span className='mainwordabout2'>Director Message:</span> FAISAL AHMAD
          </h1>
        <p>
            <i>
              "To make Hajj and Umrah accessible and comfortable, we offer a holistic travel solution, including visa stamping services and step-by-step guidance. With our expert team and years of experience, we ensure a hassle-free process for every client — from group departures to customized tours. Your satisfaction and spiritual fulfillment remain our utmost priority."
            </i>
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
