import asyncHandler from 'express-async-handler';

import quizService from '../services/quizService.js';
import {ApiError} from '../middleware/ApiError.js';

// @desc    Get Quizes
// @route   GET /api/quiz
// @access  Public
const getQuiz = asyncHandler(async (req, res, next) => {
    try {
        const quizes = await quizService.findAll();
        res.status(200).json(quizes);
    } catch (error) {
        res.status(500);
        next(ApiError.badRequest('Internal Server Error'));
    }
});

// @desc    Add Quiz
// @route   POST /api/quiz
// @access  Private/Admin
const addQuiz = asyncHandler(async (req, res, next) => {
    try {
        const quizBody = req.body;
        const exisitngQuiz = await quizService.findQuizByTitle(quizBody.title);
        if (exisitngQuiz) {
            res.status(400);
            next(ApiError.badRequest('Quiz already exists'));
            return;
        }
        const quiz = await quizService.add(quizBody);
        res.status(201).json({ quiz,'message': 'Add Questions' });
    } catch (error) {
        res.status(500);
        next(ApiError.badRequest('Something wrong with adding quiz. Please try again.'));
    }
});

// @desc Delete Quiz
// @route DELETE /api/quiz/:id
// @access Private/Admin
const deleteQuiz = asyncHandler(async (req, res, next) => {
    try {
        const quizId = req.params.id;
        if (!quizId) {
            res.status(400);
            next(ApiError.badRequest('Quiz not found'));
        }
        const quiz = await quizService.deleteQuiz(quizId);
        if (quiz === null) {
            res.status(400);
            next(ApiError.badRequest('Quiz cannot be removed. Please try again.'));
            return;
        }
        console.log("Quiz removed")
        res.status(200).json({ message: 'Quiz removed' });
    } catch (error) {
        res.status(500);
        next(ApiError.badRequest('Something wrong with removing quiz. Please try again.'));
    }
});

export default {
    getQuiz,
    addQuiz,
    deleteQuiz
}