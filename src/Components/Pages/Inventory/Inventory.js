import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import WarningMsg from '../../Shared/Warning/WarningMsg';
import './Inventory.css';


const Inventory = () => {
   const [product, setProduct] = useState({});
   const [msg, setMsg] = useState('');
   const { productId } = useParams();

   useEffect(() => {
      fetch(`http://localhost:5000/product/${productId}`)
         .then(res => res.json())
         .then(data => setProduct(data));
   }, [productId, product]);

   // Quantity handler 
   const quantityUpdater = async (quantity) => {
      const url = `http://localhost:5000/product/${productId}`;
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
      let productQuantity = parseInt(product.quantity);
      let stock;
      if (productQuantity > 0) {
         productQuantity -= 1;

         if (productQuantity === 0) {
            stock = 'out';
         } else {
            stock = 'in';
         }

         let newQuantity = {
            quantity: productQuantity,
            stock: stock
         }
         const data = await quantityUpdater(newQuantity);
         setProduct(data);
         setMsg("Product delivered successfully");
      } else {
         setMsg("Product out of stock. So you aren't able to deliver this product");
      }
   }

   // Restock product
   const stockProductHandler = async (e) => {
      e.preventDefault();

      let quantityValue = e.target.numbers.value;
      let quantity = parseInt(product.quantity) + parseInt(quantityValue);

      if (quantityValue === '') {
         setMsg('Please write some value');
      } else if (quantityValue < 0) {
         setMsg('Invalid input value! Must be greater than 1');
      } else {
         let newQuantity = {
            quantity: quantity,
            stock: 'in'
         }
         const data = await quantityUpdater(newQuantity);
         setProduct(data);
         e.target.reset();
         setMsg("successfully added product");
      }
   }

   useEffect(() => {
      setTimeout(() => {
         setMsg('');
      }, 5000)
   }, [msg]);

   return (
      <section className='inventory__section'>
         <WarningMsg msg={msg} />
         <div className="sp_card row">
            <div className="sp_card_img col-lg-4 col-sm-12">
               <img src="..." className="card-img-top" alt="..." />
            </div>
            <div className="sp_card_body col-lg-8 col-sm-12">
               <h5 className="card-title">{product.name}</h5>
               <strong>Product Id : {product._id}</strong> <br />
               <strong>Brand : {product.brand}</strong> <br />
               <strong>Price : {product.price}</strong> <br />
               <strong>Quantity : {product.quantity}</strong> <br />
               <strong>Supplier Name : {product.sup_name}</strong> <br />
               <strong>Stock : {product.stock === 'in' ? <span className='badge bg-success'>{product.stock}</span> : <span className='bg-danger badge'>{product.stock}</span>}</strong> <br />

               <article className="card-text py-3"><strong>Description</strong> : <br />
                  <p className='px-3 py-2'>{product.description}</p>
               </article>
               <div className="sp_card_btn">
                  <button onClick={deliverProductHandler} className="card-link btn btn-sm btn-primary">Delivered</button>
                  <Link className='btn btn-sm btn-danger ms-4' to={'/'}>Go Back</Link>
               </div>
            </div>
         </div>

         <form action="" className='mt-3 py-4 text-center' onSubmit={stockProductHandler}>
            <h5>Restock Product</h5>
            <input type="number" name="numbers" className='form-control form-control-sm' id="numbers" />
            <button type='submit' className='btn btn-sm btn-primary mt-2'>Re-stock</button>
         </form>
      </section>
   );
};

export default Inventory;