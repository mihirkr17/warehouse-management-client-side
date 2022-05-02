import React from 'react';

const Spinner = () => {
   const spinnerStyle = {
      padding: "1rem 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
   }
   return (
      <div className="spinner_container" style={spinnerStyle}>
         <div className="spinner-grow" style={{ width: "3rem", height: "3rem" }} role="status">
            <span className="visually-hidden">Loading...</span>
         </div>
      </div>
   );
};

export default Spinner;