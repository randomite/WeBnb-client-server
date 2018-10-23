import React from 'react'
import PropTypes from 'prop-types'

export default class RoomCard extends React.Component{
    render(){
        return <div className='room_card'>
            <div></div>
            <div>{this.props.room.room_type}</div>
        </div>
    }
}

RoomCard.propTypes = {
    room: PropTypes.object
}