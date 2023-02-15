import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    // runs only when "name" + "/" + "fn" is dispatched as action from reducer
    // in this case song/addSong
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    // to reset songs while reseting movies list.
    /// "movie/reset" or moviesSlice.actions.reset
    builder.addCase("movie/reset", (state, action) => {
      return [];
    });
  },
});

const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(state.payload);
      state.splice(index, 1);
    },
    reset(state, action) {
      return [];
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: movieSlice.reducer,
  },
});

// const startingState = store.getState();
// console.log(startingState);

// store.dispatch(songsSlice.actions.addSong("Some song"));

// const finalState = store.getState();
// console.log(finalState);

export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie, reset } = movieSlice.actions;
