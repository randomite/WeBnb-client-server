import React from "react";
import PropTypes from "prop-types";
import Beds from "./Beds";
import store from "../../redux/store";
import {connect} from 'react-redux'

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
    console.log("PROPS:", this.props)
    const noRoom = (
      <div className="room_card">
        <div>No Room Selected</div>
      </div>
    );

    const roomSelected = (
      <div
        className={ this.props.id === this.props.room.id
            ? "room_card active"
            : "room_card"
        }
        onClick={this.handelRoomSelected}
      >
        <div>
          <Beds room_type={1} />
        </div>
        <div className="room_type">
          {this.props.room ? this.props.room.room_type : null}
        </div>
        <div>2 queen beds</div>
      </div>
    );
    return this.props.room.id ? roomSelected : noRoom;
  }
}

RoomCard.propTypes = {
  room: PropTypes.object
};

export default connect(state => state.booking.room.id)(RoomCard)

function mapStateToProps(state) {
  console.log('STATE',state);        // state
  console.log('ARGS',arguments[1]); // undefined
}