import React from "react";
import { withRouter } from "react-router-dom";

import Icon from "@material-ui/core/Icon";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";

const styleFooterButton = {
  position: "fixed",
  bottom: 20,
  right: 20
};

const footerGrid = {
  textAlign: "center"
};

class Footer extends React.Component {
  state = { drawer: false };

  toggleDrawer = (drawer, open) => () => {
    this.setState({
      [drawer]: open
    });
  };

  render() {
    return (
      <div>
        <button
          style={styleFooterButton}
          onClick={this.toggleDrawer("drawer", true)}
        >
          <span>
            <Icon className="material-icons md-18">help</Icon>
          </span>
          <span>Terms, Privacy, Currency & More</span>
        </button>

        <Drawer
          anchor="bottom"
          open={this.state.drawer}
          onClose={this.toggleDrawer("drawer", false)}
        >
          <div>
            <Grid container spacing={16} style={footerGrid}>
              <Grid item xs>
                <h1>Link 1</h1>
              </Grid>

              <Grid item xs>
                <h1>Link 1</h1>
              </Grid>

              <Grid item xs>
                <h1>Link 1</h1>
              </Grid>
            </Grid>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withRouter(Footer);
