import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient_text">
          Do you want to step into the future before others?
        </h1>
      </div>
      <div className="gpt3__footer_btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>No 128 Kufang Village Opposite Believers high school</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>No.3 Mike Akighbe way</p>
          <p>+2348172699651</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>2021 GPT3. All rights reserved</p>
      </div>
    </div>
  );
};

export default footer;
