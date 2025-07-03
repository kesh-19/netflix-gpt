import { createSlice } from "@reduxjs/toolkit";

export type MoviesType = {
  nowPlayingMovies: any[];
  trailerVideo: {
    key: string;
  } | null;
};

const initialState: MoviesType = {
  nowPlayingMovies: [],
  trailerVideo: {
    key: "",
  },
};
const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
