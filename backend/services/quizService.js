import QuizRepo from '../models/quizModel.js';

// Get all quizes
const findAll = async () => {
    const quizes = await QuizRepo.find().exec();
    return quizes;
}

// Get a quiz by title
const findQuizByTitle = async (quizTitle) => {
    const quiz = await QuizRepo.findOne({title: quizTitle}).exec();
    return quiz;
}

// Add a new quiz
const add = async (quiz) => {
    const newQuiz = new QuizRepo(quiz);
    return await newQuiz.save();
}

// Delete a quiz
const deleteQuiz = async (quizId) => {
    return await QuizRepo.findByIdAndDelete(quizId);
}

export default {
    findAll,
    add,
    findQuizByTitle,
    deleteQuiz
}