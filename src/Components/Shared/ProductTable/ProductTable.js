import { faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Spinner from '../Spinner';
import './ProductTable.css'

const ProductTable = ({ product, deleteProductHandle, viewProductHandle }) => {
   let serial = 0;

   return (
      <>
         {
            product.length !== 0 ? <><h6>
               {
                  product.length <= 0 ? "No product Found" : product.length === 1 ? "Total " + product.length + " Product available" : "Total " + product.length + " Products available"
               }
            </h6>
               <br />
               <div className="table-responsive product_table">
                  <table className="table table-light table-bordered table-striped">
                     <thead>
                        <tr>
                           <th scope="col">Serial</th>
                           <th scope="col">Name</th>
                           <th scope="col">Brand</th>
                           <th scope="col">Category</th>
                           <th scope="col">Price</th>
                           <th scope="col">Quantity</th>
                           <th scope="col">Sold</th>
                           <th scope="col">user</th>
                           <th scope="col">Supplier Name</th>
                           <th scope="col">Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                           product.length > 0 ? product.map(items => {
                              const { _id, name, price, brand, category, quantity, stock, sup_name, userEmail } = items;

                              return (
                                 <tr key={_id}>
                                    <th scope="row">{++serial}</th>
                                    <td>{name.length >= 40 ? name.slice(0, 40) + "..." : name}</td>
                                    <td>{brand}</td>
                                    <td>{category}</td>
                                    <td>${price}</td>
                                    <td>{quantity}</td>
                                    <td>{stock}</td>
                                    <td>{userEmail}</td>
                                    <td>{sup_name}</td>
                                    <td>
                                       <button title='Delete this product ?' className='btn btn-sm' onClick={() => deleteProductHandle(_id)}>
                                          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                       </button>
                                       <button title='View Details' className='btn btn-sm' onClick={() => viewProductHandle(_id)}>
                                          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                                       </button>
                                    </td>
                                 </tr>
                              )
                           }) : <tr><th>No items available</th></tr>
                        }
                     </tbody>
                  </table>
               </div></> : <Spinner></Spinner>
         }
      </>
   );
};

export default ProductTable;