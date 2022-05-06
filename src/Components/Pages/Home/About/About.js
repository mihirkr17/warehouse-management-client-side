import React from 'react';
import './About.css';
import img1 from '../../../../Assets/images/h1_weare.jpg';

const About = () => {
   return (
      <section className='about__section section_style'>
         <div className="row py-5">
            <div className="col-lg-6 py-4">
               <h2 className='section_title'>Who We Are <span>Largest Electronics Warehouse</span></h2>
               <div className="about_text mt-5">
                  We are here to store many types of variations of electronics products.
                  We have many products like (Laptop, Mobile, Accessories, Tablet, and Monitor) that we supply.
                  Our sellers are adding good products at an all-time in our inventory because they are always strict about
                  product quality.
               </div>
            </div>
            <div className="col-lg-6 py-4">
               <div className="about_img w-100 d-flex align-items-center justify-content-center">
                  <img src={img1} alt="about-img" className='w-75' />
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;