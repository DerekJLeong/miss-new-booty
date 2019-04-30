import React from "react";
import "./footer.css";

import FB from "./images/facebook-logo.svg";
import IG from "./images/instagram-logo.svg";
import YT from "./images/youtube-logo.svg";

class Footer extends React.Component {
   render() {
      return (
         <footer>
            <p>We accept the following payment methods:</p>
            <ul className="payment">
               <li>Cash</li>
               <li>PayPal</li>
               <li>GoogleCheckout</li>
               <li>VISA</li>
               <li>Mastercard</li>
               <li>Discover</li>
               <li>American</li>
               <li>Check</li>
            </ul>
            <div className="social">
               <img src={IG} alt="link to instagram" />
               <div className="circle" />
               <img src={YT} alt="link to youtube" />
               <div className="circle" />
               <img src={FB} alt="link to facebook" />
            </div>
            <ul className="location">
               <li>Mon - Sun | 09:00 AM - 05:00 PM</li>
               <li>(555) 555 - 555</li>
               <li>1234 Address St, 12345, City CA</li>
            </ul>
         </footer>
      );
   }
}
export default Footer;
