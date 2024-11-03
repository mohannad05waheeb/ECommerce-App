import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isScrollTop: false
}; 
const ScrollSlice = createSlice({
    name: "scrollToTop",
    initialState,
    reducers: {
        showScrollTop: (state) => {
            state.isScrollTop = true;
        }, 
        hideScrollTop: (state) => {
            state.isScrollTop = false;
        },
    },
}); 
export const { showScrollTop , hideScrollTop } = ScrollSlice.actions;
export default ScrollSlice.reducer; 