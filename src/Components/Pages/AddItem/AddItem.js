import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddItem = () => {
   const [user] = useAuthState(auth);
   const [msg, setMsg] = useState('');

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
      const sup_name = user.displayName;
      const sup_email = user.email;

      if (quantity < 0) {
         setMsg(<p className='text-danger text-center py-3'>Product quantity value wrong</p>);
         return;
      } else {
         if (quantity === 0) {
            stock = 'out';
         } else {
            stock = 'in';
         }
      }

      const allData = { name, img, price, brand, quantity, description, sup_name, sup_email, stock };

      const response = await fetch('http://localhost:5000/product', {
         method: "POST",
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(allData)
      });

      const data = await response.json();

      if (data.insertedId) {
         e.target.reset();
         setMsg(<p className='text-success text-center py-3'>Your product added successfully</p>);
      }
   }

   useEffect(() => {
      setTimeout(() => {
         setMsg('');
      }, 5000);
   }, [msg]);

   return (
      <section className='add_item__section py-4' style={{ minHeight: "90vh" }}>
         <h2 className='section_title'>Add <span>product</span></h2>
         <div className="container">
            <div className="col-lg-6 mx-auto">
               {msg}
               <form className="row g-3 mt-4" onSubmit={addProductHandler}>
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
                     </select>
                  </div>
                  <div className="col-md-2">
                     <label htmlFor="productQuantity" className="form-label">Quantity</label>
                     <input type="number" className="form-control" id="productQuantity" />
                  </div>

                  <div className="mb-3 col-12">
                     <label htmlFor="productDescription" className="form-label">Product Description</label>
                     <textarea className="form-control" name='productDescription' id="productDescription" rows="3" placeholder='Description about product'></textarea>
                  </div>
                  <div className="col-12">
                     <button type="submit" className="btn btn-primary">Add</button>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
};

export default AddItem;