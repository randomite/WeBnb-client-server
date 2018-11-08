import React from 'react'
import PropTypes from 'prop-types'
import RoomCard from "./RoomCard";
import {Grid} from '@material-ui/core'
export default class RoomGrid extends React.Component{

    renderRooms =() =>{
        return (this.props.rooms.map((room) => <RoomCard room={room} key={room.id}/>))
    };
    render() {
        return<Grid container style={{flexGrow: 1}} spacing={8}>{this.renderRooms()}</Grid>
    }
}

RoomGrid.propTypes = {
    rooms: PropTypes.array
};

