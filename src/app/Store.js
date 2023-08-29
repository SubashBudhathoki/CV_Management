import { configureStore } from "@reduxjs/toolkit";
import UserSliceReducer from "../features/Adduser/UserSlice";
import CandidateSliceReducer from "../features/Candidate/CandidateSlice";
import JobSliceReducer from "../features/Job/JobSlice";
import AssesmentSliceReducer from "../features/Assesment/AssesmentSlice";
import CalendardataSliceReducer from "../features/Calendardata/CalendardataSlice";
import HiredSliceReducer from "../features/Hired/HiredSlice";
import TemplateSliceReducer from "../features/Template/TemplateSlice";

export const store = configureStore({
  reducer: {
    User: UserSliceReducer,
    Candidate: CandidateSliceReducer,
    JobDomain: JobSliceReducer,
    Assesmemt: AssesmentSliceReducer,
    calendar: CalendardataSliceReducer,
    hired: HiredSliceReducer,
    Template: TemplateSliceReducer,
  },
});
