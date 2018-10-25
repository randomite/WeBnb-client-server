import React from "react";
import Header from "../ui/Header";
import Lightbox from "react-images";
import Gallery from "../ui/Gallery";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import moment from "moment";
import RoomGrid from "../ui/RoomGrid";
import BookingDetails from "../ui/BookingDetails";
import instance from '../../Axios'

const datesList = [
  moment(),
  moment().add(1, "days"),
  moment().add(3, "days"),
  moment().add(9, "days"),
  moment().add(10, "days"),
  moment().add(11, "days"),
  moment().add(12, "days"),
  moment().add(13, "days")
];

const hotel_data = require("./hotel_data");

export default class HotelView extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: 0,
      startDate: null,
      endDate: null,
      focusedInput: null
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  render() {
    console.log("moment", moment());
    const photos = [
      {
        src:
          "https://s-ec.bstatic.com/images/hotel/max1024x768/757/75745672.jpg",
        width: 4,
        height: 3
      },
      {
        src:
          "https://s-ec.bstatic.com/images/hotel/max1024x768/629/62976649.jpg",
        width: 1,
        height: 1
      },
      {
        src:
          "https://t-ec.bstatic.com/images/hotel/max1024x768/114/114064958.jpg",
        width: 3,
        height: 4
      },
      {
        src:
          "https://t-ec.bstatic.com/images/hotel/max1024x768/114/114064956.jpg",
        width: 3,
        height: 4
      },
      {
        src:
          "https://t-ec.bstatic.com/images/hotel/max1024x768/100/100691762.jpg",
        width: 3,
        height: 4
      },
      {
        src:
          "https://t-ec.bstatic.com/images/hotel/max1024x768/209/20962970.jpg",
        width: 4,
        height: 3
      },
      {
        src:
          "https://s-ec.bstatic.com/images/hotel/max1280x900/757/75747856.jpg",
        width: 3,
        height: 4
      },
      {
        src:
          "https://t-ec.bstatic.com/images/hotel/max1280x900/114/114064952.jpg",
        width: 4,
        height: 3
      }
    ];

    return (
      <div>
        <Header />
        <div className="hotel">
          <div className="gallery">
            <Gallery
              images={photos}
              onClick={e => {
                this.openLightbox(e, { index: 0 });
              }}
            />
            <Lightbox
              images={photos}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            />
          </div>
          <div className="hotel_details">
            <div className="details">
              <h1>{hotel_data.name}</h1>
              <h5>{hotel_data.address}</h5>
              {/*<div>*/}
              {/*<h3>Availability</h3>*/}
              {/*<div>*/}
              {/*<AvailableDatesWrapper isDayBlocked={day1 => datesList.some(day2 => isSameDay(day1, day2))}/>*/}
              {/*<CalendarMonthGrid   initialMonth={moment().add(1,'month')}   numberOfMonths={2} />*/}
              {/*</div>*/}
              {/*</div>*/}
              <div>
                <h3>Available Rooms</h3>
                <div>
                  <RoomGrid rooms={hotel_data.rooms} />
                </div>
              </div>
            </div>
            <BookingDetails />
          </div>
        </div>
      </div>
    );
  }
}
