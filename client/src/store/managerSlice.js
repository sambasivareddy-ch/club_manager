import { createSlice } from "@reduxjs/toolkit";

const managerSlice = createSlice({
    name: "Manager",
    initialState: {
        managerId: "",
        clubId: "",
    },
    reducers: {
        login(state, action) {
            state.managerId = action.payload.managerId;
            state.clubId = action.payload.clubId;
        },
        logout(state) {
            state.managerId = "";
            state.clubId = "";
        },
    },
});

export const managerActions = managerSlice.actions;
export default managerSlice;
