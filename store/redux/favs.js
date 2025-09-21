import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "favs",
  initialState: {
    favIds: [],
  },
  reducers: {
    addFav: (state, action) => {
      const id = action.payload;

      if (!state.favIds.includes(id)) {
        state.favIds.push(id);
      }
    },
    removeFav: (state, action) => {
      const id = action.payload;

      state.favIds = state.favIds.filter((mId) => mId !== id);
    },
  },
});

export default favSlice.reducer;
export const { addFav, removeFav } = favSlice.actions;
