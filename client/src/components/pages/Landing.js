import React from "react";
import { withRouter } from "react-router-dom";
import Header from '../ui/Header'
import imgurl from '../../img/home1.jpg'
const backgroundStyle = {
  // backgroundImage: "url(http://i.imgur.com/Kp076D5.jpg)"
  backgroundImage: `url( ${imgurl} )`,
};

class Landing extends React.Component {
  render() {
    return (
      <div className="landing" style={backgroundStyle}>
        <Header>HEADER</Header>
        <div>SEARCH</div>
      </div>
    );
  }
}

export default withRouter(Landing);
