import React from "react";
import { withRouter } from "react-router-dom";
import BookingCard from '../ui/BookingCard';
import {connect} from 'react-redux'
import {getBookingData} from "../../redux/actions";

// function hotelName(){
//   var name = "";
//   {HotelData.map((hotelDetail, index)=>{
//     name = hotelDetail.name
//   })}
//   return name;
//
// }
// function hotelImage(){
//   var imageName ="";
//   {HotelData.map((hotelDetail, index)=>{
//     imageName = hotelDetail.images[0].src
//   })}
//   return imageName;
// }

class PastBookings extends React.Component {

    componentWillMount(){
      this.props.dispatch(getBookingData())
    }

    render(){
      // const element = hotelName()
      // const image = hotelImage()
      return(

      <div className="list">
        {this.props.bookings.length > 0 ?
          this.props.bookings.map((postDetail, index)=>{
            return <BookingCard
              key = {postDetail.id}
              startDate={postDetail.date_booking_from}
              endDate={postDetail.date_booking_to}
              nameOfHotel = 'noname'
              imageOfHotel = ''

            />
          }) :
          <div> No bookings</div>
        }
      </div>
    )}

  }
export default connect(state=>state.user)(PastBookings);
