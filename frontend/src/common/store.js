import { configureStore } from '@reduxjs/toolkit';

import quizReducer from './reducers/quizReducer';
import answerReducer from './reducers/answerReducer';

const store = configureStore({
    reducer: {
        quizReducer,
        answerReducer
    },
});

export default store;
