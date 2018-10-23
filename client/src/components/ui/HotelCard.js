import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";

class HotelCard extends React.Component {
  //handles the navigation to the hotel view page
  handleNavigate = () => {
    this.props.history.push(this.props.link);
  };

  render() {
    return (
      <Card className="hotel-card">
        <CardActionArea onClick={this.handleNavigate}>
          <CardMedia className="hotel-card-media" image={this.props.image}>
            <CardContent className="hotel-card-text">
              {/*# of rooms available*/}
              <Typography component="p" color="inherit">
                Hotel • {this.props.rooms} rooms available
              </Typography>
              {/*Name of the Hotel*/}
              <Typography variant="h1" component="h3" color="inherit">
                {this.props.name}
              </Typography>
              {/*Price of the lowest costing room*/}
              <Typography component="p" color="inherit">
                ${this.props.price} per night
              </Typography>
              {/*The reviews */}
              <Typography component="p" color="inherit">
                {this.props.reviews} reviews
              </Typography>
            </CardContent>
          </CardMedia>
        </CardActionArea>
      </Card>
    );
  }
}

/*
HotelCard.propTypes = {
  classes: PropTypes.object.isRequired
};*/

export default withRouter(HotelCard);
