import { createSlice } from "@reduxjs/toolkit";
import { CandidateApi } from "../api/ApplicantApi";
import { blackListUserData } from "../api/ApplicantApi";
export const CandidateSlice = createSlice({
  name: "CandidateSlice",
  initialState: {
    blackListReason: null,
    acceptedUser: CandidateApi,
    selectedUser: null,
    selectedUserFromDropdown: [],
    blackListed: blackListUserData,
  },
  reducers: {
    selectedUserFromDropdowntotheAssesmet: (state, actions) => {
      state.selectedUserFromDropdown.push(actions.payload);
    },
    receiveAllUser: (state, action) => {
      state.acceptedUser.push(action.payload);
    },
    setBlackListedUser: (state, actions) => {
      state.blackListed.push(actions.payload);
    },
    setBlackListReason: (state, actions) => {
      state.blackListReason = actions.payload;
    },
    selectedInterviewUser: (state, actions) => {
      state.selectedUser = actions.payload;
    },

    assesmentCandidateDetail: (state, actions) => {
      const id = actions.payload;
      console.log(id);
      const selected = state.acceptedUser.find((user) => user.id == id);
      if (selected) state.selectedUserFromDropdown = selected;
    },
  },
});

export const {
  receiveAllUser,
  selectedInterviewUser,
  assesmentCandidateDetail,
  selectedUserFromDropdowntotheAssesmet,
  setBlackListedUser,
  setBlackListReason,
} = CandidateSlice.actions;
export default CandidateSlice.reducer;
