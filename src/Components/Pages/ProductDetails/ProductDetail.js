import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAction, useFetch, useMessage } from '../../../Hooks/Hooks';
import SpinnerBtn from '../../Shared/SpinnerBtn';
import Spinner from '../../Shared/Spinner';
import './ProductDetail.css';


const ProductDetail = () => {
   const { productId } = useParams();
   const [isLoad, setIsLoad] = useState(false);

   const url = `https://frozen-sea-42906.herokuapp.com/product?productId=${productId}`;
   const { fetchData, fetchLoading } = useFetch(url, isLoad);
   document.title = "EC-House-" + fetchData ? fetchData.name : '';

   const [disable, setDisable] = useState(false);
   const [stockBtnLoad, setStockBtnLoad] = useState(false);
   const [deliverBtnLoad, setDeliverBtnLoad] = useState(false);
   const { msg, setMessage } = useMessage();
   const navigate = useNavigate();
   const { setAction } = useAction()

   // if product quantity out of stock then delivered button will disabled
   useEffect(() => {
      if (parseInt(fetchData.quantity) === 0) {
         setDisable(true);
      } else {
         setDisable(false);
      }
   }, [fetchData.quantity]);

   // Delivering product  
   const deliverProductHandler = async () => {
      setDeliverBtnLoad(true);
      let quantity = parseInt(fetchData.quantity);
      if (quantity > 0) {
         quantity -= 1;
         const data = await setAction(`https://frozen-sea-42906.herokuapp.com/product?productId=${productId}`, "PUT", JSON.stringify({ quantity }), 'application/json');
         if (data) {
            setIsLoad(load => !load);
            setDeliverBtnLoad(false);
            setMessage(<p className='text-success text-center py-3'>Product delivered successfully</p>);
         }
      } else {
         setMessage(<p className='text-danger text-center py-3'>Product out of stock. So you aren't able to deliver this product</p>);
      }
   }

   // Restock product
   const stockProductHandler = async (e) => {
      e.preventDefault();
      setStockBtnLoad(true);
      let quantityValue = e.target.numbers.value;
      let quantity = parseInt(fetchData.quantity) + parseInt(quantityValue);

      if (quantityValue === '') {
         setMessage(<p className='text-danger text-center py-3'>Please write some value</p>);
      } else if (quantityValue < 0) {
         setMessage(<p className='text-danger text-center py-3'>Invalid input value! Must be greater than 1</p>);
      } else {
         const data = await setAction(`https://frozen-sea-42906.herokuapp.com/product?productId=${productId}`, "PUT", JSON.stringify({ quantity }), 'application/json');
         if (data) {
            setIsLoad(load => !load);
            setStockBtnLoad(false);
            e.target.reset();
            setMessage(<p className='text-success text-center py-3'>successfully updated product quantity</p>);
         }
      }
   }

   // go to home btn
   const goHome = () => {
      navigate('/');
   }

   return (
      <section className='product_details__section'>
         {
            fetchLoading ? <Spinner></Spinner> :
               <div className="container">
                  <div className="sp_card pt-5">
                     <div className="card_main row">
                        <div className="sp_card_img col-lg-4 col-sm-12">
                           <img src={fetchData.img} className="card-img-top" alt="..." />
                        </div>
                        <div className="sp_card_body col-lg-8 col-sm-12">
                           <h5 className="card-title py-3">{fetchData.name}</h5>

                           <div className="sp_card_features">
                              <strong>Product Id : {fetchData._id}</strong> <br />
                              <strong>Brand : {fetchData.brand}</strong> <br />
                              <strong>Category : {fetchData.category}</strong> <br />
                              <strong>Price : ${fetchData.price}</strong> <br />
                              <strong>Quantity : {fetchData.quantity}</strong> <br />
                              <strong>Supplier Name : {fetchData.sup_name}</strong> <br />
                              <strong>Sold : {fetchData.stock === 'in' ? <span className='badge bg-success'>{fetchData.stock}</span> : <span className='bg-danger badge'>{fetchData.stock}</span>}</strong> <br />
                           </div>

                           <article className="sp_card_description card-text py-3"><strong>Description</strong> : <br />
                              <p className='px-3 py-2'>{fetchData.description}</p>
                           </article>
                           <div className="sp_card_btn">
                              <button disabled={disable === true ? true : false} onClick={deliverProductHandler} className="card-link bt9 bt9_edit">
                                 {disable === true ? "Sold Out" : deliverBtnLoad === false ? "Delivered" : <>Delivering <SpinnerBtn></SpinnerBtn></>}
                              </button>
                              <button className='bt9 bt9_close ms-4' onClick={goHome}><FontAwesomeIcon icon={faClose}></FontAwesomeIcon></button>
                           </div>
                        </div>
                     </div>
                     {msg}
                  </div>
                  <div className="col-lg-6 col-sm-12 col-md-8 px-5 mx-auto sp_form">
                     <form action="" className='mt-3 py-5 text-center' onSubmit={stockProductHandler}>
                        <h5>Restock Product</h5>
                        <div className="row">
                           <div className="col-12 d-flex">
                              <input type="number" name="numbers" className='w-75 form-control form-control-sm' id="numbers" />
                              <button type='submit' className='w-25 ms-2 bt9 bt9_edit'>{stockBtnLoad === false ? "Re-stock" : <>Stocking.. <SpinnerBtn></SpinnerBtn></>}</button>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
         }
      </section>
   )
};

export default ProductDetail;