import React from "react";
import "../components/HeroSection.css";
import Navbar from "./navrbar/Navbar";
import CALOR from "../components/assets/calories.png";
import IMG from "../components/assets/hero_image.png";
import IMG1 from "../components/assets/hero_image_back.png";
import Heart from "../components/assets/heart.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const HeroSection = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <>
      <div className="hero-section">
        <div className="blur hero-blur"></div>
        <div className="hero-left">
          <Navbar />
          <div className="hero_description">
            <div className="hero_add">
              <motion.div
                initial={{ left: "230px" }}
                whileInView={{ left: "8px" }}
                transition={transition}
              ></motion.div>
              <span>The Best fitness club in the town</span>
            </div>
            <div className="hero_title">
              <span>
                Shape Your <br /> IDEAL BODY
              </span>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="hero_detail">
              <div className="detail">
                <div>
                  <p>
                    <CountUp
                      start={100}
                      end={140}
                      duration={4}
                      separator=" "
                      prefix="+"
                    />
                  </p>
                  <span>Expert Coach</span>
                </div>
                <div>
                  <p>
                    <CountUp
                      start={500}
                      end={978}
                      duration={4}
                      separator=" "
                      prefix="+"
                    />
                  </p>
                  <span>Member join</span>
                </div>
                <div>
                  <p>
                    <CountUp
                      start={0}
                      end={50}
                      duration={4}
                      separator=" "
                      prefix="+"
                    />
                  </p>
                  <span>fitness program</span>
                </div>
              </div>
              <div className="calor_bar">
                <img src={CALOR} alt="calori imag" className="cal_img" />
                <div className="kcal">
                  <p>Calories burned</p>
                  <span>220 kcal</span>
                </div>
              </div>
            </div>
            <div className="info_btn">
              <a href="#" className=" btn__primary">
                Get Started
              </a>
              <a href="#" className=" btn__second">
                Learn more!
              </a>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div>
            <button className="btn btn_primary">Join Now</button>
          </div>
          <motion.div
            initial={{ right: "-1rem" }}
            whileInView={{ right: "4rem" }}
            transition={transition}
            className="heart"
          >
            <img src={Heart} alt="hear_imag" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </motion.div>
          <div>
            <img src={IMG1} alt="" className="hero_image_back" />
          </div>
          <div>
            <img src={IMG} alt="" className="hero_image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
