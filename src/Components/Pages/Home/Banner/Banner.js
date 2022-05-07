import React from 'react';
import './Banner.css';
import img1 from '../../../../Assets/images/slider/img1.png';
import img4 from '../../../../Assets/images/slider/img4.png';
import img5 from '../../../../Assets/images/slider/img5.png';
import macbookAir from '../../../../Assets/images/slider/macbook-air.png';
import allMobile from '../../../../Assets/images/slider/all-mobile.png';
import { Link } from 'react-router-dom';

const Banner = () => {

   return (
      <section className='home_banner'>
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                     <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                     </div>
                     <div className="carousel-inner">
                        <div className="carousel-item active carousel_item">
                           <div className="row">
                              <div className="col-lg-4 carousel_data">
                                 <div className="carousel_data_text">
                                    <h2>Brand New Laptop</h2>
                                    <p>We are stocking all the type of brand new laptop.</p>
                                    <Link to={'/inventory'} className='bt9 bt9_update'>Stock Now</Link>
                                 </div>
                              </div>
                              <div className="col-lg-8 carousel_data">
                                 <img src={img1} className="d-block" alt="slide-one" />
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item carousel_item">
                           <div className="row">
                              <div className="col-lg-4 carousel_data">
                                 <div className="carousel_data_text">
                                    <h2>Brand New Smartphone</h2>
                                    <p>
                                       Smartphone now part of life for everybody.
                                       So we are store many branded Smartphone.
                                    </p>
                                    <Link to={'/inventory'} className='bt9 bt9_update'>Stock Now</Link>
                                 </div>
                              </div>
                              <div className="col-lg-8 carousel_data">
                                 <img src={img5} className="d-block" alt="slide-two" />
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item carousel_item">
                           <div className="row">
                              <div className="col-lg-4 carousel_data">
                                 <div className="carousel_data_text">
                                    <h2>Smartphone Accessories</h2>
                                    <p>Included all Smartphone accessories </p>
                                    <Link to={'/inventory'} className='bt9 bt9_update' >Stock Now</Link>
                                 </div>
                              </div>
                              <div className="col-lg-8 carousel_data">
                                 <img src={img4} className="d-block" alt="slide-three" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 banner_sidebar">
                  <div className="banner_sidebar_btn">Limited Stock</div>
                  <aside className='row'>
                     <div className="col-12 bn_img">
                        <img src={macbookAir} alt="" />
                     </div>
                     <div className="col-12 bn_img">
                        <img src={allMobile} alt="" />
                     </div>
                  </aside>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Banner;