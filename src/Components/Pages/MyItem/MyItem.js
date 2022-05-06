import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { deleteSingleProductHandler, fetchMyItems } from '../../../Api/Api';
import auth from '../../../firebase.init';
import ProductTable from '../../Shared/ProductTable/ProductTable';

const MyItem = () => {
   document.title = "My Inventory Items";
   const [user] = useAuthState(auth);
   const [msg, setMsg] = useState('');
   const [product, setProduct] = useState([]);
   const navigate = useNavigate();

   // fetching only valid email based users items from database 
   useEffect(() => {
      const accessToken = localStorage.getItem('accessToken');
      (async () => {
         const data = await fetchMyItems(user.email, accessToken);

         if (data === "failed") {
            signOut(auth);
            navigate('/login');
         } else {
            setProduct(data);
         }
      })();
   }, [navigate, user.email, product]);

   // delete product from my-items page
   const deleteProductHandle = async (productId) => {
      const deleteMsg = await deleteSingleProductHandler(productId);
      setMsg(deleteMsg);
      const filterProducts = product.filter(item => item._id !== productId);
      setProduct(filterProducts);
   }

   const viewProductHandle = (id) => {
      navigate('/inventory/' + id);
   }

   // hiding message after 5 second
   useEffect(() => {
      setTimeout(() => {
         setMsg('');
      }, 5000);
   }, [msg]);

   return (
      <section className='my_item__section' style={{ minHeight: "90vh" }}>
         <h2 className="section_title">My All <span>Products</span></h2>
         <div className="container py-5">
            {msg}
            <ProductTable
               viewProductHandle={viewProductHandle}
               deleteProductHandle={deleteProductHandle}
               product={product}>
            </ProductTable>
         </div>
      </section>
   );
};

export default MyItem;