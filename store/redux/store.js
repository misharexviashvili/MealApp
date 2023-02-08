import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorties";
export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer
  },
});
