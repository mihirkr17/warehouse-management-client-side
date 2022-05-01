import React from 'react';

const WarningMsg = ({ msg }) => {
   
   return (
      <>
      <p className='alert text-danger'>
         {msg}
      </p>
      </>
   )
};

export default WarningMsg;