import React from "react";
import { withRouter } from "react-router-dom";
import imgurl from "../../img/Rewards.jpg";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import CircularProgress from "@material-ui/core/CircularProgress";
const rewards = require("./rewards_data");

const backgroundStyle = {
  // backgroundImage: "url(http://i.imgur.com/Kp076D5.jpg)"
  backgroundImage: `url( ${imgurl} )`
};

const percentage = rewards.progress;

class Rewards extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="banner" style={backgroundStyle} />
        <center style={{ marginTop: "10px" }}>
          <h1>Rewards</h1>
          <p>Progress towards next free night</p>
          <CircularProgress
            className="progress2"
            variant="static"
            value={100}
            size={300}
          />
          <CircularProgress
            className="progress1"
            variant="static"
            value={rewards.progress}
            size={300}
          />
          <p className="percentage">
            <b>{percentage}%</b>
          </p>
        </center>
        <div className="information">
          <h2>How it works?</h2>
          <p className="emphasis">10 nights = 1 free night</p>
          <p>
            The value of a single free night is the average cost of the 10 night
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Rewards);
