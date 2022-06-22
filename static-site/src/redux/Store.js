import { configureStore } from "@reduxjs/toolkit";
import { myReducer } from './reducer/Reducer';

const Store = configureStore({
    reducer:{
        cartReducer:myReducer,
    }
});

export default Store;