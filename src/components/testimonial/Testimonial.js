import React, { useState } from "react";
import "../testimonial/Testimonial.css";
import { testimonialsData } from "../../testimonialsData";
import Left from "../assets/leftArrow.png";
import Right from "../assets/rightArrow.png";

const Testimonial = () => {
  const [select, setSelect] = useState(0);
  const tlength = testimonialsData.length;
  return (
    <div>
      <div className="testimonial" id="testimonial">
        <div className="left-h">
          <div className="testimonial-test">
            <span> Testimonial</span>
            <span>What they</span>
            <span>say about us</span>
            <span>{testimonialsData[select].review} </span>
            <span>
              <span style={{ fontSize: "1.4rem" }}>
                {testimonialsData[select].name}
              </span>{" "}
              - {testimonialsData[select].status}
            </span>
          </div>
        </div>
        <div className="right-h">
          <div></div>
          <div></div>
          <img src={testimonialsData[select].image} alt="" />
          <div className="arrow">
            <img
              onClick={() => {
                select === 0
                  ? setSelect(tlength - 1)
                  : setSelect((prev) => prev - 1);
              }}
              src={Left}
              alt=""
            />
            <img
              onClick={() => {
                select === tlength - 1
                  ? setSelect(0)
                  : setSelect((prev) => prev + 1);
              }}
              src={Right}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
