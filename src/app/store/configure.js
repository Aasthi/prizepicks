import rootReducers from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: rootReducers,
});