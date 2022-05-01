import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Spinner from '../../../Shared/Spinner';

const AuthReq = ({ children }) => {
   const [user, loading] = useAuthState(auth);
   const location = useLocation();

   if (loading) {
      return (
         <Spinner></Spinner>
      )
   }

   // If user is not set mean not logged in then redirect to login page
   if (!user) {
      return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
   }
   return children;
};

export default AuthReq;