import React, { Component } from "react";
import Footer from "./footer.jsx";
import "./reviews.css";

import before from "./images/reviews_before.png";
import after from "./images/reviews_after.png";

class Reviews extends React.Component {
   render() {
      return (
         <section className="reviews">
            <div className="reviews_top_container">
               <h1>Reviews</h1>
               <ul>
                  <li>
                     <p>*****</p>
                     <p>
                        I’m in love with the services here and love my results!
                     </p>
                  </li>
                  <li>
                     <p>*****</p>
                     <p>
                        Wow was I blown away by the results! I didn’t believe
                        one session would make a difference but I was reassured
                        it would. I was stoked when one session did make my
                        booty pop but I’m addicted and make it back almost once
                        a week!
                     </p>
                  </li>
                  <li>
                     <p>*****</p>
                     <p>
                        I’m so glad I discovered a easy, pain free way to make
                        my booty look better! The treatment was so easy and
                        completely pain free and the best part is I was able to
                        notice a change after one visit. I will definitely go
                        back again
                     </p>
                  </li>
                  <li>
                     <p>*****</p>
                     <p>
                        Love the results! I was looking into surgery and this
                        was the best alternative for me low maintenance and
                        about 1/10 the price!
                     </p>
                  </li>
                  <li>
                     <p>*****</p>
                     <p>
                        Love this place and I am in love with my results very
                        great deal I was looking into places in Beverly Hills
                        and this was so much more affordable!
                     </p>
                  </li>
                  <li>
                     <p>*****</p>
                     <p>
                        Totally recommend on my 2nd session and huge difference.
                        This Vacuum does wonders Look forward to seeing her
                        again!
                     </p>
                  </li>
               </ul>
            </div>
            {/* <div className="reviews_bottom_container">
               <h2>Before</h2>
               <img src={before} alt="before proceedure" />
               <h3>NON-INVASIVE BUTTLIFT</h3>
               <img src={after} alt="before proceedure" />
               <h2>After</h2>
            </div> */}
            <Footer />
         </section>
      );
   }
}

export default Reviews;
