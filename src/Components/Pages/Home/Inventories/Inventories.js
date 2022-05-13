import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../../../../Hooks/Hooks';
import Product from '../../../Shared/Product/Product';
import Spinner from '../../../Shared/Spinner';
import './Inventories.css';

const Inventories = () => {
   const url = 'https://frozen-sea-42906.herokuapp.com/inventory';
   const { fetchData, fetchLoading } = useFetch(url);

   return (
      <section className='inventories__section section_style'>
         <h2 className='section_title'>Our Inventory <span>Products</span></h2>

         <div className="row my-5 ">
            {
               fetchLoading ? <Spinner></Spinner> : fetchData.length > 0 ? fetchData.map((items) => {
                  return (
                     <div className="col-lg-4 px-5 col-md-6" key={items._id}>
                        <Product product={items}></Product>
                     </div>
                  )
               }).reverse().slice(0, 6) : ''
            }
         </div>

         <div className="text-end">
            <Link className='manage_inventory_btn bt9 bt9_primary' to={'/inventory'}>
               Manage All Inventories
               <FontAwesomeIcon className='ms-3' icon={faArrowRight}></FontAwesomeIcon>
            </Link>
         </div>
      </section>
   );
};

export default Inventories;