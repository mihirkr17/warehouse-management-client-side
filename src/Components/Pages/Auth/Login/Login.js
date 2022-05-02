import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import Spinner from '../../../Shared/Spinner';
import Social from '../Social/Social';


const Login = () => {
   const location = useLocation();
   const navigate = useNavigate();
   let comingFrom = location.state?.from?.pathname || '/';

   // login with email password
   const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
   ] = useSignInWithEmailAndPassword(auth);

   // if logged in then redirect to home page 
   if (user) {
      navigate(comingFrom, { replace: true });
   }

   // if loading 
   let load;
   if (loading) {
      load = <Spinner></Spinner>
   }

   // if error
   let errors;
   if (error) {
      errors = (<div className='alert bg-warning'>{error.message}</div>)
   }

   // user login handler
   const loginHandler = async (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      signInWithEmailAndPassword(email, password);
   }

   return (
      <section className='login__section'>
         <div className="container">

            <div className="row py-5">
               <div className="col-lg-5 login_image">

               </div>
               <div className="col-lg-7 login_form text-center">
                  <h2 className='section_title my-3'>Login to <span>EC-House</span></h2>
                  <form className='row g-3 py-5' onSubmit={loginHandler}>
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

                     <div className="col-lg-7 mx-auto">
                        {load || errors}
                     </div>
                     <div className="col-lg-7 mx-auto text-center">
                        <button type='submit' className='btn btn-primary'>Login</button>
                     </div>
                  </form>

                  <div className="login_bottom">
                     <p>Don't have a account ? <Link to={'/register'}>Sign Up</Link> <br /> Or </p>
                     <Social></Social>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Login;