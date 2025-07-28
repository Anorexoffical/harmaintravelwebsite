import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/Homepage.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { FaHotel, FaPlane, FaUserShield, FaPrayingHands } from 'react-icons/fa';


import image1 from './assets/image1.png'
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.png';


import kaabaImage from './assets/mainimg.png';
import { FaPlay, FaCheckCircle, FaStar, FaKaaba } from 'react-icons/fa';
import pilgrimsImg from "./assets/secondimag.png"; // Update the path to your image
// First, import your local images at the top
const client1 = 'https://example.com/real-path-to-pashtun-client1.jpg';
const client2 = 'https://example.com/real-path-to-pashtun-client2.jpg';
const client3 = 'https://example.com/real-path-to-pashtun-client3.jpg';
const client4 = 'https://example.com/real-path-to-pashtun-client4.jpg';


// Fallback avatar images (in case local images don't load)
const fallbackImages = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/19.jpg',
  'https://randomuser.me/api/portraits/men/41.jpg'
];

const clients = [
  { img: client1 || fallbackImages[0], name: "Abdullah Khan" },
  { img: client2 || fallbackImages[1], name: "Fatima Ahmed" },
  { img: client3 || fallbackImages[2], name: "Omar Farooq" },
  { img: client4 || fallbackImages[3], name: "Aisha Rahman" }
];


// our service 




const HomePage = () => {
    //about us section
const [isVisible, setIsVisible] = useState(false);
  const [videoModal, setVideoModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.about-us-section');
      if (element) {
        const top = element.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: <FaStar className="text-success" />, text: 'Certified Hajj Operators' },
    { icon: <FaStar className="text-success" />, text: '24/7 Customer Support' },
    { icon: <FaStar className="text-success" />, text: 'Luxury Accommodations' },
    { icon: <FaStar className="text-success" />, text: 'Visa Processing' },
    { icon: <FaStar className="text-success" />, text: 'Guided Tours' },
    { icon: <FaStar className="text-success" />, text: 'Flight Arrangements' }
  ];
    // our services 
const [isVisible1, setIsVisible1] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.services-section');
      if (element) {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          setIsVisible1(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      img:image4 ,
      subtitle: "Umrah",
      title: "Complete Pilgrimage Packages",
      desc: "Experience a spiritually fulfilling journey with our all-inclusive  Umrah packages tailored to your needs.",
      link: "#",
      color: "#207a8a",
      layout: "vertical" // New property to control layout
    },
    {
      img: image5,
      subtitle: "Visa Processing",
      title: "Seamless Visa Assistance",
      desc: "Our experts handle all documentation and processing for a hassle-free visa experience.",
      link: "#",
      color: "#FFA726",
      layout: "horizontal"
    },
    {
      img: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      subtitle: "Guidance",
      title: "Spiritual & Practical Guidance",
      desc: "Comprehensive pre-departure briefings and on-ground support throughout your pilgrimage.",
      link: "#",
      color: "#FFA726",
      layout: "horizontal"
    }
  ];

//   our facilities
const facilities = [
    {
      icon: <FaHotel className="facility-icon" />,
      title: "Premium Accommodations",
      description: "Stay in 4-5 star hotels within walking distance of the Haram with all modern amenities for your comfort.",
      color: "#16a085"
    },
    {
      icon: <FaPlane className="facility-icon" />,
      title: "Direct Flights",
      description: "Enjoy direct charter flights with premium services and comfortable seating arrangements.",
      color: "#27ae60"
    },
    {
      icon: <FaUserShield className="facility-icon" />,
      title: "Dedicated Guides",
      description: "Experienced multilingual guides accompany you throughout your spiritual journey.",
      color: "#2ecc71"
    },
    {
      icon: <FaPrayingHands className="facility-icon" />,
      title: "Spiritual Guidance",
      description: "Learn from qualified scholars who provide daily Islamic lectures and Hajj/Umrah rituals guidance.",
      color: "#1abc9c"
    }
  ];




  return (
    <>
      <Navbar />
      {/* ----- HERO SECTION ----- */}
      <div className="homepage-main bg-body-custom">
        <div className="container-fluid px-lg-5">
          <div className="row min-vh-100 d-flex align-items-center">
            
            {/* Left Section */}
            <div className="col-lg-6 col-12 py-5 animate-fadein-left">
              <div className="mb-3">
                <span className="welcome-badge">FR HARMAIN TRAVEL AND TOURS</span>
              </div>
              <h1 className="display-3 mb-4 hero-title">
                Experience the <span className="highlight-green">Spiritual Journey</span>
                <br />
                of a Lifetime
              </h1>
              <p className="lead mb-4 hero-desc">
                We provide exceptional Hajj and Umrah services with 20+ years of experience. 
                Our certified guides and premium accommodations ensure your pilgrimage is 
                comfortable, meaningful, and spiritually fulfilling.
              </p>
              
               
            </div>
            
            {/* Right Section */}
            <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center py-5 animate-fadein-right">
              <div className="position-relative">
                <div className="kaba-outer">
                  <img
                    src={image1|| ""}
                    alt="Kaaba in Makkah"
                    className="kaba-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "";
                    }}
                  />
                </div>
                <div className="floating-badge">
                  <div className="d-flex align-items-center">
                    <div className="pulse-dot me-2"></div>
                    <span>Makkah, Saudi Arabia</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


{/* about us  */}
  <section className={`about-us-section py-6 py-lg-7 position-relative ${isVisible ? 'visible' : ''}`}>
        {/* Video Modal */}
        {videoModal && (
          <div className="video-modal-overlay" onClick={() => setVideoModal(false)}>
            <div className="video-modal-content" onClick={e => e.stopPropagation()}>
              <button className="close-modal" onClick={() => setVideoModal(false)}>
                &times;
              </button>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/xotsBiv9Q8U?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

        <div className="container position-relative z-1">
          <div className="row align-items-center g-5 g-lg-6">
            {/* Left side: Text Content */}
            <div className="col-lg-6 pe-lg-5">
              <div className="pe-lg-4">
                <span className="about-subtitle mb-3 d-inline-block animate__animated animate__fadeIn">
                  WELCOME TO
                </span>
                <h2 className="about-title mb-4 animate__animated animate__fadeInUp">
                  <span className="text-gradient-primary">FR HARMAIN TRAVEL AND TOURS</span>
                </h2>
                
                <p className="lead fw-semibold text-light mb-4 animate__animated animate__fadeIn animate__delay-1s">
                  We are proud to have a dedicated team for providing amicable, reliable and unbeatable services. 
                  We tailor and customize travel arrangements as per your spiritual needs.
                </p>
                
                <div className="mb-4 animate__animated animate__fadeIn animate__delay-1s">
                  <p className="about-desc">
                    We never compromise when it comes to the well-being of pilgrims and continue to fulfill our 
                    commitments as service providers to the guests of the two Holy Mosques. Our mission is to 
                    provide the highest level of professional service to our valued customers.
                  </p>
                  <p className="about-desc">
                    We specialize in designing custom Hajj Packages ranging from Economy to Luxury and Executive 
                    Hajj experiences that cater to your spiritual journey.
                  </p>
                </div>
                
                {/* Features List */}
                <div className="row g-3 mt-4 animate__animated animate__fadeIn animate__delay-2s">
                  {features.map((feature, index) => (
                    <div key={index} className="col-md-6">
                      <div className="d-flex align-items-center feature-item">
                        <span className="feature-icon me-3">{feature.icon}</span>
                        <span className="feature-text">{feature.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="d-flex flex-wrap gap-3 mt-5 animate__animated animate__fadeIn animate__delay-3s">
                  <button className="btn btn-primary btn-lg rounded-1 px-4 py-3">
                    Explore Packages <FaKaaba className="ms-2" />
                  </button>
             
                </div>

              </div>
            </div>
            
            {/* Right side: Image & Video */}
            <div className="col-lg-6">
              <div className="about-media-container position-relative animate__animated animate__fadeInRight">
                {/* Video Thumbnail */}
                <div className="video-thumbnail rounded-3 overflow-hidden shadow-lg" onClick={() => setVideoModal(true)}>
                  <img
                    className="img-fluid w-100"
                    src="https://img.youtube.com/vi/xotsBiv9Q8U/maxresdefault.jpg"
                    alt="Hajj Journey Video"
                  />
                  <div className="video-overlay"></div>
                  <button className="play-btn">
                    <FaPlay className="play-icon" />
                  </button>
                  <div className="video-badge">Watch Our Journey</div>
                </div>
                
             
            
              </div>
            </div>
          </div>
        </div>
      </section>




  {/* our services  */}

    <section className={`services-section py-5 py-lg-6 ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="text-center mb-4 mb-lg-5">
          <span className="services-btn mb-3 d-inline-block animate__animated animate__fadeIn">
            OUR SERVICES
          </span>
          <h2 className="display-5 fw-bold main-title animate__animated animate__fadeInUp">
            Explore Our Comprehensive <br className="d-none d-lg-block" />
            Offerings For <span className="highlight-green position-relative">Travels </span>
          </h2>
          <p className="section-desc mx-auto mt-3 mb-4 mb-lg-5 animate__animated animate__fadeIn animate__delay-1s">
            We provide end-to-end solutions for your spiritual journey, ensuring every aspect of your pilgrimage is handled with care and expertise.
          </p>
        </div>
        
        <div className="row g-4 g-lg-5">
          {/* Hajj Umrah Pilgrims (top image layout) */}
          <div className="col-lg-6 animate__animated animate__fadeInLeft">
            <div className="card shadow-sm service-card border-0 overflow-hidden h-100">
              <div className="position-relative" style={{height: "220px"}}>
                <img
                  src={services[0].img}
                  className="img-fluid w-100 h-100 service-img"
                  alt={services[0].title}
                  style={{objectFit: "cover", objectPosition: "center"}}
                />
                <div className="img-overlay"></div>
              </div>
              <div className="card-body p-4 p-xl-5 position-relative">
                <div className="service-icon position-absolute">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill={services[0].color} viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                  </svg>
                </div>
                <span className="service-subtitle small fw-semibold text-uppercase mb-2" style={{ color: services[0].color }}>
                  {services[0].subtitle}
                </span>
                <h3 className="card-title fw-bold mb-3">{services[0].title}</h3>
                <p className="card-text mb-4 text-muted">{services[0].desc}</p>
                <a href={services[0].link} className="btn btn-primary custom-btn align-self-start mt-auto">
                  Read More <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right: Visa Processing & Guidance (side-by-side layout) */}
          <div className="col-lg-6 d-flex flex-column gap-4 gap-lg-5 animate__animated animate__fadeInRight">
            {services.slice(1).map((service, index) => (
              <div key={index} className="card flex-row h-100 shadow-sm service-card border-0 overflow-hidden">
                <div className="position-relative" style={{width: "40%", minWidth: "160px"}}>
                  <img
                    src={service.img}
                    className="img-fluid h-100 service-img"
                    alt={service.title}
                    style={{objectFit: "cover", objectPosition: "center"}}
                  />
                  <div className="img-overlay"></div>
                </div>
                <div className="card-body p-4 p-xl-4 position-relative">
                  <div className="service-icon position-absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={service.color} viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg>
                  </div>
                  <span className="service-subtitle small fw-semibold text-uppercase mb-2" style={{ color: service.color }}>
                    {service.subtitle}
                  </span>
                  <h3 className="card-title fw-bold mb-3">{service.title}</h3>
                  <p className="card-text mb-3 text-muted">{service.desc}</p>
                  <a href={service.link} className="btn btn-primary custom-btn align-self-start mt-auto">
                    Read More <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
    
      </div>
    </section>


{/* {/* our facilities \ */}

<section className="facilities-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Facilities</span>
          <h2 className="section-title">
            Barokah, <span className="highlight">Beyond the Journey</span>
          </h2>
          <p className="section-subtitle">
            Embark on a sacred journey guided by the Qur'an and Sunnah
          </p>
        </div>

        <div className="facilities-grid">
          {/* Left Features */}
          <div className="facilities-column left-column">
            {facilities.slice(0, 2).map((facility, index) => (
              <div 
                key={index}
                className="facility-card"
                style={{ '--accent-color': facility.color }}
              >
                <div className="card-icon" style={{ color: facility.color }}>
                  {facility.icon}
                </div>
                <h3 className="card-title">{facility.title}</h3>
                <p className="card-description">{facility.description}</p>
                <div className="card-border"></div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="center-image">
            <div className="image-container">
              <img 
                src={image6}
                alt="Pilgrims at Masjid al-Haram" 
                className="main-image"
              />
              <div className="image-overlay"></div>
              <div className="decoration-shape shape-1"></div>
              <div className="decoration-shape shape-2"></div>
            </div>
          </div>

          {/* Right Features */}
          <div className="facilities-column right-column">
            {facilities.slice(2, 4).map((facility, index) => (
              <div 
                key={index}
                className="facility-card"
                style={{ '--accent-color': facility.color }}
              >
                <div className="card-icon" style={{ color: facility.color }}>
                  {facility.icon}
                </div>
                <h3 className="card-title">{facility.title}</h3>
                <p className="card-description">{facility.description}</p>
                <div className="card-border"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>


    
      <Footer />
    </>
  );
};

export default HomePage;
