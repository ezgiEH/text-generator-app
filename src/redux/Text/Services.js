import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchText =createAsyncThunk(
    "text/fetchText",
    async (generator) => {
        const res = await axios.get( 
            `https://baconipsum.com/api/?type=all-meat&paras=${generator.p}&format=${generator.i}`
            )
        return res.data
    }
)