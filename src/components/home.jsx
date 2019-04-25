import React, { Component } from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";

// import vacuumTherapy from "./images/vacuum_therapy.png";
import cavitation from "./images/cavitation.png";
import fatFreezing from "./images/fat_freezing.png";
import lipo from "./images/lipo.png";

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
                  <NavLink exact to="/contact">
                     <h3>CONTACT US TODAY</h3>
                  </NavLink>
               </div>
            </div>

            <div className="home_image parallax">
               {/* <img src={vacuumTherapy} alt="Vacuum Therapy" /> */}
            </div>

            <div className="home_services">
               <div className="home_service_wrapper home_service1">
                  <img src={lipo} alt="Cavitation" />
                  <div className="home_service_text_wrapper">
                     <h2>LASER LIPOSUCTION</h2>
                  </div>
               </div>
               <div className="home_service_wrapper home_service2">
                  <img src={lipo} alt="Cavitation" />
                  <div className="home_service_text_wrapper">
                     <h2>NON-INVASIVE BUTT LIFT</h2>
                  </div>
               </div>
               <div className="home_service_wrapper home_service3">
                  <img src={cavitation} alt="Cavitation" />
                  <div className="home_service_text_wrapper">
                     <h2>CAVITATION</h2>
                  </div>
               </div>
               <div className="home_service_wrapper home_service4">
                  <img src={fatFreezing} alt="Cavitation" />
                  <div className="home_service_text_wrapper">
                     <h2>FAT FREEZING</h2>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default Home;
