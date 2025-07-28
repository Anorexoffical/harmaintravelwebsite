import React, { useEffect, useRef } from "react";
import { FiPhone, FiSend, FiMapPin } from "react-icons/fi";
import { Fade } from "react-awesome-reveal";
import Navbar from "./Navbar";
import contactus from "./assets/mainimg.png";
import gsap from "gsap";
import "./Style/Contactus.css";
import Footer from "./Footer";

function Contact() {
    const panelsRef = useRef([]);

    useEffect(() => {
        panelsRef?.current?.forEach((panel) => {
            gsap.fromTo(
                panel,
                { scale: 1, opacity: 0.7 },
                { scale: 0.9, opacity: 1, scrollTrigger: {
                        trigger: panel,
                        scrub: true,
                        start: "top bottom",
                        end: "top top",
                    },
                }
            );
        });
    }, []);

    return (
        <>
            <Navbar />
            <section className="py-5 text-center">
                <Fade direction="down" duration={1000}>
                    <h1 className="display-4 font-weight-bold headingofcont">
                        CONTACT US
                    </h1>
                </Fade>

                <Fade direction="top" duration={1000}>
                    <form action="https://formspree.io/f/xovjlwkk" method="POST">
                        <div className="container d-flex justify-content-center flex-wrap callmaincontainer">
                            <div className="shadow-lg rounded bg-white p-4 d-flex flex-column flex-lg-row w-100">
                                {/* Image Container */}
                                <div className="image-container">
                                    <img
                                        src={contactus}
                                        alt="Contact Us"
                                        className="img-fluid rounded"
                                        loading="lazy"
                                    />
                                    {/* Contact Info Overlay */}
                                    <div className="contact-overlay">
                                        <div className="d-flex align-items-center mb-3">
                                            <FiPhone className="icon" />
                                            <h5 className="text-white ml-3 mb-0 smalltext">091-256669091</h5>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <FiPhone className="icon" />
                                            <h5 className="text-white ml-3 mb-0 smalltext">0300-585-0300</h5>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <FiMapPin className="icon" />
                                            <h5 className="text-white ml-3 mb-0 smalltext">
                                                Office No. 22, Haroon Mansion
                                            </h5>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <h5 className="text-white smalltext ml-3 mb-0">
                                                Khaber Bazar, Peshawar<br />Pakistan
                                            </h5>
                                        </div>
                                    </div>
                                </div>

                                {/* Form Section */}
                                <div className="w-100 w-lg-50 p-4">
                                    <input type="text" className="form-control mb-3 input-hover" placeholder="Name" name="name" required/>
                                    <input type="email" className="form-control mb-3 input-hover" placeholder="Email" name="email" required/>
                                    <input type="text" className="form-control mb-3 input-hover" placeholder="Phone" name="phone" required/>
                                    <select className="form-control mb-3 input-hover" name="service" defaultValue="" required>
                                        <option value="" disabled>Select the service you need</option>
                                        <option value="ticket">Ticket</option>
                                        <option value="umrah">Umrah</option>
                                        <option value="tour">Tour</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <textarea className="form-control mb-3 input-hover" placeholder="Message" rows="8" name="message"></textarea>
                                    <button className="btn btn-dark w-100" type="submit">
                                        Send <FiSend className="ml-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </Fade>
            </section>

            {/* Google Map section styled like the form */}
            <div className="text-center">
                <Fade direction="top" damping={500000} duration={2000}>
                    <h1 className="display-4 font-weight-bold headingofcont">Find Us on Google Map</h1>
                </Fade>
            </div>
            <div className="container d-flex justify-content-center flex-wrap callmaincontainer my-4">
                <div className="shadow-lg rounded bg-white p-4 w-100" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div className="google-map-responsive mb-2" style={{ width: "100%", borderRadius: "12px", overflow: "hidden" }}>
                        <iframe
                            title="Office Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.8966818520994!2d71.5703063754208!3d34.010146045229205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d915fc61f0bfef%3A0xe02ffc9be9d4baff!2sHaroon%20Mansion%2C%20Khaber%20Bazar%2C%20Peshawar!5e0!3m2!1sen!2s!4v1717427668854!5m2!1sen!2s"
                            width="100%"
                            height="380"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            style={{ border: 0, borderRadius: 12, minHeight: 280 }}
                        ></iframe>
                    </div>
                    <div className="d-flex align-items-center mt-2">
                        <FiMapPin className="icon" />
                        <h5 className="text-dark ml-3 mb-0 smalltext">
                            Office No. 22, Haroon Mansion, Khaber Bazar, Peshawar, Pakistan
                        </h5>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Contact;
