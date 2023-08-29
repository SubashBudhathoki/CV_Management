import { createSlice } from "@reduxjs/toolkit";

export const CalendardataSlice = createSlice({
  name: "CalendardataSlice",
  initialState: {
    calendardata: [],
    interviewUser: [],
  },
  reducers: {
    selectedCalendarData: (state, actions) => {
      state.calendardata.push(actions.payload);
    },
    selectedInterUser: (state, actions) => {
      state.interviewUser.push(actions.payload);
    },
  },
});

export const { selectedCalendarData, selectedInterUser } =
  CalendardataSlice.actions;
export default CalendardataSlice.reducer;
