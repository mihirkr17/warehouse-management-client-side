import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../../../Assets/images/logos/google.png';

const Register = () => {
   return (
      <section className='register__section'>
         <div className="container">
            <div className="row py-5">
               <div className="col-lg-7 mx-auto login_form text-center">
                  <h2 className='section_title my-3'>Register to <span>EC-House</span></h2>
                  <form className='row g-3 py-5'>
                     <div className="col-lg-7 mx-auto">
                        <div className="form-floating mb-3">
                           <input type="text" className="form-control" id="floatingInput" name='username' placeholder="John Doe" />
                           <label htmlFor="floatingInput">Username</label>
                        </div>
                     </div>

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
                        <button className='btn btn-primary mt-3'>Register</button>
                     </div>
                  </form>

                  <div className="login_bottom">
                     <p>Already Logged In ? <Link to={'/login'}>Go To Login</Link></p>
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

export default Register;