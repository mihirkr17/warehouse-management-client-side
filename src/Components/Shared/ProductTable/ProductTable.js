import { faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ProductTable.css'

const ProductTable = ({ product, deleteProductHandle, viewProductHandle }) => {
   let serial = 0;

   return (
      <div className="table-responsive product_table">
         <table className="table table-light table-bordered table-striped">
            <thead>
               <tr>
                  <th scope="col">Serial</th>
                  <th scope="col">Name</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Supplier Name</th>
                  <th scope="col">Action</th>
               </tr>
            </thead>
            <tbody>
               {
                  product ? product.map(items => {
                     const { _id, name, price, brand, quantity, stock, sup_name } = items;

                     return (
                        <tr key={_id}>
                           <th scope="row">{serial += 1}</th>
                           <td>{name}</td>
                           <td>{brand}</td>
                           <td>${price}</td>
                           <td>{quantity}</td>
                           <td>{stock}</td>
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
                  }) : ''
               }

            </tbody>
         </table>
      </div>
   );
};

export default ProductTable;