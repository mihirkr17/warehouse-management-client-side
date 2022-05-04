import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import Social from '../Social/Social';
import SpinnerBtn from '../../../Shared/SpinnerBtn';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
   document.title = "EC-House Login";
   const [email, setEmail] = useState('');
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

   // use password reset with email
   const [sendPasswordResetEmail, sending, pwdError] = useSendPasswordResetEmail(auth);

   // if logged in then redirect to home page 
   useEffect(() => {
      if (user) {
         navigate(comingFrom, { replace: true });
      }
   }, [comingFrom, navigate, user]);

   // if error
   let errors;
   if (error || pwdError) {
      errors = (<div className='text-danger text-center'>{error.message}</div>)
   }

   // sending email
   let send;
   if (sending) {
      send = <p>Sending...</p>;
   }

   // user login handler
   const loginHandler = async (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      signInWithEmailAndPassword(email, password);
   }

   const resetPasswordHandler = async () => {
      if (email) {
         await sendPasswordResetEmail(email);
         toast("Email send");
      } else {
         toast('Please enter your email address');
      }
   }

   return (
      <section className='login__section'>
         <div className="container">

            <div className="row py-5">
               <div className="col-lg-6 login_image">

               </div>
               <div className="col-lg-6 login_form text-center card_main">
                  <h2 className='section_title my-3'>Login to <span>EC-House</span></h2>
                  <form className='row g-3 py-5' onSubmit={loginHandler}>
                     <div className="col-lg-7 mx-auto">
                        <div className="form-floating mb-3">
                           <input type="email" className="form-control" id="floatingInput" name='email' onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
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
                        {errors || send}
                     </div>
                     <div className="col-lg-7 mx-auto text-center">
                        <button type='submit' className='btn btn-primary'>
                           {loading ? <><SpinnerBtn></SpinnerBtn> Logging...</> : "Login"}
                        </button>
                     </div>
                  </form>

                  <div className="login_bottom">
                     <p>Don't have a account ? <Link to={'/register'}>Sign Up</Link> </p>
                     <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPasswordHandler}>Reset Password</button> <br /> Or </p>
                     <Social></Social>
                     <ToastContainer></ToastContainer>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Login;