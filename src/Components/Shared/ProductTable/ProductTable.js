import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProductTable = ({ product }) => {
   let serial = 0;

   const deleteItem = async(id) => {
      const response = await fetch('');
   }


   return (
      <div className="table-responsive">
         <table className="table table-dark table-striped">
            <thead>
               <tr>
                  <th scope="col">Serial</th>
                  <th scope="col">Name</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Supplier Name</th>
                  <th scope="col">Action</th>
               </tr>
            </thead>
            <tbody>
               {
                  product ? product.map(items => {
                     const { _id, name, img, price, brand, quantity, description, sup_name, sup_email, stock } = items;

                     return (
                        <tr key={_id}>
                           <th scope="row">{serial += 1}</th>
                           <td>{name}</td>
                           <td>{brand}</td>
                           <td>{quantity}</td>
                           <td>{sup_name}</td>
                           <td><button className='btn btn-sm' onClick={() => deleteItem(_id)}><FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon></button></td>
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