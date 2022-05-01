import React from 'react';
import Banner from './Banner/Banner';
import Brands from './Brands/Brands';
import './Home.css';
import Inventories from './Inventories/Inventories';

const Home = () => {
   return (
      <section className='home__section py-3'>
         <Banner></Banner>
         <div className="container">
            <Inventories></Inventories>
            <Brands></Brands>
         </div>
      </section>
   );
};

export default Home;