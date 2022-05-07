import React from 'react';
import './NotFound.css';

const NotFound = () => {
   return (
      <section className='notfound__section'>
         <h1>Ooops 404</h1>
         <p>Page not found</p>
         <p>Look like your are trying to wrong url!</p>
      </section>
   );
};

export default NotFound;