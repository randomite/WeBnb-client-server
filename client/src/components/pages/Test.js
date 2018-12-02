import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../ui/Header";

class Test extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default withRouter(Test);
