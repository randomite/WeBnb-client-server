import React from 'react'
import PropTypes from 'prop-types'
import RoomCard from "./RoomCard";

export default class RoomGrid extends React.Component{

    renderRooms =() =>{
        return (this.props.rooms.map((room) => <RoomCard room={room} key={room.id}/>))
    };
    render() {
        return<div>{this.renderRooms()}</div>
    }
}

RoomGrid.propTypes = {
    rooms: PropTypes.array
};

