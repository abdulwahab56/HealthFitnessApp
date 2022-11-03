import React from "react";
import "../whyus/Whyus.css";
import IMG1 from "../assets/image1.png";
import IMG2 from "../assets/image2.png";
import IMG3 from "../assets/image3.png";
import IMG4 from "../assets/image4.png";
import Tick from "../assets/tick.png";
import IMGADI from "../assets/adidas.png";
import IMGNB from "../assets/nb.png";
import IMGNI from "../assets/nike.png";

const Whyus = () => {
  return (
    <>
      <div className="section" id="whyus">
        <div className="whyus">
          <div className="whyus_img">
            <img src={IMG1} alt="people image" className="imag1" />
            <div>
              <img src={IMG2} alt="people image" />
              <div className="imag_tarin">
                <img src={IMG3} alt="people image" />
                <img src={IMG4} alt="people image" />
              </div>
            </div>
          </div>
          <div className="whyus_detail">
            <span className="whyus_title">Some Reason</span>
            <h1>Why choice us ?</h1>
            <ul className="whyus_list">
              <li>
                <img src={Tick} className="tick_img" />
                Over 140+ Expert Coach
              </li>
              <li>
                <img src={Tick} className="tick_img" />
                Over 140+ Expert Coach
              </li>
              <li>
                <img src={Tick} className="tick_img" />
                Over 140+ Expert Coach
              </li>
              <li>
                <img src={Tick} className="tick_img" />
                Over 140+ Expert Coach
              </li>
            </ul>
            <span className="partner">Our Partners</span>
            <div className="partners_imag">
              <img src={IMGNB} alt="NB image" />
              <img src={IMGADI} alt="adidas" />
              <img src={IMGNI} alt="niki" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whyus;
