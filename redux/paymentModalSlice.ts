import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  openMultistepModal: false,
};

const paymentModalSlice = createSlice({
  name: 'paymentModal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<boolean>) => {
      state.openMultistepModal = action.payload;
    },
  },
});

export const { openModal } = paymentModalSlice.actions;
export default paymentModalSlice;
