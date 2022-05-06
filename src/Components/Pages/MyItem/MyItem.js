import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { deleteProductHandler } from '../../Shared/ManageProduct/ManageProduct';
import ProductTable from '../../Shared/ProductTable/ProductTable';

const MyItem = () => {
   document.title = "My Inventory Items";
   const [user] = useAuthState(auth);
   const [msg, setMsg] = useState('');
   const [product, setProduct] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
      const url = `http://localhost:5000/my-inventory?email=${user.email}`;

      const myItems = async () => {
         const response = await fetch(url, {
            headers: {
               'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
         })
         if (response.status === 403 || response.status === 401) {
            signOut(auth);
            navigate('/login');
         } else {
            const data = await response.json();
            setProduct(data);
         }
      }
      myItems();
   }, [navigate, user.email, product]);

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