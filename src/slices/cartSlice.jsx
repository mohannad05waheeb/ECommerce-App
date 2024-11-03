import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
    totalPrice: 0,
    discount: 0,
    count: JSON.parse(localStorage.getItem('cartItems'))?.length || 0,  
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);            
            if (existingItem) {
                existingItem.quantity += 1;   
            } else {
                const price = parseFloat(item.price.replace(/[^0-9.-]+/g,""));  
                if (!isNaN(price) && price > 0) {
                    state.items.push({ ...item, img: item.srcImg, quantity: 1 });  
                } else {
                    console.error('Invalid price for item:', item);
                }
            }        
            updateTotals(state);
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
            updateTotals(state);
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        increaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.items.find((i) => i.id === id);
            if (item) {
                item.quantity += 1; 
            }
            updateTotals(state);
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.items.find((i) => i.id === id);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.items = state.items.filter((i) => i.id !== id);
                }
            }
            updateTotals(state);
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
    },
}); 
const updateTotals = (state) => {  
    state.count = state.items.length;   
    state.totalPrice = state.items.reduce((total, item) => total + (parseFloat(item.price.replace(/[^0-9.-]+/g,"")) * item.quantity), 0);   
    state.discount = calculateDiscount(state.totalPrice);     
}; 
const calculateDiscount = (totalPrice) => {
    return totalPrice > 100 ? totalPrice * 0.1 : 0; 
};
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;