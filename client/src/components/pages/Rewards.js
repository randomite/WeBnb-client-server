import React from "react";
import { withRouter } from "react-router-dom";
import imgurl from "../../img/Rewards.jpg";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import RewardsTab from "../ui/RewardsTab";
import CircularProgress from "@material-ui/core/CircularProgress";
const rewards = require("./rewards_data");

const backgroundStyle = {
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
          <div className="Progress-container">
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
          </div>
        </center>

        <div className="information">
          <h2>FREE Nights</h2>
          <p>You currently have {rewards.freeNights.length} free night(s)</p>

          <RewardsTab data={rewards} />
        </div>

        <div className="information">
          <h2>How it works?</h2>
          <p className="emphasis">
            <h3>10 nights = 1 free night</h3>
          </p>
          <p>
            The value of a single free night is the average cost of the 10
            nights accumulated to obtain the free night.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Rewards);
