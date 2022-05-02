import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { deleteProductHandler } from '../../Shared/ManageProduct/ManageProduct';
import ProductTable from '../../Shared/ProductTable/ProductTable';

const MyItem = () => {
   const [user] = useAuthState(auth);
   const [msg, setMsg] = useState('');
   const [product, setProduct] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
      const url = `http://localhost:5000/my-product/${user.email}`;
      fetch(url)
         .then(res => res.json())
         .then(data => setProduct(data));
   }, [user.email, product]);



   const deleteProductHandle = async (id) => {
      const mm = await deleteProductHandler(id);
      setMsg(mm);
   }

   const viewProductHandle = (id) => {
      navigate('/inventory/' + id);
   }

   useEffect(() => {
      setTimeout(() => {
         setMsg('');
      }, 5000);
   }, [msg]);

   return (
      <div className='my_item__section' style={{ minHeight: "90vh" }}>
         <h2 className="section_title">My All <span>Products</span></h2>
         <div className="container py-5">
            <h6>
               {
                  product.length <= 0 ? "No product Found" : product.length === 1 ? "Total " + product.length + " Product available" : "Total " + product.length + " Products available"
               }
            </h6>
            <br />
            {msg}
            <ProductTable
               viewProductHandle={viewProductHandle}
               deleteProductHandle={deleteProductHandle}
               product={product}>
            </ProductTable>
         </div>
      </div>
   );
};

export default MyItem;