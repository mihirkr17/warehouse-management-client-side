import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const NavigationBar = () => {
   const [user] = useAuthState(auth);
   const logoutHandler = () => {
      signOut(auth);
   }
   return (
      <header>
         <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
            <div className="container">
               <NavLink className="navbar-brand" to="/">EC-House</NavLink>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
                     </li>
                  </ul>
                  <ul className="navbar-nav mb-2 mb-lg-0">
                     {
                        !user ? <li className="nav-item">
                           <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
                        </li>
                           :
                           <>
                              <li className="nav-item">
                                 <NavLink className='nav-link' to={'/inventory'}>Manage Items</NavLink>
                              </li>
                              <li className="nav-item">
                                 <NavLink className='nav-link' to={'/add-item'}>Add Item</NavLink>
                              </li>
                              <li className="nav-item">
                                 <NavLink className='nav-link' to={'/my-item'}>My Items</NavLink>
                              </li>
                              <li className="nav-item ms-2">
                                 <button className='btn btn-sm btn-danger' onClick={logoutHandler}>Log Out</button>
                              </li>
                           </>
                     }
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   );
};

export default NavigationBar;