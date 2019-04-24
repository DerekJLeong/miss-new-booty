import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import Home from "./components/home.jsx";
import Services from "./components/services.jsx";
import Merchandise from "./components/merchandise.jsx";
import Reviews from "./components/reviews.jsx";
import Gallery from "./components/gallery.jsx";
import Contact from "./components/contact.jsx";

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
      console.log(width);
      let isMobile;
      isMobile =
         width <= 768 ? (
            <div>
               <input type="checkbox" id="navigation" />
               <label for="navigation">+</label>
            </div>
         ) : null;

      return (
         <div id="dashboard">
            {isMobile}
            <nav>
               <ul>
                  <li>
                     <NavLink exact to="/">
                        Home
                     </NavLink>
                  </li>
                  <li>
                     <NavLink exact to="/services">
                        Services
                     </NavLink>
                  </li>
                  <li>
                     <NavLink exact to="/merchandise">
                        Merchandise
                     </NavLink>
                  </li>
                  <li>
                     <NavLink exact to="/reviews">
                        Reviews
                     </NavLink>
                  </li>
                  <li>
                     <NavLink exact to="/gallery">
                        Gallery
                     </NavLink>
                  </li>
                  <li>
                     <NavLink exact to="/contact">
                        Contact
                     </NavLink>
                  </li>
               </ul>
            </nav>
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
