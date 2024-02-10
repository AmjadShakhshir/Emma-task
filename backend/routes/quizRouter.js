import express from "express";
import quizController from "../controller/quizController.js";

const quizRouter = express.Router();

quizRouter.get('/',quizController.getQuiz);
quizRouter.post('/', quizController.addQuiz);
quizRouter.delete('/:id', quizController.deleteQuiz);

export default quizRouter;