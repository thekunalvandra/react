import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home';
import About from './about';
import Layout from './layout';
import Emp from './emp';
import Empdetail from './empdetail';
import Empadd from './addemp';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path='/employees' element={<Emp/>}></Route>
      <Route path='/employees/:id' element={<Empdetail/>}></Route>
      <Route path="/employees/add" element={<Empadd/>}></Route>
      <Route path="/employees/edit/:id" element={<Empadd/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Route>
    </Routes>
  </BrowserRouter>
  </>
);