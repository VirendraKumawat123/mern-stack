import React from "react";
import SliderImage from '../Public/Images/SliderImage.jpg';
import fashionmanwomen from '../Public/Images/fashionmanwomen.jpg';
import product1 from '../Public/Images/Products/product-1.jpg';
import product2 from '../Public/Images/Products/product-2.jpg';
import product3 from '../Public/Images/Products/product-3.jpg';
import product4 from '../Public/Images/Products/product-4.jpg';
import collection1 from '../Public/Images/collection/suit-collection.jpg'
import collection2 from '../Public/Images/collection/collection-1.jpg'
import collection3 from '../Public/Images/collection/collection-2.jpg'
import Blog1 from '../Public/Images/Blog/blog-1.jpg'
import Blog2 from '../Public/Images/Blog/blog-2.jpg'
import { Link } from "react-router-dom";

import PageContent from "../common/PageContent";
// const Home = () =>{

//     return(
//         <PageContent name="Home"imgSrc={dog} />
//     )
// }

// export default Home;


const Home =()=>{

    return (<>
            <div id="header-hero">
			<div className="header-bg"> <img src={SliderImage} alt="header-image" /> </div>
			<div className="header-content">
				<p className="heading-1">fashion collection 2017</p>
				<h1>wellcome to brand<span className="logo-style">y</span> unique store</h1>
				<p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				<div className="button">
					<p>shop now</p>
				</div>
			</div>
		</div>



        <section id="summer-collection">
		<div className="container">
			<div className="sc-content">
				<h1>summer collection</h1>
				<p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
					has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
				<Link to="#">discover now</Link> </div>
			<div className="sc-media">
				<div className="sc-media-bg"> <img src={fashionmanwomen} alt="sc-image" /> </div>
			</div>
		</div>
	</section>

    <section id="products">
		<div className="container">
			<div className="products-header">
				<h2>popular products</h2>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
			</div>
			<div className="product product-1">
				<figure> <img src={product1} alt="product-image"/>
					<figcaption>cold fashion</figcaption>
					<figcaption>$ 56.00</figcaption>
				</figure>
			</div>
			<div className="product product-2">
				<figure> <img src={product2} alt="product-image"/>
					<figcaption>women fashion</figcaption>
					<figcaption>$ 84.00</figcaption>
				</figure>
			</div>
			<div className="product product-3">
				<figure> <img src={product3} alt="product-image"/>
					<figcaption>women fashion</figcaption>
					<figcaption>$ 48.00</figcaption>
				</figure>
			</div>
			<div className="product product-4">
				<figure> <img src={product4} alt="product-image"/>
					<figcaption>men fashion</figcaption>
					<figcaption>$ 89.00</figcaption>
				</figure>
			</div>
		</div>
	</section>


    <section id="collections">
		<div className="container">
			<div className="c-1">
				<div className="c-1-image-holder"> <img src={collection1} alt="image"/> </div>
			</div>
			<div className="c-2">
				<h2>featured collection</h2>
				<hr />
				<div className="c-2-image-holder"> <img className="left" src={collection2} alt=""/><img className="right" src={collection3}
					 alt=""/></div>
				<p className="button">view all collections</p>
			</div>
		</div>
	</section>


    <section id="blog">
		<div className="container">
			<div className="blog-header">
				<h2>latest from blog</h2>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
			</div>
			<div className="blog-content">
				<div className="blog-1">
					<div className="blog-1-image-holder"> <img src={Blog1} alt="image"/> </div>
					<div className="blog-1-content">
						<h4>Lorem Ipsum</h4>
						<h3>Lorem ipsum dolor sit amet.</h3>
						<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
						<p className="button">view post</p>
					</div>
				</div>
				<div className="blog-2">
					<div className="blog-2-image-holder"> <img src={Blog2} alt="image"/> </div>
					<div className="blog-2-content">
						<h4>Lorem Ipsum</h4>
						<h3>Lorem ipsum dolor sit amet.</h3>
						<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
						<p className="button">view post</p>
					</div>
				</div>
			</div>
		</div>
	</section>

    </>)
}

export default Home