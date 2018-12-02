import React from "react";
import { withRouter } from "react-router-dom";
import PostData from '../data/booking_data.json';
import HotelData from '../data/hotel_1_data.json';
import BookingCard from '../ui/BookingCard';

function hotelName(){
  var name = "";
  {HotelData.map((hotelDetail, index)=>{
    name = hotelDetail.name
  })}
  return name;

}
function hotelImage(){
  var imageName ="";
  {HotelData.map((hotelDetail, index)=>{
    imageName = hotelDetail.images[0].src
  })}
  return imageName;
}

const PastBookings = (props) => {
    const element = hotelName()
    const image = hotelImage()
    return(

         <div className="list">
              {
                PostData.map((postDetail, index)=>{
                  return <BookingCard
                          key = {postDetail.id}
                          startDate={postDetail.date_booking_from}
                          endDate={postDetail.date_booking_to}
                          nameOfHotel = {element}
                          imageOfHotel = {image}
                          />
                  })
              }
          </div>
        )
  }
export default PastBookings;
