import React, { Component } from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
const teamMembers = require('./aboutUs.json')

class AboutUs extends Component {

  render() {
      const gridItems = teamMembers.map((member) =>
        <div className="grid-item">
            <a href={member.github} target="_blank">
            <img src={member.picture} alt="icon"/></a>
            <p className="name">{member.name}</p>
            <p>{member.role}</p>
        </div>);

    return (
      <div>
        <Header/>
        <div className="aboutUs">
          <h1>About Us</h1>
          <p className="p1">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <div className="grid-container">
              {gridItems}
          </div>
        </div>
        <Footer/>
      </div>

    );
  }
}

export default AboutUs;
