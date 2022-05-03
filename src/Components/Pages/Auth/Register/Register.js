import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import Social from '../Social/Social';
import SpinnerBtn from '../../../Shared/SpinnerBtn';

const Register = () => {
   // navigate
   const navigate = useNavigate();

   // create user with email and password
   const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
   ] = useCreateUserWithEmailAndPassword(auth);

   // updating or setting user profile username
   const [updateProfileData, updateErrMsg] = useUpdateProfile(auth);

   // if register successful then redirect to login page
   if (user) {
      navigate('/login');
   }

   // if something wrong error 
   let err;
   if (error || updateErrMsg) {
      err = (<div className='text-danger text-center'>{error.message}</div>)
   }

   // register form handler
   const registerHandler = async (e) => {
      e.preventDefault();
      const username = e.target.username.value;
      const email = e.target.email.value;
      const password = e.target.password.value;

      await createUserWithEmailAndPassword(email, password);
      await updateProfileData({ displayName: username });
   }

   return (
      <section className='register__section'>
         <div className="container">
            <div className="row py-5">
               <div className="col-lg-7 mx-auto login_form text-center card_main">
                  <h2 className='section_title my-3'>Register to <span>EC-House</span></h2>
                  <form className='row g-3 py-5' onSubmit={registerHandler}>
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

                     <div className="col-lg-7 mx-auto">
                        {err}
                     </div>

                     <div className="col-lg-7 mx-auto text-center">
                        <button type='submit' className='btn btn-primary'>
                           {loading ? <><SpinnerBtn></SpinnerBtn> Registering...</> : "Register"}
                        </button>
                     </div>
                  </form>

                  <div className="register_bottom">
                     <p>Already Logged In ? <Link to={'/login'}>Go To Login</Link> <br /> Or </p>
                     <Social></Social>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Register;