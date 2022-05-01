import React from 'react';
import './Banner.css';
import img1 from '../../../../Assets/images/slider-1.png';
import img2 from '../../../../Assets/images/slider-2.jpg';
import img3 from '../../../../Assets/images/slider-3.jpg';
import img4 from '../../../../Assets/images/slider-4.jpeg';

const Banner = () => {
   return (
      <section className='home_banner'>
         <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
               <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
               <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
               <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
               <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
               <div className="carousel-item active carousel_item">
                  <img src={img1} className="d-block" alt="slide-image-one" />
               </div>
               <div className="carousel-item carousel_item">
                  <img src={img2} className="d-block" alt="slide-image-two" />
               </div>
               <div className="carousel-item carousel_item">
                  <img src={img3} className="d-block" alt="slide-image-three" />
               </div>
               <div className="carousel-item carousel_item">
                  <img src={img4} className="d-block" alt="slide-image-four" />
               </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Next</span>
            </button>
         </div>
      </section>
   );
};

export default Banner;