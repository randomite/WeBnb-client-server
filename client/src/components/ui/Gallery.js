import React from "react";
import { Button } from "@material-ui/core";
import Lightbox from "react-images";
import PropTypes from "prop-types";

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);

    console.log("PROPS GALLERY:", props);

    this.state = {
      currentImage: 0,
      photos: props.hotelImages.concat(props.roomImages)
    };
  }
  openLightbox(event, obj) {
    console.log("OPEN LIGHTBOX", obj);
    this.setState({
      currentImage: obj,
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

  randomIntFromInterval = (
    min,
    max // min and max included
  ) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  render() {
    return (
      <div className="gallery">
        <div
          className="gallery_main"
          onClick={e => this.openLightbox(e, 0)}
          style={{ backgroundImage: `url(${this.state.photos[0].src}` }}
        />
        <div className="gallery_extra">
          <div className="col2">
            <div>
              <div
                onClick={e => this.openLightbox(e, 1)}
                style={{ backgroundImage: `url(${this.state.photos[1].src}` }}
              />
            </div>
            <div>
              <div
                onClick={e => this.openLightbox(e, 2)}
                style={{ backgroundImage: `url(${this.state.photos[2].src}` }}
              />
            </div>
          </div>
          <div className="col2">
            <div>
              <div
                onClick={e => this.openLightbox(e, 3)}
                style={{ backgroundImage: `url(${this.state.photos[3].src}` }}
              />
            </div>
            <div>
              <div
                onClick={e => this.openLightbox(e, 4)}
                style={{
                  backgroundImage: `url(${
                    this.state.photos[
                      this.randomIntFromInterval(0, this.state.photos.length)
                    ].src
                  }`
                }}
              />
            </div>
          </div>
        </div>
        <div className="view_all">
          <Button variant="contained" onClick={e => this.openLightbox(e, 0)}>
            View all images
          </Button>
        </div>
        <Lightbox
          images={this.state.photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}

Gallery.PropTypes = {
  hotelImages: PropTypes.array,
  roomImages: PropTypes.array
};
