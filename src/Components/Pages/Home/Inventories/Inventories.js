import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Inventories.css';

const Inventories = () => {
   return (
      <section className='inventories__section section_style'>
         <h2 className='section_title'>Inventory <span>Products</span></h2>

         <div className="row my-5 ">
            <div className="col-lg-4">
               <div className="product_card">
                  <img src="" alt="" />
                  <article className="product_card_body">
                     <h5>Asus Laptop</h5>
                     <strong>Price : 200$</strong> <br />
                     <strong>Quantity : 1</strong> <br />
                     <span>Supplier Name : Michele John</span>
                     <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, eaque?
                     </p>
                     <Link to={'/inventory'}>Update</Link>
                  </article>
               </div>
            </div>
         </div>

         <div className="text-end">
            <Link className='manage_inventory_btn' to={'/inventory'}>Manage All Inventories <FontAwesomeIcon className='ms-3' icon={faArrowRight}></FontAwesomeIcon> </Link>
         </div>
      </section>
   );
};

export default Inventories;