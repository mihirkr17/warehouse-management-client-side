import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../../../Shared/Product/Product';
import Spinner from '../../../Shared/Spinner';
import './Inventories.css';

const Inventories = () => {
   const [product, setProduct] = useState([]);
   const [loading, setLoading] = useState(false);
   useEffect(() => {
      setLoading(true);
      fetch('http://localhost:5000/product')
         .then(res => res.json())
         .then(data => {
            setLoading(false);
            setProduct(data)
         });
   }, []);

   const newProduct = product.slice(0, 6);
   return (
      <section className='inventories__section section_style'>
         <h2 className='section_title'>Inventory <span>Products</span></h2>

         <div className="row my-5 ">
            {
               loading === true ? <Spinner></Spinner> : newProduct.map(items => {
                  return (
                     <div className="col-lg-4" key={items._id}>
                        <Product product={items}></Product>
                     </div>
                  )
               })
            }

         </div>

         <div className="text-end">
            <Link className='manage_inventory_btn' to={'/inventory'}>Manage All Inventories <FontAwesomeIcon className='ms-3' icon={faArrowRight}></FontAwesomeIcon> </Link>
         </div>
      </section>
   );
};

export default Inventories;