import React from "react";
import { withRouter } from "react-router-dom";
import Header from '../ui/Header'

const backgroundStyle = {
  backgroundImage: "url(http://i.imgur.com/Kp076D5.jpg)"
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
