import React from "react";
import { withRouter } from "react-router-dom";
import imgurl from '../../img/home1.jpg'
import Header from "../ui/Header";
const backgroundStyle = {
  backgroundImage: `url( ${imgurl} )`,
};

class Landing extends React.Component {
  render() {
    return (
      <div className="landing" style={backgroundStyle}>
        <Header variant='secondary'/>
      </div>
    );
  }
}

export default withRouter(Landing);
