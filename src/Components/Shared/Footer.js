import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import img1 from '../../Assets/images/footer/img-1.png';
import img2 from '../../Assets/images/footer/img-2.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Footer = () => {
   const [user] = useAuthState(auth);
   const newDate = new Date();
   const year = newDate.getFullYear();

   return (
      <>
         <svg id="wave" className='footer_svg'
            style={{ transform: "rotate(0deg)", transition: "0.3s" }}
            viewBox="0 0 1440 130"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <path
               fillOpacity={1}
               d="M0,0L120,17.3C240,35,480,69,720,88.8C960,108,1200,113,1440,108.3C1680,104,1920,91,2160,86.7C2400,82,2640,87,2880,82.3C3120,78,3360,65,3600,69.3C3840,74,4080,95,4320,88.8C4560,82,4800,48,5040,28.2C5280,9,5520,4,5760,8.7C6000,13,6240,26,6480,32.5C6720,39,6960,39,7200,32.5C7440,26,7680,13,7920,26C8160,39,8400,78,8640,88.8C8880,100,9120,82,9360,80.2C9600,78,9840,91,10080,84.5C10320,78,10560,52,10800,49.8C11040,48,11280,69,11520,73.7C11760,78,12000,65,12240,67.2C12480,69,12720,87,12960,97.5C13200,108,13440,113,13680,104C13920,95,14160,74,14400,71.5C14640,69,14880,87,15120,91C15360,95,15600,87,15840,86.7C16080,87,16320,95,16560,84.5C16800,74,17040,43,17160,28.2L17280,13L17280,130L17160,130C17040,130,16800,130,16560,130C16320,130,16080,130,15840,130C15600,130,15360,130,15120,130C14880,130,14640,130,14400,130C14160,130,13920,130,13680,130C13440,130,13200,130,12960,130C12720,130,12480,130,12240,130C12000,130,11760,130,11520,130C11280,130,11040,130,10800,130C10560,130,10320,130,10080,130C9840,130,9600,130,9360,130C9120,130,8880,130,8640,130C8400,130,8160,130,7920,130C7680,130,7440,130,7200,130C6960,130,6720,130,6480,130C6240,130,6000,130,5760,130C5520,130,5280,130,5040,130C4800,130,4560,130,4320,130C4080,130,3840,130,3600,130C3360,130,3120,130,2880,130C2640,130,2400,130,2160,130C1920,130,1680,130,1440,130C1200,130,960,130,720,130C480,130,240,130,120,130L0,130Z">
            </path>
         </svg>
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
                        {
                           user ? <>
                              <NavLink to={'/inventory'}>Manage Item</NavLink>
                              <NavLink to={'/add-item'}>Add Item</NavLink>
                              <NavLink to={'/my-item'}>My Items</NavLink>
                           </> : ''
                        }
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
                  <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
                     <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                     <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                     <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="https://github.com/mroy35034" target="_blank" rel="noopener noreferrer">
                     <FontAwesomeIcon icon={faGithub} />
                  </a>
               </div>
            </div>

         </footer>
      </>
   );
};

export default Footer;