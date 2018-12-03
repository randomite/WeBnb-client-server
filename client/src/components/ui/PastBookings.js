import React from "react";
import { withRouter } from "react-router-dom";
import BookingCard from "../ui/BookingCard";
import { connect } from "react-redux";
import { getBookingData } from "../../redux/actions";
import moment from "moment";

//function hotelName(){
//   var name = "";
//   {getBookingData().map((hotelDetail, index)=>{
//     name = hotelDetail.name
//      })}
//return name;
//
// }
function hotelImage() {
  var imageName = "";
  {
    this.props.hotelData.images.map((hotelDetail, index) => {
      imageName = hotelDetail.image.M.src.S;
    });
  }
  return imageName;
}

class PastBookings extends React.Component {
  componentWillMount() {
    this.props.dispatch(getBookingData());
  }

  render() {
    //var element = hotelName()
    //var image = hotelImage()
    return (
      <div className="list">
        <h1>My Bookings</h1>
        {this.props.bookings.length > 0 ? (
          this.props.bookings
            .map((postDetail, index) => {
              console.log(postDetail)
              return (
                <BookingCard
                  key={postDetail.id}
                  id={postDetail.id}
                  hotel_id={postDetail.hotel_id}
                  price={postDetail.total_price}
                  room_id={postDetail.room_id}
                  startDate={postDetail.date_checkin}
                  endDate={postDetail.date_checkout}
                  number={moment(postDetail.date_checkin).diff(
                    moment(),
                    "days"
                  )}
                  // number = {numberOfDaysLeft(postDetail.date_checkin)}
                />
              );
            })
            .sort((a, b) => {
              console.log(a, b);
              if (a.props.number - b.props.number <= 0) {
                return a.props.number - b.props.number;
              } else {
                return b.props.number - a.props.number;
              }
            })
        ) : (
          <div> No bookings</div>
        )}
      </div>
    );
  }
}
export default connect(state => state.user)(PastBookings);
