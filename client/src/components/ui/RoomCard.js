import React from 'react'
import PropTypes from 'prop-types'
import Beds from './Beds'

export default class RoomCard extends React.Component{

    render(){
        return <div className='room_card'>
            <div><Beds room_type={1}/></div>
            <div>{this.props.room.room_type}</div>
            <div>Two queen beds</div>
        </div>
    }
}

RoomCard.propTypes = {
    room: PropTypes.object
}