import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import imgurl from "../../img/home1.jpg";
import TripInfoModal from "../ui/TripInfoModal";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
      <MuiThemeProvider>
      <div className="landing" style={backgroundStyle}>
        <Header variant='secondary'/>

            <div className= "outterbox">
              <div className="outterbox1">
                <div className="outterbox2">
                  <div className="outterbox3">
                    <div className="desktopView">

                      <TripInfoModal onChange={fields => this.onChange(fields)}/>

                    </div>
                  </div>
                </div>
              </div>
            </div>

        <Footer/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(Landing);
