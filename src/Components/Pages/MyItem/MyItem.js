import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import ProductTable from '../../Shared/ProductTable/ProductTable';

const MyItem = () => {
   const [user] = useAuthState(auth);
   const [product, setProduct] = useState([]);

   useEffect(() => {
      const url = `http://localhost:5000/my-product/${user.email}`;
      fetch(url)
         .then(res => res.json())
         .then(data => setProduct(data));
   }, [user.email]);

   return (
      <div className='my_item__section' style={{ minHeight: "90vh" }}>
         <h2 className="section_title">My All <span>Products</span></h2>
         <div className="container py-5">
            <h6>
               {
                  product.length <= 0 ? "No product Found" : product.length === 1 ? "Total " + product.length + " Product available" : "Total " + product.length + " Products available"
               }
            </h6>
            <ProductTable product={product}></ProductTable>
         </div>
      </div>
   );
};

export default MyItem;