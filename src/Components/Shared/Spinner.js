import React from 'react';

const Spinner = () => {
   const spinnerStyle = {
      padding: "1rem 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100%",
      flexDirection: "column"
   }

   const spanStyle = {
      fontSize: '0.9rem',
      marginTop: "1rem"
   }
   return (
      <div className="spinner_container" style={spinnerStyle}>
         <div className="spinner-grow" style={{ width: "2rem", height: "2rem" }} role="status">
            <span className="visually-hidden">Loading...</span>
         </div>
         <span style={spanStyle}>Loading..</span>
      </div>
   );
};

export default Spinner;