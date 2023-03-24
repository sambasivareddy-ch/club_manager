import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "Admin",
  initialState: {
    adminId: "",
  },
  reducers: {
    login(state, action) {
      state.adminId = action.payload.adminId;
    },
    logout(state) {
      state.adminId = "";
    },
  },
});

export const adminActions = adminSlice.actions;
export default adminSlice;