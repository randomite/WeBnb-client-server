import React, { Component } from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import Paper from "@material-ui/core/Paper";

//Team Pictures
import logo from "../../img/logo.png";
import aayush from "../../img/Aayush.png";
import daany from "../../img/Daany.jpg";
import derian from "../../img/Derian.jpg";
import ian from "../../img/Ian.jpg";
import jon from "../../img/Jon.jpg";
import juan from "../../img/Juan.jpg";
import raj from "../../img/Raj.jpg";
import ravin from "../../img/Ravin.jpg";
import steven from "../../img/Steven.png";

class AboutUs extends Component {
  renderTeam() {
    return (
      <div className="profileHolder">
        <div className="eachProfile">
          <a href="https://github.com/Delta09" target="_blank">
            <img src={daany} className="profile" />
          </a>
          <h3 className="title">Daanyaal Saeed</h3>
          <p className="job">Product Manager / SCRUM Master</p>
        </div>

        <div className="eachProfile">
          <a href="https://github.com/ianduron" target="_blank">
            <img src={ian} className="profile" />
          </a>
          <h3 className="title">Ian Duron</h3>
          <p className="job">Product Owner / BackEnd Developer</p>
        </div>

        <div className="eachProfile">
          <a href="https://github.com/randomite" target="_blank">
            <img src={ravin} className="profile" />
          </a>
          <h3 className="title">Ravin Sardal</h3>
          <p className="job">Architect / Technical Lead</p>
        </div>

        <div className="eachProfile">
          <a href="https://github.com/juancstlm" target="_blank">
            <img src={juan} className="profile" />
          </a>
          <h3 className="title">Juan Castillo</h3>
          <p className="job">FrontEnd Lead & Developer</p>
        </div>

        <div className="eachProfile">
          <a href="https://github.com/rajmakda" target="_blank">
            <img src={raj} className="profile" />
          </a>
          <h3 className="title">Raj Makda</h3>
          <p className="job">BackEnd Lead & Developer</p>
        </div>

        <div className="eachProfile">
          <a href="https://github.com/louievuitton" target="_blank">
            <img src={steven} className="profile" />
          </a>
          <h3 className="title">Steven Louie</h3>
          <p className="job">FrontEnd Developer / Tester</p>
        </div>

        <div className="eachProfile">
          <a href="https://github.com/derianlemus95" target="_blank">
            <img src={derian} className="profile" />
          </a>
          <h3 className="title">Derian Lemus</h3>
          <p className="job">FrontEnd Developer / Tester</p>
        </div>

        <div className="eachProfile">
          <a href="https://github.com/dixitaayush8" target="_blank">
            <img src={aayush} className="profile" key="key8" />
          </a>
          <h3 className="title">Aayush Dixit</h3>
          <p style={{ textAlign: "center", margin: "auto" }}>
            BackEnd Developer / Documentation
          </p>
        </div>

        <div className="eachProfile">
          <a href="https://github.com/jonlikesapples" target="_blank">
            <img src={jon} className="profile" />
          </a>
          <h3 className="title">Jonathan Wong</h3>
          <p className="job">BackEnd Developer / Tester</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Header />

        <div>
          <div className="imageHeader">
            <img src={logo} className="image" />
          </div>

          <Paper className="textHolder">
            <div>
              <h1 className="title"> About Us </h1>
            </div>

            <div className="text">
              Booking hotels can be a hassle. With so many options to choose
              from, and so much clutter on websites these days, users often get
              bogged down by unecessary clutter. Our team has streamlied the
              hotel booking process by taking a user-centric approach. As a
              result, we created WeBnb, a website that gives users an optimized
              hotel booking experience.
            </div>
          </Paper>

          <div className="divBorderW">
            <h1 className="title"> The Team</h1>
            {this.renderTeam()}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default AboutUs;
