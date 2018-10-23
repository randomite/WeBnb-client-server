import React from 'react'

export default class Gallery extends React.Component{

    renderImages = () =>{

    }
    render(){
        return <div className='gallery'>
            <div className='gallery_main'>
                <img src={this.props.images[0].src}/>
            </div>
            <div className='gallery_extra'>
                <div><img src={this.props.images[1].src}/></div>
                <div>
                    <img src={this.props.images[2].src}/>
                </div>
            </div>
            <div className='gallery_extra'>
                <div><img src={this.props.images[3].src}/></div>
                <div><img src={this.props.images[4].src}/></div>
            </div>
        </div>
    }
}
