import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Product = {
  id: number;
  selectedSize: string;
  quantity: number;
  price: number;
  oneQuantityPrice: number;
  name: string;
};
export interface CartState {
  cartItems: Product[];
}
const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    loadCart: (state, action: PayloadAction<Product[]>) => {
      state.cartItems = action.payload;
    },
    addToCart: (state, action: PayloadAction<Product>) => {
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
    updateCart: (state, action: PayloadAction<any>) => {
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
