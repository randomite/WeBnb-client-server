import React from "react";
import { withRouter } from "react-router-dom";

import Icon from "@material-ui/core/Icon";

const styleFooter = {
  position: "fixed",
  bottom: 10,
  right: 10
};

class Footer extends React.Component {
  render() {
    return (
      <button style={styleFooter}>
        <Icon class="material-icons md-18">language</Icon>
        <Icon class="material-icons md-18">help</Icon>
        Terms, Privacy, Currency & More
      </button>
    );
  }
}

export default withRouter(Footer);
