import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import imgurl from "../../img/home1.jpg";
import TripInfoModal from "../ui/TripInfoModal";

const backgroundStyle = {
  // backgroundImage: "url(http://i.imgur.com/Kp076D5.jpg)"
  backgroundImage: `url( ${imgurl} )`
};

class Landing extends React.Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      <div className="landing" style={backgroundStyle}>
        <Header variant="secondary" />
        <div className='landing_content'>
          <TripInfoModal onChange={fields => this.onChange(fields)} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Landing);
