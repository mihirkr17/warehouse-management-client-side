import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { deleteSingleProductHandler, fetchAllProduct } from '../../../Api/Api';
import ProductTable from '../../Shared/ProductTable/ProductTable';
import './ManageInventory.css';


const ManageInventory = () => {
   document.title = 'Manage Inventory';
   const [product, setProduct] = useState([]);
   const [msg, setMsg] = useState('');
   const navigate = useNavigate();

   // show all product in manage inventory page
   useEffect(() => {
      (async () => {
         const data = await fetchAllProduct();
         if (data) {
            setProduct(data);
         }
      })();
   }, [product]);

   // deleting single product 
   const deleteProductHandle = async (productId) => {
      const deleteMsg = await deleteSingleProductHandler(productId);
      setMsg(deleteMsg);
      const filterProducts = product.filter(item => item._id !== productId);
      setProduct(filterProducts);
   }

   // going to product details info page
   const viewProductHandle = (productId) => {
      navigate('/inventory/' + productId);
   }

   // all message hiding after 5 second
   useEffect(() => {
      setTimeout(() => {
         setMsg('');
      }, 5000);
   }, [msg]);

   return (
      <div className='manage_inventory__section' style={{ minHeight: "90vh" }}>
         <h2 className="section_title">Manage <span>Inventory</span></h2>
         {msg}
         <div className="container py-5">
            <div className="manage_inventory_header">
               <NavLink className='bt9 bt9_add' to={'/add-item'}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add Item</NavLink>
            </div>
            <ProductTable
               viewProductHandle={viewProductHandle}
               deleteProductHandle={deleteProductHandle}
               product={product}>
            </ProductTable>
         </div>
      </div>
   );
};

export default ManageInventory;