import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    loadCart: (state, action: PayloadAction) => {
      state.cartItems = action.payload;
    },
    addToCart: (state, action: PayloadAction) => {
      const item = state.cartItems.find(
        (x) =>
          x.id === action.payload.id &&
          x.selectedSize === action.payload.selectedSize
      );
      if (item) {
        item.quantity++;
        item.price = item.oneQuantityPrice * item.quantity;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    updateCart: (state, action: PayloadAction) => {
      state.cartItems = state.cartItems.map((p) => {
        if (
          p.id === action.payload.id &&
          p.selectedSize === action.payload.selectedSize
        ) {
          if (action.payload.key === 'quantity') {
            p.price = p.oneQuantityPrice * action.payload.value;
          }
          return { ...p, [action.payload.key]: action.payload.value };
        }
        return p;
      });
    },
  },
});

export const { addToCart, updateCart, loadCart } = cartSlice.actions;
export default cartSlice;
