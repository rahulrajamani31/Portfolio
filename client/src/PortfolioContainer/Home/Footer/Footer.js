import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer-container">
        <div className="footer-parent">
          <img
            src={require("../../../assets/Home/shape-bg.png")}
            alt="no internet connection"
          ></img>
        </div>
      </div>
    );
  }
}

export default Footer;
