import React from 'react';
import {Outlet,Link} from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

function Layout(){
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
    );
}

export default Layout;