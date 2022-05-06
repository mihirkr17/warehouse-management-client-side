import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { insertProduct } from '../../../Api/Api';
import auth from '../../../firebase.init';

import SpinnerBtn from '../../Shared/SpinnerBtn';

const AddItem = () => {
   document.title = "Add Item To Inventory";
   const [user] = useAuthState(auth);
   const [msg, setMsg] = useState('');
   const [loading, setLoading] = useState(false);

   // add product handler form
   const addProductHandler = async (e) => {
      e.preventDefault();
      let stock;

      const name = e.target.productName.value;
      const img = e.target.productImg.value;
      const price = parseInt(e.target.productPrice.value);
      const brand = e.target.productBrand.value;
      const quantity = parseInt(e.target.productQuantity.value);
      const description = e.target.productDescription.value;
      const sup_name = e.target.productSupplier.value;
      const userEmail = user.email;
      const category = e.target.productCategory.value;

      if ((name === '') || (img === '') || (price === '') || (brand === '') || (quantity === '') || (description === '') || (category === '')) {
         setMsg(<p className='text-danger text-center py-3'>Please fill all input field!</p>);
         setLoading(false);
      } else {
         setLoading(true);
         if (quantity < 0) {
            setMsg(<p className='text-danger text-center py-3'>Product quantity value wrong</p>);
            return;
         } else {
            stock = quantity === 0 ? 'out' : 'in';
         }
         const allData = { name, img, price, quantity, brand, category, description, sup_name, userEmail, stock };
         const data = await insertProduct(allData);

         if (data.insertedId) {
            setLoading(false);
            e.target.reset();
            setMsg(<p className='text-success text-center py-3'>Your product added successfully</p>);
         }
      }
   }

   // message hiding after 5 second
   useEffect(() => {
      setTimeout(() => {
         setMsg('');
      }, 5000);
   }, [msg]);

   return (
      <section className='add_item__section py-4' style={{ minHeight: "90vh" }}>

         <div className="container">
            <div className="col-lg-6 mx-auto card_main">
               <h2 className='section_title'>Add <span>product</span></h2>
               <form className="row g-3 mt-4" onSubmit={addProductHandler}>
                  {msg}
                  <div className="col-12">
                     <label htmlFor="productName" className="form-label">Product Name</label>
                     <input type="text" name='productName' className="form-control" id="productName" placeholder="Asus Max M1" />
                  </div>
                  <div className="col-12">
                     <label htmlFor="productImg" className="form-label">Product Image Url</label>
                     <input type="text" name='productImg' className="form-control" id="productImg" placeholder="http://..." />
                  </div>
                  <div className="col-md-4">
                     <label htmlFor="productPrice" className="form-label">Price</label>
                     <input type="number" name='productPrice' className="form-control" id="productPrice" />
                  </div>
                  <div className="col-md-2">
                     <label htmlFor="productQuantity" className="form-label">Quantity</label>
                     <input type="number" className="form-control" id="productQuantity" />
                  </div>

                  <div className="col-md-6">
                     <label htmlFor="productBrand" className="form-label">Brand</label>
                     <select id="productBrand" name='productBrand' className="form-select">
                        <option value=''>Choose Brand</option>
                        <option value={'hp'}>hp</option>
                        <option value={'lg'}>lg</option>
                        <option value={'samsung'}>samsung</option>
                        <option value={'toshiba'}>toshiba</option>
                        <option value={'microsoft'}>microsoft</option>
                        <option value={'acer'}>acer</option>
                        <option value={'lenovo'}>lenovo</option>
                        <option value={'apple'}>apple</option>
                        <option value="DJI">DJI</option>
                        <option value="zeiss">zeiss</option>
                        <option value="SureCall">SureCall</option>
                     </select>
                  </div>

                  <div className="col-md-6">
                     <label htmlFor="productCategory" className="form-label">Category</label>
                     <select id="productCategory" name='productCategory' className="form-select">
                        <option value=''>Choose Category</option>
                        <option value={'mobile'}>mobile</option>
                        <option value="tablet">tablet</option>
                        <option value={'laptop'}>laptop</option>
                        <option value={'monitor'}>monitor</option>
                        <option value={'pc-accessories'}>pc-accessories</option>
                        <option value={'mobile-accessories'}>mobile-accessories</option>
                     </select>
                  </div>

                  <div className="col-md-6">
                     <label htmlFor="productSupplier" className="form-label">Product Supplier Name</label>
                     <input type="text" name='productSupplier' className="form-control" id="productSupplier" placeholder="John Doe" />
                  </div>

                  <div className="mb-3 col-12">
                     <label htmlFor="productDescription" className="form-label">Product Description</label>
                     <textarea className="form-control" name='productDescription' id="productDescription" rows="3" placeholder='Description about product'></textarea>
                  </div>
                  <div className="col-12">
                     <button type="submit" className="bt9 bt9_add">
                        {loading === true ? <><SpinnerBtn></SpinnerBtn> Adding...</> : <><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add</>}
                     </button>
                     <button type='reset' className="bt9 bt9_close ms-4">Reset</button>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
};

export default AddItem;