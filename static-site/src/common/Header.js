import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../Public/Images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () =>{
    const a = useSelector(store => store.cartReducer.val)

    return(
    <>
        <header className="p-3 bg-white text-white">
            <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <NavLink to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <img style={{width: "150px"}} src={logo} alt="logo" />
                </NavLink>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><NavLink to="/" className="nav-a px-2 text-white">Home</NavLink></li>
                <li><NavLink to="/about" className="nav-a px-2 text-white">About</NavLink></li>
                <li><NavLink to="/products" className="nav-a px-2 text-white">Products</NavLink></li>
                <li><NavLink to="/pricing" className="nav-a px-2 text-white">Pricing</NavLink></li>
                <li><NavLink to="/contact" className="nav-a px-2 text-white">Contact</NavLink></li>
                </ul>


                <div className="text-end">
                    
                <NavLink to="/cart"><button type="button" className="btn btn-outline-light me-2 position-relative">
                    Cart
                    <span class="bage-cart">{a}</span>
                </button></NavLink>
                <NavLink to="/signin"><button type="button" className="btn btn-outline-light me-2">Login</button></NavLink>
                {/* <NavLink to="/signup"><button type="button" className="btn btn-warning">Sign-up</button></NavLink>  */}
                </div>
            </div>
            </div>
        </header>
    </>
)
}

export default Header;