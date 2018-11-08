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
    this.props.history.push("hotel/" + this.props.id);
  };

  render() {
    return (
      <Card className="hotel-card">
        <CardActionArea onClick={this.handleNavigate}>
          <CardMedia className="hotel-card-media" image={this.props.image}>
            <CardContent className="hotel-card-text">
              {/*# of rooms available*/}
              <Typography component="p" color="inherit" id="rooms">
                Hotel • {this.props.rooms} rooms available
              </Typography>
              {/*Name of the Hotel*/}
              <Typography variant="h1" component="h3" color="inherit" id="name">
                {this.props.name}
              </Typography>
              {/*Price of the lowest costing room*/}
              <Typography component="p" color="inherit" id="price">
                ${this.props.price} per night
              </Typography>
              {/*The reviews */}
              <Typography component="p" color="inherit" id="reviews">
                {this.props.reviews} reviews
              </Typography>
            </CardContent>
          </CardMedia>
        </CardActionArea>
      </Card>
    );
  }
}

HotelCard.propTypes = {
  rooms: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string
};

export default withRouter(HotelCard);
