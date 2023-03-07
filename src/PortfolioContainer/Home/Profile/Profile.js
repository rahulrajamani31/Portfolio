// import React from "react";
import React, { Component } from "react";
import Typical from "react-typical";
import "./Profile.css";

class Profile extends Component {
  state = {};
  render() {
    return (
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-detail">
            <div className="colz">
              <div className="colz-icon">
                <a
                  href="https://github.com/rahulrajamani31"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-github-square fa-1x"></i>
                </a>
                <a
                  href="https://www.notion.so/greatmage/DSA-aa5c71367933462fa8de51bdef590b67"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-sticky-note fa-1x"></i>
                </a>
                <a
                  href="https://devfolio.co/@RahulRajamani"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa fa-id-card fa-1x"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/rahul-rajamani-60b686247/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-linkedin-square fa-1x"></i>
                </a>
              </div>
            </div>
            <div className="profile-details-name">
              <span className="primary—text">
                {/* {" "} */}
                {/* Hello, I'M{" "} */}
                <span className="highlighted-text">
                  Hello, I'M Rahul Rajamani
                </span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Software Developer 🚀",
                      5000,
                      "MERN Dev🎭",
                      5000,
                      "Flutter Developer 😸",
                      5000,
                      "Enthusiastic Dev 🧮",
                      5000,
                    ]}
                  ></Typical>
                </h1>
                <span className="profile-role-tagline">
                  On the verge of Creating my own world
                </span>
              </span>
            </div>
            <div className="profile-options">
              <button className="btn primary-btn">{""}Hire Me </button>

              <a href="2001156Resume.pdf" download="Rahul 2001156Resume.pdf">
                <button className="btn highlighted-btn"> Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
