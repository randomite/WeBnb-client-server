import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import imgurl from "../../img/Rewards.jpg";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import RewardsTab from "../ui/RewardsTab";
import { instance } from "../../Axios";
import store from "../../redux/store";
import CircularProgress from "@material-ui/core/CircularProgress";
const rewards = {};
const backgroundStyle = {
  backgroundImage: `url( ${imgurl} )`
};

class Rewards extends React.Component {
  state = {
    rewards: [],
    days: 0
  };

  componentWillMount() {
    setTimeout(
      function() {
        instance("/rewards?email=" + store.getState().user.email).then(res => {
          console.log("Resource:" + res);
          this.setState({ rewards: res.data.data });
        });
      }.bind(this),
      4000
    );

    setTimeout(
      function() {
        this.setState({ days: this.progress() });
      }.bind(this),
      6000
    );
  }

  progress = () => {
    let len = this.state.rewards.freeNights.length;
    let lastLen = this.state.rewards.freeNights[len - 1].length;
    let nights = this.state.rewards.freeNights.length;
    if (len === 0) {
      nights = 0;
    } else if (lastLen < 10) {
      nights = nights - 1;
    }
    console.log(nights);
    return nights;
  };

  renderRewards = () => {
    if (this.state.rewards.length != 0) {
      {
        return <RewardsTab data={this.state.rewards} />;
      }
    }
  };

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
              value={this.state.rewards.progress}
              size={300}
            />
            <p className="percentage">
              <b>{this.state.rewards.progress}%</b>
            </p>
          </div>
        </center>

        <div className="information">
          <h2>FREE Nights</h2>
          <p>You currently have {this.state.days} free night(s)</p>
          {this.renderRewards()}
        </div>

        <div className="information">
          <h2>How it works?</h2>
          <p className="emphasis">
            <h3>10 nights = 1 free night</h3>
          </p>
          <p style={{ marginBottom: "50px" }}>
            The value of a single free night is the average cost of the 10
            nights accumulated to obtain the free night.
          </p>

          <h2>How do I redeem my Free Night?</h2>
          <p style={{ marginBottom: "50px" }}>
            To redeem your free night, upon checking out select Apply Free
            Night.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Rewards);
