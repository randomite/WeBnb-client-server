import React from "react";
import { withRouter } from "react-router-dom";

import Icon from "@material-ui/core/Icon";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styleFooterButton = {
  position: "fixed",
  bottom: 20,
  right: 20
};

const footers = [
  {
    title: "Company",
    description: [
      <Link to="/AboutUs">About us</Link>,
      "History",
      "Contact us",
      "Locations"
    ]
  },
  {
    title: "Features",
    description: ["Cool stuff", "Random feature"]
  },
  {
    title: "Legal",
    description: [
      <Link to='/privacy'>Privacy policy</Link>,
      <Link to='/terms'>Terms of use</Link>,
    ]
  }
];

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
        {/*Anchored Button to open footer*/}
        <Button
          style={styleFooterButton}
          onClick={this.toggleDrawer("drawer", true)}
          variant="contained"
        >
          <span>
            <Icon className="material-icons md-18">help</Icon>
          </span>
          <span>Terms, Privacy, Currency & More</span>
        </Button>

        {/*Swipeable Footer Drawer*/}
        <SwipeableDrawer
          anchor="bottom"
          open={this.state.drawer}
          onClose={this.toggleDrawer("drawer", false)}
          onOpen={this.toggleDrawer("drawer", true)}
        >
          {/* Footer */}
          <footer
            className={classNames(this.footer, this.layout)}
            style={{ margin: 20, textAlign: "center" }}
          >
            {/*Grid containing headings and links*/}
            <Grid container spacing={18} justify="space-evenly">
              {footers.map(footer => (
                <Grid item xs key={footer.title}>
                  {/*headings*/}
                  <Typography variant="title" color="textPrimary" gutterBottom>
                    {footer.title}
                  </Typography>

                  {/*links*/}
                  {footer.description.map(item => (
                    <Typography
                      key={item}
                      variant="heading"
                      color="textSecondary"
                    >
                      {item}
                    </Typography>
                  ))}
                </Grid>
              ))}
            </Grid>
          </footer>
          {/* End footer */}
        </SwipeableDrawer>
      </div>
    );
  }
}

export default withRouter(Footer);
