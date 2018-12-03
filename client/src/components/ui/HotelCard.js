import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid/Grid";
import {instance} from "../../Axios";


class HotelCard extends React.Component {
  //handles the navigation to the hotel view page

  state={
    price: ''
  }
  handleNavigate = () => {
    this.props.history.push({pathname: '/hotel',
    search: new URLSearchParams({id: this.props.id }).toString()});
  };

  componentWillMount(){
    instance.get('room',{
      params: {id: this.props.otherRooms, hotel_id: this.props.id}
    }).then(response=>{
      if(response.status===200){
        this.setState({price: response.data.data.price})
      }
    })
  }

  render() {
    return (
        <Grid item xs={12} sm={6} md={3}>
      <Card className="hotel-card">
        <CardActionArea style={{width:'100%'}} onClick={this.handleNavigate}>
          <CardMedia image={this.props.image}
                     className={"hotel-card-media"}
                     height={155}
          >
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
                ${this.state.price} per night
              </Typography>
              {/*The reviews */}
              <Typography component="p" color="inherit" id="reviews">
                {this.props.reviews} reviews
              </Typography>
            </CardContent>
          </CardMedia>
        </CardActionArea>
      </Card>
        </Grid>
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
