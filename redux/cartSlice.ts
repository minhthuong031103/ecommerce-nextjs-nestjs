import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product } from '@/graphql/types';

export interface CartState {
  productsInCart: Product[];
  total: number;
  cartOpen: boolean;
}
//we need the interface because we have the Product type in the
//productsInCart array, it we not have the interface, we can not access
//the Product type like quantity,price...
const initialState: CartState = {
  productsInCart: [],
  total: 0,
  cartOpen: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //payload action is a wrapper around the action object that contains the payload
    addItemToCart: (state, action: PayloadAction<Product>) => {
      const product = state.productsInCart.find(
        (product) => product.id === action.payload.id
      );
      if (!product) {
        state.productsInCart.push({ ...action.payload, quantity: 1 });
        state.total += action.payload.price; //hoac dung reduce
      } else {
        product.quantity++;
        state.total = state.productsInCart.reduce((total, product) => {
          return total + product.price * product.quantity;
        }, 0);
      }
    },

    deleteItemFromCart: (state, action: PayloadAction<Product>) => {
      const productIndex = state.productsInCart.findIndex(
        (product) => product.id === action.payload.id
      );
      //delete product
      if (state.productsInCart[productIndex].quantity === 1) {
        state.productsInCart.splice(productIndex, 1);
      } else {
        state.productsInCart[productIndex].quantity--;
        //and update total
        state.total = state.productsInCart.reduce(
          (total, product) => total + product.price * product.quantity,
          0
        );
      }
    },

    openCart: (state, action: PayloadAction<boolean>) => {
      state.cartOpen = action.payload;
    },
  },
});

export const { addItemToCart, deleteItemFromCart, openCart } =
  cartSlice.actions;

export default cartSlice;

//the actions are the functions that we can call to dispatch an action to the store
//actions come from the reducers, and the reducers are the functions that actually update the state
//in the reducers, the numbers of functions are equal to the numbers of actions

//we export the cartSlice.reducer to use in the store.ts file, it means
//because the store.ts file is the file that we create the store, and the store
// is the place that we store the state, so we need to
// export the reducer to the store.ts file
// because the reducer is the function that update the state
