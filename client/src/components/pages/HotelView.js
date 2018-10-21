import React from 'react'
import Header from '../ui/Header'
import Lightbox from 'react-images';
import Gallery from 'react-photo-gallery';


export default class HotelView extends React.Component{

    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }
    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    render() {

        const photos = [
            { src: 'https://s-ec.bstatic.com/images/hotel/max1024x768/757/75745672.jpg', width: 4, height: 3 },
            { src: 'https://s-ec.bstatic.com/images/hotel/max1024x768/629/62976649.jpg', width: 1, height: 1 },
            { src: 'https://t-ec.bstatic.com/images/hotel/max1024x768/114/114064958.jpg', width: 3, height: 4 },
            { src: 'https://t-ec.bstatic.com/images/hotel/max1024x768/114/114064956.jpg', width: 3, height: 4 },
            { src: 'https://t-ec.bstatic.com/images/hotel/max1024x768/100/100691762.jpg', width: 3, height: 4 },
            { src: 'https://t-ec.bstatic.com/images/hotel/max1024x768/209/20962970.jpg', width: 4, height: 3 },
            { src: 'https://s-ec.bstatic.com/images/hotel/max1280x900/757/75747856.jpg', width: 3, height: 4 },
            { src: 'https://t-ec.bstatic.com/images/hotel/max1280x900/114/114064952.jpg', width: 4, height: 3 }
        ];

        return <div>
            <Header/>
            <div className='hotel'>
                <div className='gallery'>
                    <Gallery photos={photos} onClick={this.openLightbox}  columns={4} margin={1} />
                    <Lightbox images={photos}
                              onClose={this.closeLightbox}
                              onClickPrev={this.gotoPrevious}
                              onClickNext={this.gotoNext}
                              currentImage={this.state.currentImage}
                              isOpen={this.state.lightboxIsOpen}
                    />
                </div>
                <div>
                    <h1>HOTEL NAME</h1>
                </div>
            </div>
        </div>
    }
}
