import React, { useEffect } from 'react';
import './Social.css';
import google from '../../../../Assets/images/logos/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../../../Shared/Spinner';
import SpinnerBtn from '../../../Shared/SpinnerBtn';

const Social = () => {
   // social login google
   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

   const navigate = useNavigate();
   const location = useLocation();

   let from = location.state?.from?.pathname || "/";

   let errMsg;
   if (error) {
      errMsg = <div><p className='text-danger'>Error: {error.message}</p></div>;
   };

   useEffect(() => {
      if (user) {
         navigate(from, { replace: true });
      }
   }, [from, navigate, user])

   const socialLoginHandler = async () => {
      await signInWithGoogle();
   }
   return (
      <div className='third_party_auth'>
         <div className="auth_response">
            {errMsg}
         </div>
         <button className='google_btn' onClick={socialLoginHandler} title='Sign in with google'>
            <img src={google} className='me-1' alt="google-logo" />
            {loading ? <><SpinnerBtn></SpinnerBtn> <span className='align-self-center'>Logging...</span></> : <span className='btn_text'>Login With Google</span>}
         </button>
      </div>
   );
};

export default Social;