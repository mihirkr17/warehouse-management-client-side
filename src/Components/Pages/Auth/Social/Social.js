import React from 'react';
import google from '../../../../Assets/images/logos/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../../../Shared/Spinner';

const Social = () => {
   // social login google
   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

   const navigate = useNavigate();
   const location = useLocation();

   let from = location.state?.from?.pathname || "/";

   let errMsg;
   if (error) {
      errMsg = <div><p>Error: {error.message}</p></div>;
   };

   // Loading when trying to login the site
   let load;
   if (loading) {
      load = <Spinner></Spinner>;
   }

   if (user) {
      navigate(from, { replace: true });
   }

   const socialLoginHandler = async () => {
      await signInWithGoogle();
   }
   return (
      <p>
         {load} <br /> {errMsg} <br />
         <button className='ms-3' onClick={socialLoginHandler} title='Sign in with google'>
            <img src={google} className='me-1' alt="google-logo" />
            oogle
         </button>
      </p>
   );
};

export default Social;