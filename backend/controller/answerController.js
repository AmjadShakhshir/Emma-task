import asyncHandler from 'express-async-handler';

import answerService from '../services/answerService.js';
import {ApiError} from '../middleware/ApiError.js';

// @desc    Get Answer
// @route   GET /api/answer
// @access  Public

const getAnswer = asyncHandler(async (req, res, next) => {
    try {
        const answers = await answerService.findAll();
        res.status(200).json(answers);
    } catch (error) {
        res.status(500);
        next(ApiError.badRequest('Internal Server Error'));
    }
});


// @desc    Add Answer
// @route   POST /api/quiz/:id
// @access  Private/Admin

const addAnswer = asyncHandler(async (req, res, next) => {
    try {  
        const answerBody = req.body;
        const answer = await answerService.addAnswer(answerBody);
        res.status(201).json({ answer, message: 'Answer added' });
    } catch (error) {
        res.status(500);
        next(ApiError.badRequest('Something wrong with adding answer. Please try again.'));
    }
});

export default {
    getAnswer,
    addAnswer
}