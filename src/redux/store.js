import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./slice/main"

export const store = configureStore({
    reducer:{main: mainReducer}
});