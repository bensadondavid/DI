import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from './hongkong.webp'
import image2 from './macao.jpg'
import image3 from './japan.webp'
import image4 from './lasvegas.webp'

const div = {
    with : '500px',
    height : '400px',
    marginTop : '60px'
}

const style = {
    width : '300px',
    height : '300px'
}

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel> 
            
                <div style={div}>
                    <img style={style} src={image1} />
                    <p className="legend">Hong-Kong</p>
                </div>
                <div style={div}>
                    <img style={style} src={image2} />
                    <p className="legend">Macao</p>
                </div>
                <div style={div}>
                    <img style={style} src= {image3} />
                    <p className="legend">Japan</p>
                </div>
                <div style={div}>
                    <img style={style} src={image4} />
                    <p className="legend">Las-Vegas</p>
                </div>
                
            </Carousel>
        );
    }
};

export default DemoCarousel
