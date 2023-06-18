import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import paymentModalSlice from './paymentModalSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    payment: paymentModalSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
