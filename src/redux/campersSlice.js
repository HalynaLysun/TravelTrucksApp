import { createSlice, nanoid } from "@reduxjs/toolkit";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
  },
  reducers: {
    addCamper: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(camper) {
        return {
          payload: {
            id: nanoid(),
            ...camper,
          },
        };
      },
    },
  },
});

export const campersReducer = campersSlice.reducer;
export const { addContact, deleteContact } = campersSlice.actions;
