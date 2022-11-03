import React, { useRef } from "react";
import "../email/Email.css";
import emailjs from "@emailjs/browser";

const Email = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_sfgo9x4",
      "template_uyzp55f",
      form.current,
      "3TJSaBHP62AvVV5UB"
    );
    e.target.reset();
  };

  return (
    <div>
      <div className="section email_section">
        <div className="left_text">
          <span>
            <span className="line">Ready</span> to level up <br /> Your body
            with us?
          </span>
        </div>
        <div className="right_text">
          <form ref={form} onSubmit={sendEmail}>
            <input
              className="input"
              name="user_email"
              type="email"
              placeholder="Enter email address"
            />
            <button type="submit" className="btn btn_j">
              Join Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
