import React from "react";
import PropTypes from "prop-types";
import Beds from "./Beds";
import store from "../../redux/store";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";

class RoomCard extends React.Component {
  handelRoomSelected = () => {
    store.dispatch({
      type: "booking/SELECT_ROOM",
      payload: {
        room: this.props.room
      }
    });
  };

  render() {
    console.log("ROOM CARD PROPS:", this.props);
    const noRoom = (
      <div className="room_card">
        <div>No Room Selected</div>
      </div>
    );

    const roomSelected = (
      <Grid item>
        <Paper
            elevation={0}
          onClick={this.handelRoomSelected}
          style={{ padding: "10px" , border: '1px solid rgba(0, 0, 0, 0.23)'}}
          className={
            this.props.id === this.props.room.id
              ? "room_card active"
              : "room_card"
          }>
          <div className='room_card_top'>
            <Beds room_type={this.props.room.beds} />
            <div  className='room_card_price'>${this.props.room.price}</div>
          </div>
          <div className="room_type">
            {this.props.room ? this.props.room.room_type : null}
          </div>
          <div>{this.props.room.beds}</div>
          {/*<div  className='room_card_price'>${this.props.room.price}</div>*/}
        </Paper>
      </Grid>
    );
    return this.props.room.id ? roomSelected : noRoom;
  }
}

RoomCard.propTypes = {
  room: PropTypes.object
};

export default connect(state => state.booking.room.id)(RoomCard);
