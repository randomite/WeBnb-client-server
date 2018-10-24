import React from "react";
import PropTypes from "prop-types";
import Beds from "./Beds";
import store from "../../redux/store";

export default class RoomCard extends React.Component {
  handelRoomSelected = () => {
    store.dispatch({
      type: "booking/SELECT_ROOM",
      payload: {
        room: {
          id: this.props.room.id,
          room_type: this.props.room.room_type,
          room_type_code: this.props.room.room_type_code,
          room_number: this.props.room.room_number,
          image_url: this.props.room.image_url
        }
      }
    });
  };

  render() {
    const noRoom = (
      <div className="room_card">
        <div>No Room Selected</div>
      </div>
    );

    const roomSelected = (
      <div className="room_card" onClick={this.handelRoomSelected}>
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
