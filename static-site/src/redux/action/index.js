// For add to cart
 const addCart = (product) => {
    return{
        type: "ADDITEM",
        payload: product
        }
}
// remove to cart
 const removeCart = (product) => {
    return{
        type : "REMOVEITEM",
        payload : product
    }
}


export default {addCart, removeCart};