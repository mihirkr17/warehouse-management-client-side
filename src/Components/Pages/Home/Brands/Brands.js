import React from 'react';
import './Brands.css';
import hp from '../../../../Assets/images/brands/hp.png';
import lg from '../../../../Assets/images/brands/lg.png';
import lenovo from '../../../../Assets/images/brands/lenovo.png';
import acer from '../../../../Assets/images/brands/acer.png';
import microsoft from '../../../../Assets/images/brands/microsoft.png';
import toshiba from '../../../../Assets/images/brands/toshiba.png';
import samsung from '../../../../Assets/images/brands/samsung.png';

const Brands = () => {
   return (
      <section className='brands__section section_style'>
         <h2 className="section_title">Our Popular <span>Brands</span></h2>
         <div className="row mt-5">
            <div className="col-lg-3">
               <div className="brand_card">
                  <img src={hp} alt="hp-brand" />
               </div>
            </div>
            <div className="col-lg-3">
               <div className="brand_card">
               <img src={lg} alt="lg-brand" />
               </div>
            </div>
            <div className="col-lg-3">
               <div className="brand_card">
                  <img src={lenovo} alt="lenovo-brand" />
               </div>
            </div>
            <div className="col-lg-3">
               <div className="brand_card">
                  <img src={acer} alt="acer-brand" />
               </div>
            </div>
            <div className="col-lg-3">
               <div className="brand_card">
                  <img src={microsoft} alt="microsoft-brand" />
               </div>
            </div>
            <div className="col-lg-3">
               <div className="brand_card">
                  <img src={toshiba} alt="toshiba-brand" />
               </div>
            </div>
            <div className="col-lg-3">
               <div className="brand_card">
                  <img src={samsung} alt="samsung-brand" />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Brands;