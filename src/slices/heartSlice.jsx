import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
const heartSlice = createSlice({
    name: "heart",
    initialState,
    reducers: {
        toggleHeart: (state, action) => {
            const productId = action.payload;
            state[productId] = !state[productId];        
            localStorage.setItem(`isFavorited_${productId}`, state[productId]);
        },
        setInitialState: (state) => {           
            for (const key in localStorage) {
                if (key.startsWith("isFavorited_")) {
                    const productId = key.replace("isFavorited_", "");
                    state[productId] = localStorage.getItem(key) === "true";
                }
            }
        },
    },
});
export const { toggleHeart, setInitialState } = heartSlice.actions;
export default heartSlice.reducer;