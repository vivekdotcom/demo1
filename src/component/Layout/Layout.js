import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout =()=>{
   const design=(
     <>
       <Header />
       <Outlet />
       <Footer />
     </>
   )
   return design;
}
export default Layout;