import { createSlice } from "@reduxjs/toolkit";
import { date } from "yup";
export const AssesmentSlice = createSlice({
  name: "AssesmentSlice",
  initialState: {
    assesmentUser: [],
    testUserDetail: null,
  },
  reducers: {
    selectedAssesmentUser: (state, action) => {
      const assesmentCreatedDate = new Date().toLocaleDateString();
      console.log(assesmentCreatedDate);
      const assesmentExpiryDate = new date();

      state.assesmentUser.push(action.payload);
    },
    assesmentUserDetail: (state, actions) => {
      const id = actions.payload;
      console.log(id);
      const selected = state.assesmentUser.find((user) => user.id == id);
      if (selected) state.testUserDetail = selected;
    },
  },
});

export const { selectedAssesmentUser, assesmentUserDetail } =
  AssesmentSlice.actions;
export default AssesmentSlice.reducer;
