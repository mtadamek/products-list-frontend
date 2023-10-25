import { configureStore } from "@reduxjs/toolkit";
import products from "../pages/products/slice";

const store = configureStore({
  reducer: { products },
});

store.subscribe(() => console.log(store.getState()));

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
