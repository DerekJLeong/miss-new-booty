import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer.jsx";
import "./home.css";
import cavitation from "./images/cavitation.png";
import fatFreezing from "./images/fat_freezing.png";
import lipo from "./images/lipo.png";
import buttLift from "./images/butt_lift.png";

class Home extends React.Component {
   render() {
      return (
         <section className="home">
            <div className="home_contact">
               <div className="home_contact_wrapper">
                  <h1>Miss New Booty</h1>
                  <p>
                     Offering non-invasive aesthetic procedures to build a body
                     you will love.
                  </p>
                  <Link to="/contact">
                     <h3>CONTACT US TODAY</h3>
                  </Link>
               </div>
            </div>

            <div className="home_image parallax" />

            <div className="home_services">
               <div className="home_service_wrapper home_service1">
                  <img src={lipo} alt="Cavitation" />
                  <div className="home_service_text_wrapper hstw1">
                     <h2>LASER LIPOSUCTION</h2>
                  </div>
               </div>
               <div className="home_service_wrapper home_service2">
                  <img src={buttLift} alt="Cavitation" />
                  <div className="home_service_text_wrapper hstw2">
                     <h2>NON-INVASIVE BUTT LIFT</h2>
                  </div>
               </div>
               <div className="home_service_wrapper home_service3">
                  <img src={cavitation} alt="Cavitation" />
                  <div className="home_service_text_wrapper hstw3">
                     <h2>CAVITATION</h2>
                  </div>
               </div>
               <div className="home_service_wrapper home_service4">
                  <img src={fatFreezing} alt="Cavitation" />
                  <div className="home_service_text_wrapper hstw4">
                     <h2>FAT FREEZING</h2>
                  </div>
               </div>
               <Link to="/services">
                  <h3>MORE SERVICES</h3>
               </Link>
            </div>
            <Footer />
         </section>
      );
   }
}

export default Home;
