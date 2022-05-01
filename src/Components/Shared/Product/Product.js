import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
   const { _id, name, price, quantity, description, stock, sup_name } = product;
   return (
      <div className="product_card my-3">
         <img src="" alt="" />
         <article className="product_card_body">
            <h5>{name}</h5>
            <strong>Price : ${price}</strong> <br />
            <strong>Quantity : {quantity}</strong> <br />
            <strong>Stock : {stock === 'in' ? <span className='badge bg-success'>{stock}</span> : <span className='bg-danger badge'>{stock}</span>}</strong> <br />
            <strong>Supplier Name : {sup_name}</strong>
            <p>
               {description}
            </p>
            <Link to={`/inventory/${_id}`}>Update</Link>
         </article>
      </div>
   );
};

export default Product;