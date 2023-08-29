import { createSlice } from "@reduxjs/toolkit";

export const HiredSlice = createSlice({
  name: "HiredSlice",
  initialState: {
    hiredUser: [],
    rejectedUser: [],
  },
  reducers: {
    selectedHiredUser: (state, actions) => {
      state.hiredUser.push(actions.payload);
    },
    allRejectedUser: (state, actions) => {
      state.rejectedUser.push(actions.payload);
    },
  },
});

export const { selectedHiredUser, allRejectedUser } = HiredSlice.actions;
export default HiredSlice.reducer;
