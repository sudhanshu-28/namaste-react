import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    resId: null,
  },
  reducers: {
    addItem: (state, action) => {
      const { item, resId } = action.payload;

      if (state.resId && state.items.length > 0) {
        const findItemIndex = state.items.findIndex(
          (el) => el?.itemId === item?.id
        );

        if (findItemIndex < 0) {
          state.items.push({
            itemId: item?.id,
            itemInfo: item,
            quantity: 1,
          });
        } else {
          state.items[findItemIndex].quantity++;
        }
      } else {
        // Mutating the state here
        state.items.push({
          itemId: item?.id,
          itemInfo: item,
          quantity: 1,
        });
        state.resId = resId;
      }
    },
    removeItem: (state, action) => {
      const { item } = action.payload;

      if (!item) return;

      state.items = state.items.reduce((updatedItems, el) => {
        if (el?.itemId === item?.id) {
          const updatedQuantity = el?.quantity - 1;
          if (updatedQuantity > 0) {
            updatedItems.push({ ...el, quantity: updatedQuantity });
          }
        } else {
          updatedItems.push(el);
        }
        return updatedItems;
      }, []);
    },
    clearCart: (state) => {
      state.items = [];
      state.resId = null;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
