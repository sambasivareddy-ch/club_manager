import { createSlice } from "@reduxjs/toolkit";

const eventDatesSlice = createSlice({
    name: "Event Dates",
    initialState: {
        eventDates: [],
    },
    reducers: {
        add(state, action) {
            if (!state.eventDates.includes(action.payload.date)) {
                state.eventDates.push(action.payload.date)
            }
        },
        remove(state) {
            state.eventDates.pop();
        },
        clear(state) {
            state.eventDates = [];
        },
    },
});

export const eventDatesActions = eventDatesSlice.actions;
export default eventDatesSlice;
