import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
   const [more, setMore] = useState(null);
   const { _id, name, brand, img, price, quantity, description, stock, sup_name, category } = product;

   const seeMoreHandler = (id) => {
      if (more === id) {
         setMore(null);
      } else {
         setMore(id);
      }
   }
   return (
      <div className="product_card card_main my-3">
         <div className="product_card_img">
            <img src={img} alt="" />
         </div>
         <article className="product_card_body">
            <h5>{name.length >= 40 ? name.slice(0, 40) + "..." : name}</h5>
            <div className="product_card_features">
               <strong>Brand : {brand}</strong> <br />
               <strong>Price : ${price}</strong> <br />
               <strong>Quantity : {quantity}</strong> <br />
               <strong>Stock : {stock === 'in' ? <span className='badge bg-success'>{stock}</span> : <span className='bg-danger badge'>{stock}</span>}</strong> <br />
               <strong>Supplier Name : {sup_name}</strong> <br />
               <strong>Category : {category}</strong>
            </div>
            <div className="product_card_description">

               <div className='py-3'>
                  <p>
                     {
                        more !== _id ? description.slice(0, 80) + "..." : description
                     }
                  </p>
                  {
                     description.length >= 80 ? <div className="text-end">
                        <button className='bt9' onClick={() => seeMoreHandler(_id)}>{more !== _id ? 'See More' : "See Less"}</button>
                     </div> : ''
                  }
               </div>
            </div>
            <Link className='mt-3 bt9 bt9_update' to={`/inventory/${_id}`}>Update</Link>
         </article>
      </div>
   );
};

export default Product;