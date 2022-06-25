import React from "react";
import { Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Products from "./common/Products";
import Product from "./common/product";
import Signin from "./login/Signin";
import Signup from "./login/Signup";
import Cart from "./common/cart";
 
import './Public/css/index.css';
import './Public/css/footer.css';
import './Public/css/home.css'
import './Public/css/contact.css'
import './Public/css/abouts.css'
import './Public/css/product.css'
import './Dashboard/DashPublic/dashboard.css'

const App = ()=>{
return(
    <>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/product/:id" element={<Product/>}/>
          <Route exact path="/signin" element={<Signin/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="" element={<PageNotFound/>}/>
        </Routes>
      <Footer/>
    </>
);
}


export default App;
