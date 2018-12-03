import React from "react";
import { withRouter } from "react-router-dom";
import BookingCard from '../ui/BookingCard';
import {connect} from 'react-redux'
import {getBookingData} from "../../redux/actions";
import Moment from 'react-moment';
//function hotelName(){
//   var name = "";
//   {getBookingData().map((hotelDetail, index)=>{
//     name = hotelDetail.name
//      })}
 //return name;
//
// }
function hotelImage(){
  var imageName ="";
   {this.props.hotelData.images.map((hotelDetail, index)=>{
     imageName = hotelDetail.image.M.src.S
   })}
   return imageName;
 }
//this function changes the format to display the date to MM DD YYYY
function numberOfDaysLeft(date){
  return <Moment fromNow>{date}</Moment>
}
class PastBookings extends React.Component {

    componentWillMount(){
      this.props.dispatch(getBookingData())
    }

    render(){
      //var element = hotelName()
      //var image = hotelImage()
      return(
      <div className="list">
      <h1>My Bookings</h1>
        {this.props.bookings.length > 0 ?
          this.props.bookings.map((postDetail, index)=>{
            return <BookingCard
              key = {postDetail.id}
              startDate={postDetail.date_checkin}
              endDate={postDetail.date_checkout}
              nameOfHotel = {postDetail.name}
              imageOfHotel = {postDetail.img}
              number = {numberOfDaysLeft(postDetail.date_checkin)}
              price = {postDetail.price}
            />
          }) :
          <div> No bookings</div>
        }
      </div>
    )}

  }
export default connect(state=>state.user)(PastBookings);
