import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="container-fluid">
    <footer className="footer">
      <h4>Thank you for visiting my Portfolio! </h4>
      <a href="https://www.linkedin.com/in/samuellancaster" target="blank"> <i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
      <a href="https://github.com/Lancasting" target="blank"> <i className="fa fa-github-square" aria-hidden="true"></i></a>
    </footer>
    </div>
  );
}

export default Footer;