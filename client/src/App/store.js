import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Features/Todo/TodoSlice"; // we export the whole reducer from slice which is we import here
export const store = configureStore({
  reducer: todoReducer,
});
