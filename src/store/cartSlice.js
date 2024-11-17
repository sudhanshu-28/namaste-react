import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    resId: null,
  },
  reducers: {
    addItem: (state, action) => {
      const { itemId, resId } = action.payload;
      // Mutating the state here
      state.items.push(itemId);
      state.resId = resId;
    },
    removeItem: (state, action) => {
      const itemToRemove = action.payload;
      state.items = state.items.filter((el) => el !== itemToRemove);
      if (state.items.length === 0) {
        state.resId = null;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.resId = null;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
