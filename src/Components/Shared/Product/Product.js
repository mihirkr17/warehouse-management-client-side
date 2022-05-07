import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
   const [more, setMore] = useState(null);
   const { _id, name, img, price, quantity, description, stock, sup_name } = product;

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
            <h5>{name.length >= 30 ? name.slice(0, 30) + "..." : name}</h5>
            <div className="product_card_features">
               <div className="row g-2">
                  <i className='col-4'>Price : ${price}</i>
                  <i className='col-4'>Qty : {quantity}</i>
                  <i className='col-4'>Sold : {stock === 'in' ? <span className='badge bg-success'>{stock}</span> : <span className='bg-danger badge'>{stock}</span>}</i>
                  <i className='col-12'>Supplier Name : {sup_name}</i>
               </div>

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
                        <button className='bt9 text-muted' onClick={() => seeMoreHandler(_id)}>{more !== _id ? 'See More' : "See Less"}</button>
                     </div> : ''
                  }
               </div>
            </div>
            <div className="text-center">
               <Link className='mt-3 bt9 bt9_update product_card_update_btn' to={`/inventory/${_id}`}>Update</Link>
            </div>
         </article>
      </div>
   );
};

export default Product;