import './App.css';
import React from 'react';
import NavigationBar from './Components/Shared/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Blogs from './Components/Pages/Blogs/Blogs';
import NotFound from './Components/Pages/NotFound/NotFound';

function App() {
  return (
    <React.Fragment>
      <NavigationBar></NavigationBar>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
