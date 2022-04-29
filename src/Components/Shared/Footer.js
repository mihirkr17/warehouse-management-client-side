import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import img1 from '../../Assets/images/footer/img-1.png';
import img2 from '../../Assets/images/footer/img-2.png';

const Footer = () => {
   const newDate = new Date();
   const year = newDate.getFullYear();

   return (
      <footer className="footer__section d-flex align-items-center flex-column py-4">
         <div className="container">
            <div className='footer_top_info w-100 row mx-auto text-center py-3 text-light'>
               <div className="col-lg-4 py-3">
                  <h6 className='fw-bold'>Get On</h6>
                  <div className="footer_get_on d-flex justify-content-evenly pt-3">
                     <a href="http://" target="_blank">
                        <img src={img1} alt="apple-store" />
                     </a>
                     <a href="http://" target="_blank">
                        <img src={img2} alt="google-play" />
                     </a>
                  </div>
               </div>
               <div className="col-lg-4 py-3 footer_links">
                  <h6 className='fw-bold'>Some Links</h6>
                  <div className="d-flex flex-column pt-3">
                     <NavLink to={'/'}>Home</NavLink>
                     <NavLink to={'/blogs'}>Blogs</NavLink>
                  </div>
               </div>
               <div className="col-lg-4 py-3">
                  <h6 className='fw-bold'>Newsletter</h6>
                  <div className="footer_form mx-auto w-75 pt-3">
                     <form action="" className='w-100'>
                        <input type="email" className="form-control form-control-sm" placeholder='Email Address...' />
                        <button className='btn btn-warning btn-sm w-100 mt-2' type='submit'>Subscribe</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>

         <div className="footer_bottom_info d-flex align-items-center justify-content-around">
            <div className="footer_text text-muted">EC-House &copy; {year}</div>
            <div className="social_icon d-flex align-items-center justify-content-around">
               <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
               </a>
               <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
               </a>
               <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
               </a>
            </div>
         </div>

      </footer>
   );
};

export default Footer;