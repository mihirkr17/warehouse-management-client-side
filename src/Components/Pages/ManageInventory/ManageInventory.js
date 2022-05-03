import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { deleteProductHandler } from '../../Shared/ManageProduct/ManageProduct';
import ProductTable from '../../Shared/ProductTable/ProductTable';
import './ManageInventory.css';

const ManageInventory = () => {
   const [product, setProduct] = useState([]);
   const [msg, setMsg] = useState('');
   const navigate = useNavigate();

   useEffect(() => {
      fetch('http://localhost:5000/product')
         .then(res => res.json())
         .then(data => setProduct(data));
   }, [product]);

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
      <div className='manage_inventory__section' style={{ minHeight: "90vh" }}>
         <h2 className="section_title">Manage <span>Inventory</span></h2>
         {msg}
         <div className="container py-5">
            <div className="manage_inventory_header">
               <h6>
                  {
                     product.length <= 0 ? "No product Found" : product.length === 1 ? "Total " + product.length + " Product available" : "Total " + product.length + " Products available"
                  }
               </h6>
               <NavLink className='btn btn-primary' to={'/add-item'}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add Item</NavLink>
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