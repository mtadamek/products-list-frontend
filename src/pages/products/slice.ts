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
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(
        (product) => product.id !== action.payload
      );
    },
    addProduct: (state, action: PayloadAction<IProduct>) => {
      if (state.list.length > 0) {
        state.list = [...state.list, action.payload];
      }
    },
    editProduct: (state, action: PayloadAction<IProduct>) => {
      state.list = state.list.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
    },
    setCurrentProduct: (state, action: PayloadAction<IProduct | undefined>) => {
      state.current = action.payload;
    },
  },
});

export default productsListSlice.reducer;
export const {
  setProductsList,
  deleteProduct,
  addProduct,
  editProduct,
  setCurrentProduct,
} = productsListSlice.actions;
