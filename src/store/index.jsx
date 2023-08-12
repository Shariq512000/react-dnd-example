import {configureStore} from "@reduxjs/toolkit"
import dataSlice from "./slices/UserSlice"

const store = configureStore({
    reducer: {
        data: dataSlice,
    }
});

export default store;