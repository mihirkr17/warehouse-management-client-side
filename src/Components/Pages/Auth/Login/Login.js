import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import google from '../../../../Assets/images/logos/google.png';

const Login = () => {
   return (
      <section className='login__section'>
         <div className="container">

            <div className="row py-5">
               <div className="col-lg-5 login_image">

               </div>
               <div className="col-lg-7 login_form text-center">
                  <h2 className='section_title my-3'>Login to <span>EC-House</span></h2>
                  <form className='row g-3 py-5'>
                     <div className="col-lg-7 mx-auto">
                        <div className="form-floating mb-3">
                           <input type="email" className="form-control" id="floatingInput" name='email' placeholder="name@example.com" />
                           <label htmlFor="floatingInput">Email address</label>
                        </div>
                     </div>
                     <div className="col-lg-7 mx-auto">
                        <div className="form-floating">
                           <input type="password" className="form-control" name='password' id="floatingPassword" placeholder="Password" autoComplete='off' />
                           <label htmlFor="floatingPassword">Password</label>
                        </div>
                     </div>
                     <div className="col-lg-7 mx-auto text-center">
                        <button className='btn btn-primary mt-3'>Login</button>
                     </div>
                  </form>

                  <div className="login_bottom">
                     <p>Don't have a account ? <Link to={'/register'}>Go Here</Link></p>
                     <span>Or</span>
                     <br />
                     <p>
                        <button className='ms-3' title='Sign in with google'>
                           <img src={google} className='me-1' alt="google-logo" />
                           oogle
                        </button>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Login;