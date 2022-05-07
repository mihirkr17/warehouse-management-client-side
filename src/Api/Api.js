// delete single product
export const deleteSingleProductHandler = async (productId) => {
   const confirmDelete = window.confirm("Are you want to delete this item ?");
   let msg;
   if (confirmDelete) {
      const response = await fetch(`https://frozen-sea-42906.herokuapp.com/product/${productId}`, {
         method: "DELETE"
      });

      const data = await response.json();

      if (data.deletedCount === 1) {
         msg = <p className='text-success py-4 text-center'>Item successfully removed</p>;
      }
   }
   return msg;
}

// update quantity of product
export const productQuantityUpdater = async (productId, quantity) => {
   const url = `https://frozen-sea-42906.herokuapp.com/product?productId=${productId}`;
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

// single product information
export const fetchSingleProductInfo = async (productId) => {
   const url = `https://frozen-sea-42906.herokuapp.com/product?productId=${productId}`;
   const response = await fetch(url);
   const data = await response.json();
   return data;
}

// fetch all product
export const fetchAllProduct = async () => {
   const response = await fetch('https://frozen-sea-42906.herokuapp.com/inventory');
   const data = await response.json();
   return data;
}

// insert product into database
export const insertProduct = async (inputValue) => {
   const response = await fetch('https://frozen-sea-42906.herokuapp.com/inventory', {
      method: "POST",
      headers: {
         'content-type': 'application/json'
      },
      body: JSON.stringify(inputValue)
   });

   const data = await response.json();
   return data;
}

// fetch all blog data from database
export const fetchAllBlogData = async () => {
   const response = await fetch('https://frozen-sea-42906.herokuapp.com/blog');
   const data = await response.json();
   return data;
}

// fetch user specific product in my-items page
export const fetchMyItems = async (userEmail, token) => {
   let result;
   const url = `https://frozen-sea-42906.herokuapp.com/my-inventory?email=${userEmail}`;
   const response = await fetch(url, {
      headers: {
         'authorization': `Bearer ${token}`
      }
   })
   if (response.status === 403 || response.status === 401) {
      result = "failed";
   } else {
      result = await response.json();
   }
   return result;
}