import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAction, useFetch, useMessage } from '../../../Hooks/Hooks';
import ProductTable from '../../Shared/ProductTable/ProductTable';
import './ManageInventory.css';


const ManageInventory = () => {
   document.title = 'Manage Inventory';
   const navigate = useNavigate();
   const [isLoad, setIsLoad] = useState(false);
   const { fetchData, fetchLoading } = useFetch('https://frozen-sea-42906.herokuapp.com/inventory', isLoad);
   const { msg, setMessage } = useMessage();
   const { setAction } = useAction();

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

   // going to product details info page
   const viewProductHandle = (productId) => {
      navigate('/inventory/' + productId);
   }

   return (
      <div className='manage_inventory__section' style={{ minHeight: "90vh" }}>
         <h2 className="section_title">Manage <span>Inventory</span></h2>
         {msg}
         <div className="container py-5">
            <div className="manage_inventory_header">
               <NavLink className='bt9 bt9_add' to={'/add-item'}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add New Item</NavLink>
            </div>

            <ProductTable
               viewProductHandle={viewProductHandle}
               deleteProductHandle={deleteProductHandle}
               product={fetchData}
               fetchLoad={fetchLoading}>
            </ProductTable>


         </div>
      </div>
   );
};

export default ManageInventory;