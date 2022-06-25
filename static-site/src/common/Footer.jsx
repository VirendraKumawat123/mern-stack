import React from "react";
// import Logo from '../Public/Images/ShopNow.png'
import { Link } from "react-router-dom";

const Footer = ()=>{
    const paddingforallul={
        PaddingLeft:"0px;"
    };
    return (<>
    

<footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul className="paddingforallul" >
  	 				<li><Link to="#">about us</Link></li>
  	 				<li><Link to="#">our services</Link></li>
  	 				<li><Link to="#">privacy policy</Link></li>
  	 				<li><Link to="#">affiliate program</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul className="paddingforallul">
  	 				<li><Link to="#">FAQ</Link></li>
  	 				<li><Link to="#">shipping</Link></li>
  	 				<li><Link to="#">returns</Link></li>
  	 				<li><Link to="#">order status</Link></li>
  	 				<li><Link to="#">payment options</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul className="paddingforallul">
  	 				<li><Link to="#">watch</Link></li>
  	 				<li><Link to="#">bag</Link></li>
  	 				<li><Link to="#">shoes</Link></li>
  	 				<li><Link to="#">dress</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
                
                <div class="social-menu">
                    <ul>
                        <li><a href="https://github.com/sanketbodke" target="blank"><i class="fa fa-github"></i></a></li>
                        <li><a href="https://www.instagram.com/imsanketbodke/" target="blank"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/sanket-bodake-995b5b205/" target="blank"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="https://codepen.io/sanketbodke"><i class="fa fa-codepen" target="blank"></i></a></li>
                    </ul>
                </div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

    </>);    


}


export default Footer;