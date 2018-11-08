import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

class Rewards extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default withRouter(Rewards);
