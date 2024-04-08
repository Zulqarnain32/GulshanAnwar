import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = () => {
    return (
        <Carousel autoPlay interval={2000} infiniteLoop>
            <div>
                <img src="assets/group1.jpg" className='caro-img'/>
                {/* <p className="legend">Umair</p> */}
            </div>
            <div>
                <img src="assets/zeeshan.jpg" className='caro-img' />
            </div>
            <div>
                <img src="assets/group2.jpg" className='caro-img' />
            </div>
            <div>
                <img src="assets/group3.jpg" className='caro-img' />
            </div>
            <div>
                <img src="assets/group4.jpg" className='caro-img' />
            </div>
            <div>
                <img src="assets/group5.jpg" className='caro-img' />
            </div>
            <div>
                <img src="assets/group6.jpg" className='caro-img' />
            </div>
            <div>
                <img src="assets/group7.jpg" className='caro-img' />
            </div>
            <div>
                <img src="assets/group8.jpg" className='caro-img' />
            </div>
            <div>
                <img src="assets/group9.jpg" className='caro-img' />
            </div>
            <div>
                <img src="assets/group10.jpg" className='caro-img' />
            </div>
            <div>
                <img src="assets/group11.jpg" className='caro-img' />
            </div>
            <div>
                <img src="assets/group12.jpg" className='caro-img' />
            </div>
            <div>
                <img src="assets/umair.jpg" className='caro-img'/>
            </div>
        </Carousel>
    );
};

export default DemoCarousel;
