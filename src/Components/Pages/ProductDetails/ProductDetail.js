import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
   const [product, setProduct] = useState({});
   document.title = "EC-House-" + product.name;
   const [disable, setDisable] = useState(false);
   const [msg, setMsg] = useState('');
   const { productId } = useParams();
   const navigate = useNavigate();

   useEffect(() => {
      fetch(`http://localhost:5000/inventory/${productId}`)
         .then(res => res.json())
         .then(data => setProduct(data));
   }, [productId, product]);

   useEffect(() => {
      if (parseInt(product.quantity) === 0) {
         setDisable(true);
      } else {
         setDisable(false);
      }
   }, [product.quantity]);

   // Quantity handler 
   const quantityUpdater = async (quantity) => {
      const url = `http://localhost:5000/inventory/${productId}`;
      const response = await fetch(url, {
         method: "PUT",
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(quantity)
      });

      const data = await response.json();
      return data;
   }

   // Delivering product  
   const deliverProductHandler = async () => {
      let quantity = parseInt(product.quantity);
      if (quantity > 0) {
         quantity -= 1;
         const data = await quantityUpdater({ quantity });
         setProduct(data);
         setMsg(<p className='text-success text-center py-3'>Product delivered successfully</p>);
      } else {
         setMsg(<p className='text-danger text-center py-3'>Product out of stock. So you aren't able to deliver this product</p>);
      }
   }

   // Restock product
   const stockProductHandler = async (e) => {
      e.preventDefault();
      let quantityValue = e.target.numbers.value;
      let quantity = parseInt(product.quantity) + parseInt(quantityValue);

      if (quantityValue === '') {
         setMsg(<p className='text-danger text-center py-3'>Please write some value</p>);
      } else if (quantityValue < 0) {
         setMsg(<p className='text-danger text-center py-3'>Invalid input value! Must be greater than 1</p>);
      } else {
         const data = await quantityUpdater({ quantity });
         setProduct(data);
         e.target.reset();
         setMsg(<p className='text-success text-center py-3'>successfully updated product quantity</p>);
      }
   }

   const goHome = () => {
      navigate('/');
   }

   useEffect(() => {
      setTimeout(() => {
         setMsg('');
      }, 5000)
   }, [msg]);

   return (
      <section className='product_details__section'>
         <div className="container">
            <div className="sp_card">
               <div className="card_main row">
                  <div className="sp_card_img col-lg-4 col-sm-12">
                     <img src={product.img} className="card-img-top" alt="..." />
                  </div>
                  <div className="sp_card_body col-lg-8 col-sm-12">
                     <h5 className="card-title py-3">{product.name}</h5>

                     <div className="sp_card_features">
                        <strong>Product Id : {product._id}</strong> <br />
                        <strong>Brand : {product.brand}</strong> <br />
                        <strong>Category : {product.category}</strong> <br />
                        <strong>Price : ${product.price}</strong> <br />
                        <strong>Quantity : {product.quantity}</strong> <br />
                        <strong>Supplier Name : {product.sup_name}</strong> <br />
                        <strong>Stock : {product.stock === 'in' ? <span className='badge bg-success'>{product.stock}</span> : <span className='bg-danger badge'>{product.stock}</span>}</strong> <br />
                     </div>

                     <article className="sp_card_description card-text py-3"><strong>Description</strong> : <br />
                        <p className='px-3 py-2'>{product.description}</p>
                     </article>
                     <div className="sp_card_btn">
                        <button disabled={disable === true ? true : false} onClick={deliverProductHandler} className="card-link bt9 bt9_edit">{disable === true ? "Stock Out" : "Delivered"}</button>
                        <button className='bt9 bt9_close ms-4' onClick={goHome}><FontAwesomeIcon icon={faClose}></FontAwesomeIcon></button>
                     </div>
                  </div>
               </div>
            </div>
            {msg}
            <div className="col-lg-6 col-sm-12 col-md-8 px-5 mx-auto sp_form">
               <form action="" className='mt-3 py-5 text-center' onSubmit={stockProductHandler}>
                  <h5>Restock Product</h5>
                  <div className="row">
                     <div className="col-12 d-flex">
                        <input type="number" name="numbers" className='w-75 form-control form-control-sm' id="numbers" />
                        <button type='submit' className='w-25 ms-2 bt9 bt9_edit'>Re-stock</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
};

export default ProductDetail;