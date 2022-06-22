import React, { useState, useEffect } from "react";
import { useParams, unstable_HistoryRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

const Product = ()=>{
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const addCart = () =>{
        dispatch({
            type:"add",
        });
    };



    useEffect(() =>{ 
        const getProducts = async ()=>{
            setLoading(true);
            const Response = await fetch(`https:fakestoreapi.com/products/${id}`);
            setProduct(await Response.json());
            setLoading(false);
        }
        getProducts();
    }, [] );

    const Loading = () => {
        return(
            <>
                Loading...
            </>
        )
    }
    const ShowProduct = () => {
        return(
            <div class="container my-5">
                 <div class="row d-flex justify-content-center">
                     <div class="col-md-10">
                             <div class="row">
                                 <div class="col-md-6">
                                     <div class="images p-3">
                                         <div class="text-center p-4"> <img id="main-image" src={product.image} width="250" /> </div>
                                         <div class="thumbnail text-center"> <img onclick="change_image(this)" src="https:i.imgur.com/Rx7uKd0.jpg" width="70" /> <img onclick="change_image(this)" src="https:i.imgur.com/Dhebu4F.jpg" width="70" /> </div>
                                     </div>
                                 </div>
                                 <div class="col-md-6">
                                     <div class="product p-4">
                                         <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand">{product.category}</span>
                                             <h5 class="text-uppercase">{product.title}</h5>
                                             <div class="price d-flex flex-row align-items-center"> <span class="act-price">${(product.price - (product.price/5)).toFixed(2)} </span>
                                                 <div class="ml-2"> <small class="dis-price"> ${product.price}</small> <span>20% OFF</span> </div>
                                             </div>
                                         </div>
                                         <p class="about">{product.description}</p>
                                         <div class="sizes mt-5">
                                             <h6 class="text-uppercase">Size</h6> <label class="radio"> <input type="radio" name="size" value="S"/> <span>S</span> </label> <label class="radio"> <input type="radio" name="size" value="M" /> <span>M</span> </label> <label class="radio"> <input type="radio" name="size" value="L" /> <span>L</span> </label> <label class="radio"> <input type="radio" name="size" value="XL" /> <span>XL</span> </label> <label class="radio"> <input type="radio" name="size" value="XXL" /> <span>XXL</span> </label>
                                         </div>
                                         <div class="cart mt-4 align-items-center"> <button class="btn btn-danger text-uppercase mr-2 px-4" onClick={addCart} >Add to cart</button> <i class="fa fa-heart text-muted"></i> <i class="fa fa-share-alt text-muted"></i> </div>
                                     </div>
                                 </div>
                         </div>
                     </div>
                 </div>
             </div>
        );
    }
  
    
     return(
         <>
            {loading ? <Loading/> : <ShowProduct/>}
         </>
         );
}

export default Product;