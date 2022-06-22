import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Products = ()=>{
    const [data, setData] = useState([]);
    const [fillter, setFillter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(()=> {
       const getProducts = async () =>{
           setLoading(true);
           const Response = await fetch('https://fakestoreapi.com/products');
           console.log(await Response);
           if(componentMounted){
               setData(await Response.clone().json());
               setFillter(await Response.json());
               setLoading(false);
               console.log(fillter);
           }
           return () => {
               componentMounted = false;
            }

       }  
       getProducts();
    }, [] );

    const Loading = () => {
        return(
            <div>
                <h4>Loading....</h4>
            </div>
        )

    }
    const FillterProduct = (cat)=>{
        const UpdateList = data.filter((x)=>x.category === cat);
        setFillter(UpdateList);
    }

    const ShowProduct = () => {
        return(
        <>
            <div className="buttons text-center py-3"> 
                <button type="button" className="btn btn-outline-dark m-1" onClick={()=>setFillter(data)} >All</button>
                <button type="button" className="btn btn-outline-dark m-1" onClick={()=>FillterProduct("men's clothing")}>Men's Clothing</button>
                <button type="button" className="btn btn-outline-dark m-1" onClick={()=>FillterProduct("women's clothing")}>Whomen's Clothins</button>
                <button type="button" className="btn btn-outline-dark m-1" onClick={()=>FillterProduct("jewelery")}>Jewelery Clothings</button>
                <button type="button" className="btn btn-outline-dark m-1" onClick={()=>FillterProduct("electronics")}>Electronics</button>
            </div>
            {fillter.map((product) =>{
                return(
                     <>
                     <div className="col-md-3 my-2">
                        <NavLink className="product" to={`/product/${product.id}`} >
                            <div className="card ">
                                <img className="product-img" src={product.image} alt="product-img" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title.substring(0, 20)} ...</h5>
                                    <p className="card-text py-2"><b>${product.price}</b></p> 
                                    <NavLink className="btn btn-primary" to = {`/product/${product.id}`} >Buy Now</NavLink>
                                </div>
                            </div>
                        </NavLink>
                     </div>
                    </>
                 )
            })}
        </>
        );
    }

    return(
        <div className="container py-5">
            <div className="row"> 
                <h1 className="text-center">Products</h1>
            </div>
            <div className="row justify-content-center">
                {loading ? <Loading/> : <ShowProduct/>}
            </div>
        </div>
    );
}

export default Products;