import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddItem = () => {
   const [user] = useAuthState(auth);

   return (
      <section className='add_item__section py-4 d-flex align-items-center justify-content-center' style={{ minHeight: "90vh" }}>
         <div className="container">
            <div className="col-lg-6 mx-auto">
               <form className="row g-3">
                  <div className="col-md-6">
                     <label htmlFor="inputEmail4" className="form-label">User Email</label>
                     <input type="email" name='uEmail' defaultValue={user.email} className="form-control" id="inputEmail4" />
                  </div>
                  <div className="col-md-6">
                     <label htmlFor="inputUid" className="form-label">User Id</label>
                     <input type="text" name='uid' defaultValue={user.uid} className="form-control" id="inputUid" />
                  </div>
                  <div className="col-12">
                     <label htmlFor="productName" className="form-label">Product Name</label>
                     <input type="text" name='productName' className="form-control" id="productName" placeholder="Asus Max M1" />
                  </div>
                  <div className="col-12">
                     <label htmlFor="productBrand" className="form-label">Product Brand</label>
                     <input type="text" name='productBrand' className="form-control" id="productBrand" placeholder="Asus, Samsung, Acer" />
                  </div>
                  <div className="col-md-6">
                     <label htmlFor="inputCity" className="form-label">City</label>
                     <input type="text" className="form-control" id="inputCity" />
                  </div>
                  <div className="col-md-4">
                     <label htmlFor="inputState" className="form-label">State</label>
                     <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                     </select>
                  </div>
                  <div className="col-md-2">
                     <label htmlFor="inputZip" className="form-label">Zip</label>
                     <input type="text" className="form-control" id="inputZip" />
                  </div>
                  <div className="col-12">
                     <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                           Check me out
                        </label>
                     </div>
                  </div>
                  <div className="col-12">
                     <button type="submit" className="btn btn-primary">Sign in</button>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
};

export default AddItem;