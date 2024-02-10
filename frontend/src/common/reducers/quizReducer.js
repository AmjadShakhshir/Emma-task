import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {url} from '../common';

const initialState = {
    questions: [],
    error: '',
    status: 'idle'
};

export const getQuestion = createAsyncThunk(
    'quiz/getQuestion',
    async () => {
        try {
            const response = await axios.get(`${url}/quiz`);
            return response.data;
        } catch (error) {
            console.error("Error fetching data: ", error);
            throw error;
        }
    }
);

const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getQuestion.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getQuestion.fulfilled, (state, action) => {
                return {
                    ...state,
                    questions: action.payload,
                    status: 'succeeded'
                };
            })
            .addCase(getQuestion.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { increment } = quizSlice.actions;

const quizReducer = quizSlice.reducer;
export default quizReducer;

