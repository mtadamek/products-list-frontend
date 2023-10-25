import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../api/products.d";

type InitialState = {
  list: IProduct[];
  current?: IProduct;
};

const initialState: InitialState = {
  list: [],
};

const productsListSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsList: (state, action: PayloadAction<IProduct[] | undefined>) => {
      state.list = action.payload || [];
    },
    setCurrentProduct: (state, action: PayloadAction<IProduct | undefined>) => {
      state.current = action.payload;
    },
  },
});

export default productsListSlice.reducer;
export const { setProductsList, setCurrentProduct } = productsListSlice.actions;
