import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAction, useFetch, useMessage } from '../../../Hooks/Hooks';
import ProductTable from '../../Shared/ProductTable/ProductTable';

const MyItem = () => {
   document.title = "My Inventory Items";
   const [user] = useAuthState(auth);
   const navigate = useNavigate();
   const [isLoad, setIsLoad] = useState(false);
   const { msg, setMessage } = useMessage();
   const { setAction } = useAction();

   const accessToken = localStorage.getItem('accessToken');
   const { fetchData, fetchLoading } = useFetch(`https://frozen-sea-42906.herokuapp.com/my-inventory?email=${user.email}`, isLoad, accessToken);

   // deleting single product 
   const deleteProductHandle = async (productId) => {
      const confirmDelete = window.confirm("Are you want to delete this item ?");
      if (confirmDelete) {
         const deleteMsg = await setAction(`https://frozen-sea-42906.herokuapp.com/product/${productId}`, "DELETE");
         setIsLoad(load => !load);
         if (deleteMsg.deletedCount === 1) {
            setMessage(<p className='text-success py-4 text-center'>Item successfully removed</p>);
         }
      }
   }

   const viewProductHandle = (id) => {
      navigate('/inventory/' + id);
   }

   return (
      <section className='my_item__section' style={{ minHeight: "90vh" }}>
         <h2 className="section_title">My All <span>Products</span></h2>
         <div className="container py-5">
            {msg}
            <ProductTable
               viewProductHandle={viewProductHandle}
               deleteProductHandle={deleteProductHandle}
               product={fetchData}
               fetchLoad={fetchLoading}>
            </ProductTable>
         </div>
      </section>
   );
};

export default MyItem;