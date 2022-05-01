import React from 'react';
import { useParams } from 'react-router-dom';

const MyItem = () => {
   const {uid} = useParams();
   return (
      <div>
         {uid}
      </div>
   );
};

export default MyItem;