import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="page-container">
      <div className="main-container">
        {" "}
        <div className="contact-container">
          Let's <br />
          work <br />
          together.
        </div>
        <div className="txt-container">
          <p className="p1">want to collaborate? </p>
          <p className="p2">AVAILABLE FOR FREELANCE WORK</p>
          <p className="p3">milesmazel@gmail.com</p>
        </div>
      </div>
      <div className="socials">
        <ul>
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
        </ul>
        <p>built by Zach</p>
      </div>
    </div>
  );
};

export default Contact;
