import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
       toggleMenu: (state) => {
        state.isMenuOpen = !state.isMenuOpen;
       }
    },
});
export const { toggleMenu } = slice.actions;
export default slice.reducer;