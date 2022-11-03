import React from "react";
import White from "../assets/whiteTick.png";
import { TbHeartHandshake } from "react-icons/tb";
import "../plans/Plan.css";

const Plan = () => {
  return (
    <div className="section" id="Plans">
      <div className="program_title">
        <span>Ready To Start</span>
        <span>Your jounary</span>
        <span>Now with us</span>
      </div>
      <div className="plans">
        <div className="plan_detail">
          <TbHeartHandshake className="plan_icon" />
          <p>Basic plan</p>
          <p>
            <span>$</span> 25
          </p>
          <div>
            <img src={White} alt="white tick" />
            <span> 2 hours of exercise </span>
          </div>
          <div>
            <img src={White} alt="white tick" />
            <span> Free consultant of coaches </span>
          </div>
          <div>
            <img src={White} alt="white tick" />
            <span> Access to the Community </span>
          </div>
          <div>
            <a href="#">See more benefits &rarr;</a>
          </div>
          <button className="btn btn-primary">Join Now</button>
        </div>
        <div className="plan_detail perium_plan">
          <TbHeartHandshake className="plan_icon" />
          <p>Basic plan</p>
          <p>
            <span>$</span> 25
          </p>
          <div>
            <img src={White} alt="white tick" />
            <span> 2 hours of exercise </span>
          </div>
          <div>
            <img src={White} alt="white tick" />
            <span> Free consultant of coaches </span>
          </div>
          <div>
            <img src={White} alt="white tick" />
            <span> Access to the Community </span>
          </div>
          <div>
            <a href="#">See more benefits &rarr;</a>
          </div>
          <button className="btn btn-primary">Join Now</button>
        </div>
        <div className="plan_detail">
          <TbHeartHandshake className="plan_icon" />
          <p>Basic plan</p>
          <p>
            <span>$</span> 25
          </p>
          <div>
            <img src={White} alt="white tick" />
            <span> 2 hours of exercise </span>
          </div>
          <div>
            <img src={White} alt="white tick" />
            <span> Free consultant of coaches </span>
          </div>
          <div>
            <img src={White} alt="white tick" />
            <span> Access to the Community </span>
          </div>
          <div>
            <a href="#">See more benefits &rarr;</a>
          </div>
          <button className="btn btn-primary">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
