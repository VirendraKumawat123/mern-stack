import React from "react";
import { useDispatch } from "react-redux";

const Cart = () =>{
    const dispatch = useDispatch();

    const sub = () =>{
        // dispatch({
        //     type:"remove"
        // })
    }

    return(
        <>
            <button onClick={sub}>Remove</button>
        </>
    )
}

export default Cart;