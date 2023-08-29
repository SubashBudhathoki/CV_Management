import { createSlice } from "@reduxjs/toolkit";
import { ApplicantApi } from "../api/ApplicantApi";

const initialState = {
  user: ApplicantApi,
  path: "",
  Admin: "",
  selectedUser: null,
};

export const counterSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    addUser: (state, actions) => {
      state.user?.push(actions.payload);
    },
    setAdmin: (state, actions) => {
      state.Admin = actions.payload;
    },
    editUser: (state, actions) => {
      const {
        id,
        photo,
        fname,
        lname,
        email,
        position,
        select,
        phone,
        Experience,
        city,
        salary,
      } = actions.payload;
      const updateUser = state.user.find((user) => user.id == id);
      if (updateUser) {
        updateUser.id = id;
        updateUser.photo = photo;
        updateUser.fname = fname;
        updateUser.lname = lname;
        updateUser.email = email;
        updateUser.position = position;
        updateUser.select = select;
        updateUser.city = city;
        updateUser.salary = salary;
        updateUser.phone = phone;
        updateUser.Experience = Experience;
      }
    },
    deleteUser: (state, actions) => {
      state.user = state.user.filter((user) => user.id !== actions.payload.id);
    },
    deleteAllUser: (state, actions) => {
      const idsToDelete = actions.payload.ids;
      console.log(idsToDelete);
      state.user = state.user.filter((user) => !idsToDelete.includes(user.id));
    },

    pathLink: (state, actions) => {
      state.path = actions.payload;
    },
    detailUser: (state, actions) => {
      const id = actions.payload;
      const selectedUser = state.user.find((user) => user.id === id);

      if (selectedUser) {
        state.selectedUser = selectedUser;
      }
    },
    updateUserCheckbox: (state, action) => {
      const { id, isChecked, name } = action.payload;
      const userToUpdate = state.user.find((user) => user.fname === name);
      console.log(userToUpdate);
      if (userToUpdate) {
        userToUpdate.isChecked = isChecked;
      } else {
        state.user = action.payload;
      }
    },
  },
});

export const {
  addUser,
  setAdmin,
  editUser,
  deleteUser,
  pathLink,
  detailUser,
  updateUserCheckbox,
  deleteAllUser,
} = counterSlice.actions;

export default counterSlice.reducer;
