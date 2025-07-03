import { configureStore } from "@reduxjs/toolkit";
import userReducer, { UserType } from "../store/slices/userSlice";
import moviesReducer, { MoviesType } from "../store/slices/moviesSlice";

export type RootStateType = {
  user: UserType;
  movies: MoviesType;
};

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default appStore;
