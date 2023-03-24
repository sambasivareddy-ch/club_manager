import { configureStore } from "@reduxjs/toolkit";

import adminSlice from "./adminSlice";
import managerSlice from "./managerSlice";

const store = configureStore({
    reducer: {
        admin: adminSlice.reducer,
        manager: managerSlice.reducer,
    },
});

export default store;
