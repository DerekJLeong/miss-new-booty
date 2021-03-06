import React, { Component } from "react";
import "./App.css";
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";
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
         <HashRouter basename="/">
            <Dashboard />
         </HashRouter>
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
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/services">Services</NavLink>
                  <NavLink to="/merchandise">Merchandise</NavLink>
                  <NavLink to="/reviews">Reviews</NavLink>
                  <NavLink to="/gallery">Gallery</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
               </nav>
            </header>
            <div className="content">
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/services" component={Services} />
                  <Route path="/merchandise" component={Merchandise} />
                  <Route path="/reviews" component={Reviews} />
                  <Route path="/gallery" component={Gallery} />
                  <Route path="/contact" component={Contact} />
               </Switch>
            </div>
         </div>
      );
   }
}

export default App;
