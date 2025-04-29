import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayMovies: null,
  },
  reducers: {
    addNowPlayMovies: (state, action) => {
      state.nowPlayMovies = action.payload;
    },
  },
});

export const { addNowPlayMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
