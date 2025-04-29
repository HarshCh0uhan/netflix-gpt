import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPLayMovies: null
    },
    reducers: {
        addNowPlayMovies: (state, action) => {
            state.nowPLayMovies = action.payload
        }
    }
})

export const {addNowPlayMovies} = movieSlice.actions

export default movieSlice.reducer