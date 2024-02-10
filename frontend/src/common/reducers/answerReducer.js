import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {url} from '../common';

const initialState = {
    answers: [],
    error: '',
    status: 'idle'
};

export const getAnswer = createAsyncThunk(
    'answer/getAnswer',
    async () => {
        try {
            const response = await axios.get(`${url}/answer`);
            return response.data;
        } catch (error) {
            console.error("Error fetching data: ", error);
            throw error;
        }
    }
);

export const addAnswer = createAsyncThunk(
    'answer/addAnswer',
    async (answerBody) => {
        try {
            const response = await axios.post(`${url}/answer`, answerBody);
            return response.data;
        } catch (error) {
            console.error("Error adding answer: ", error);
            throw error;
        }
    }
);

const answerSlice = createSlice({
    name: "answer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAnswer.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAnswer.fulfilled, (state, action) => {
                return {
                    ...state,
                    answers: action.payload,
                    status: 'succeeded'
                };
            })
            .addCase(getAnswer.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addAnswer.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addAnswer.fulfilled, (state, action) => {
                state.answers.push(action.payload);
            })
            .addCase(addAnswer.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
})

const answerReducer = answerSlice.reducer;
export default answerReducer;