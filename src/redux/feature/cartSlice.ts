import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
}

const initialState: Array<IProduct> = []; // Correct initialization

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existingProductIndex = state.findIndex(
        (pro) => pro.id === action.payload.id
      );
      if (existingProductIndex === -1) {
        state.push(action.payload);
      } else {
        state[existingProductIndex].quantity += 1; 
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
