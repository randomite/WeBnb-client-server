import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import imgurl from "../../img/home1.jpg";
import { Link } from "react-router-dom";

const backgroundStyle = {
  // backgroundImage: "url(http://i.imgur.com/Kp076D5.jpg)"
  backgroundImage: `url( ${imgurl} )`
};

class Landing extends React.Component {
  render() {
    return (
      <div className="landing" style={backgroundStyle}>
        <Header>HEADER</Header>
        <div>SEARCH</div>
        <Footer>FOOTER</Footer>
        <Link to="/Test">Test</Link>
      </div>
    );
  }
}

export default withRouter(Landing);
