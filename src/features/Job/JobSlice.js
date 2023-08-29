import { createSlice } from "@reduxjs/toolkit";
import { DomainApi, JobPostingItem } from "../api/JobApi";

export const JobSlice = createSlice({
  name: "JobSlice",
  initialState: {
    JobDomainItem: DomainApi,
    JobPostingItem: JobPostingItem,
  },
  reducers: {
    domainItems: (state, action) => {
      console.log("hello");
    },
    deleteDomainItems: (state, actions) => {
      const { id } = actions.payload;
      state.JobDomainItem = state.JobDomainItem.filter(
        (item) => item.JobDomainId !== id
      );
    },
    addJobItem: (state, actions) => {
      state.JobPostingItem.push(actions.payload);
    },
    editJobItem: (state, actions) => {
      const {
        id,
        Technology,
        NUMBER_OF_OPENINGS,
        PUBLISHEDON,
        APPLICATIONFROMDATE,
        APPLICATIONEXPIRYDATE,
        JOBPOSTINGSTATUS,
      } = actions.payload;
      console.log(id);
      const Updated = state.JobPostingItem.find(
        (item) => item.JOBPOSITIONID == id
      );
      if (Updated) {
        Updated.id = id;
        Updated.Technology = Technology;
        Updated.NUMBER_OF_OPENINGS = NUMBER_OF_OPENINGS;
        Updated.PUBLISHEDON = PUBLISHEDON;
        Updated.APPLICATIONFROMDATE = APPLICATIONFROMDATE;
        Updated.APPLICATIONEXPIRYDATE = APPLICATIONEXPIRYDATE;
        Updated.JOBPOSTINGSTATUS = JOBPOSTINGSTATUS;
      }
    },
    deleteJobItem: (state, actions) => {
      const { id } = actions.payload;
      state.JobPostingItem = state.JobPostingItem.filter(
        (item) => item.JOBPOSITIONID !== id
      );
    },
  },
});

export const {
  domainItems,
  addJobItem,
  editJobItem,
  deleteJobItem,
  deleteDomainItems,
} = JobSlice.actions;
export default JobSlice.reducer;
