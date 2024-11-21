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
          (el) => el?.card?.info?.id === item?.card?.info?.id
        );

        if (findItemIndex < 0) {
          const itemToInsert = {
            ...item,
            card: {
              ...item?.card,
              quantity: 1,
            },
          };
          state.items.push(itemToInsert);
        } else {
          state.items[findItemIndex].card.quantity++;
        }
      } else {
        // Mutating the state here
        const itemToInsert = {
          ...item,
          card: {
            ...item?.card,
            quantity: 1,
          },
        };
        state.items.push(itemToInsert);
        state.resId = resId;
      }
    },
    removeItem: (state, action) => {
      const { item } = action.payload;

      if (!item) return;

      state.items = state.items.reduce((updatedItems, el) => {
        if (el?.card?.info?.id === item?.card?.info?.id) {
          const updatedQuantity = el?.card?.quantity - 1;
          if (updatedQuantity > 0) {
            updatedItems.push({
              ...el,
              card: {
                ...item?.card,
                quantity: updatedQuantity,
              },
            });
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
