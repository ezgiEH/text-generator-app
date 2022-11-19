import { configureStore } from "@reduxjs/toolkit";
import  TextSlice  from "./Text/TextSlice";

export const store = configureStore({
    reducer: {
        text: TextSlice,
    },
})
