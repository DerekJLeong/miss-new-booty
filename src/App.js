import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import Home from "./components/home.jsx";
import Services from "./components/services.jsx";
import Merchandise from "./components/merchandise.jsx";
import Reviews from "./components/reviews.jsx";
import Gallery from "./components/gallery.jsx";
import Contact from "./components/contact.jsx";
import logo from "./components/images/mnb_logo.png";

class App extends Component {
   render() {
      return (
         <BrowserRouter>
            <Dashboard />
         </BrowserRouter>
      );
   }
}

class Dashboard extends React.Component {
   constructor(props) {
      super(props);
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      this.state = { viewWidth: 0 };
   }

   componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions);
   }

   componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
   }

   updateWindowDimensions() {
      this.setState({
         viewWidth: window.innerWidth
      });
   }

   render() {
      const width = this.state.viewWidth;
      let isMobile;
      isMobile = width <= 768 ? null : null;

      return (
         <div id="dashboard">
            <header>
               <img src={logo} alt="Miss New Booty Logo" />
               {isMobile}
               <nav>
                  <NavLink exact to="/">
                     Home
                  </NavLink>
                  <NavLink exact to="/services">
                     Services
                  </NavLink>
                  <NavLink exact to="/merchandise">
                     Merchandise
                  </NavLink>
                  <NavLink exact to="/reviews">
                     Reviews
                  </NavLink>
                  <NavLink exact to="/gallery">
                     Gallery
                  </NavLink>
                  <NavLink exact to="/contact">
                     Contact
                  </NavLink>
               </nav>
            </header>
            <div className="content">
               <Route exact path="/" component={Home} />
               <Route exact path="/services" component={Services} />
               <Route exact path="/merchandise" component={Merchandise} />
               <Route exact path="/reviews" component={Reviews} />
               <Route exact path="/gallery" component={Gallery} />
               <Route exact path="/contact" component={Contact} />
            </div>
         </div>
      );
   }
}

export default App;
