import { configureStore } from "@reduxjs/toolkit";

import adminSlice from "./adminSlice";
import managerSlice from "./managerSlice";
import eventDatesSlice from "./eventDateSlice";

const store = configureStore({
    reducer: {
        admin: adminSlice.reducer,
        manager: managerSlice.reducer,
        events: eventDatesSlice.reducer,
    },
});

export default store;
