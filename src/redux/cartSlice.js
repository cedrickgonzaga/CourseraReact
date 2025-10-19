import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload;
      const existing = state.cart.find((item) => item.id === plant.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({ ...plant, quantity: 1 });
      }
    },

    updateQuantity: (state, action) => {
      const { id, change } = action.payload;
      state.cart = state.cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity + change, 0) }
            : item
        )
        .filter((item) => item.quantity > 0);
    },

    removeItem: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
    },
  },
});

export const { addToCart, updateQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
