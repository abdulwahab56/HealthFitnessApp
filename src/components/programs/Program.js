import React from "react";
import "../programs/Program.css";
import { CgGym } from "react-icons/cg";

const Program = () => {
  return (
    <>
      <div className="section" id="program">
        <div className="program_title">
          <span>Explor Our</span>
          <span>Program</span>
          <span>To Shape You</span>
        </div>
        <div className="program_description">
          <div className="program">
            <CgGym className="program_icon" />
            <h4 className="title">Strength training</h4>
            <p className="program_detail">
              London. Michaelmas term lately over, and the Lord Chancellor
              sitting in Lincoln's Inn Hall
            </p>
            <a href="#">Join Now &rarr;</a>
          </div>
          <div className="program">
            <CgGym className="program_icon" />
            <h4 className="title">Strength training</h4>
            <p className="program_detail">
              London. Michaelmas term lately over, and the Lord Chancellor
              sitting in Lincoln's Inn Hall
            </p>
            <a href="#">Join Now &rarr;</a>
          </div>
          <div className="program">
            <CgGym className="program_icon" />
            <h4 className="title">Strength training</h4>
            <p className="program_detail">
              London. Michaelmas term lately over, and the Lord Chancellor
              sitting in Lincoln's Inn Hall
            </p>
            <a href="#">Join Now &rarr;</a>
          </div>
          <div className="program">
            <CgGym className="program_icon" />
            <h4 className="title">Strength training</h4>
            <p className="program_detail">
              London. Michaelmas term lately over, and the Lord Chancellor
              sitting in Lincoln's Inn Hall
            </p>
            <a href="#" className="program_btn">
              Join Now &rarr;
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;
