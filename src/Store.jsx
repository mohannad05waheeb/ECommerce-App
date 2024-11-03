import { configureStore } from "@reduxjs/toolkit";
import menuReducer from './slices/menuSlice';
import scrollReducer from './slices/scrollSlice'; 
import heartReducer from './slices/heartSlice';  
import cartReducer from './slices/cartSlice';  
const StoreApp = configureStore({   
    reducer: {     
        menu: menuReducer,   
        scroll: scrollReducer,  
        heart: heartReducer,    
        cart: cartReducer,  
    }, 
}); 
export default StoreApp;   