// // offerLetterSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const TemplateSlice = createSlice({
//   name: "TemplateSlice",
//   initialState: {
//     selectedTemplateContent: "",
//     displayTableData: [],
//   },
//   reducers: {
//     setTemplateContent: (state, actions) => {
//       state.selectedTemplateContent = actions.payload;
//     },

//     setTableData: (state, action) => {
//       const { displayUser, displayTemplate, content } = action.payload;

//       const existingIndex = state.displayTableData.findIndex(
//         (entry) =>
//           entry.displayUser === displayUser &&
//           entry.displayTemplate === displayTemplate
//       );

//       if (existingIndex !== -1) {
//         state.displayTableData[existingIndex].content = content;
//       } else {
//         state.displayTableData.push({
//           displayUser,
//           displayTemplate,
//           content,
//         });
//       }
//     },
//   },
// });

// export const { setTemplateContent, setTableData } = TemplateSlice.actions;
// export default TemplateSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const TemplateSlice = createSlice({
  name: "TemplateSlice",
  initialState: {
    selectedTemplateContent: "",
    displayTableData: [],
  },
  reducers: {
    setTemplateContent: (state, actions) => {
      state.selectedTemplateContent = actions.payload;
    },

    setTableData: (state, action) => {
      const { displayUser, displayTemplate, content } = action.payload;

      const existingIndex = state.displayTableData.findIndex(
        (entry) =>
          entry.displayUser === displayUser &&
          entry.displayTemplate === displayTemplate
      );

      if (existingIndex !== -1) {
        state.displayTableData[existingIndex].content = content;
      } else {
        state.displayTableData.push({
          displayUser,
          displayTemplate,
          content,
          status: "Pending", // Initialize status as Pending
        });
      }
    },

    // New action to update the status
    setStatus: (state, action) => {
      const { displayUser, status } = action.payload;

      const existingIndex = state.displayTableData.findIndex(
        (entry) => entry.displayUser === displayUser
      );

      if (existingIndex !== -1) {
        state.displayTableData[existingIndex].status = status;
      }
    },
  },
});

export const { setTemplateContent, setTableData, setStatus } =
  TemplateSlice.actions;
export default TemplateSlice.reducer;
