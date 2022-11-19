import { createSlice } from "@reduxjs/toolkit";
import { fetchText } from "./Services";

export const TextSlice = createSlice({
    name: "text",
    initialState: {
        text: "",
        status: "idle"
    },
    reducer: {},
    extraReducers: {
        [fetchText.pending]: (state) => {
            state.status = "loading";
        },
        [fetchText.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.text = action.payload;
        },
        [fetchText.rejected]: (state) => {
            state.status = "failed";
        }
    }
})

export default TextSlice.reducer