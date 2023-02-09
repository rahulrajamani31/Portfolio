import React, { Component } from "react";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import "./Home.css";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home-container">
        <Header></Header>
        <Profile></Profile>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
