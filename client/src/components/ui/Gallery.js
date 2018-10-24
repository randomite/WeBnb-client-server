import React from "react";
import { Button } from "@material-ui/core";

export default class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery">
        <div
          className="gallery_main"
          style={{ backgroundImage: `url(${this.props.images[0].src}` }}
        />
        <div className="gallery_extra">
          <div className="col2">
            <div>
              <div
                style={{ backgroundImage: `url(${this.props.images[1].src}` }}
              />
            </div>
            <div>
              <div
                style={{ backgroundImage: `url(${this.props.images[2].src}` }}
              />
            </div>
          </div>
          <div className="col2">
            <div>
              <div
                style={{ backgroundImage: `url(${this.props.images[3].src}` }}
              />
            </div>
            <div>
              <div
                style={{ backgroundImage: `url(${this.props.images[4].src}` }}
              />
            </div>
          </div>
        </div>
        <div className="view_all">
          <Button variant="contained" onClick={this.props.onClick}>
            View all images
          </Button>
        </div>
      </div>
    );
  }
}
