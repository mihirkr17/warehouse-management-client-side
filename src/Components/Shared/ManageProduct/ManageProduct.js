export const deleteProductHandler = async (id) => {
   const confirmDelete = window.confirm("Are you want to delete this item ?");
   let msg;
   if (confirmDelete) {
      const response = await fetch(`http://localhost:5000/product/${id}`, {
         method: "DELETE"
      });

      const data = await response.json();

      if (data.deletedCount === 1) {
         msg = <p className='text-success py-4 text-center'>Item successfully removed</p>;
      }
   }
   return msg;
}