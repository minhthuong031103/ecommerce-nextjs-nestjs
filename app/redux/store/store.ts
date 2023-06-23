import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../slice/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
