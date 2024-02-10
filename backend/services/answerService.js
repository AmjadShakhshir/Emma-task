import AnswerRepo from '../models/answerModel.js';

const findAll = async () => {
    const answers = await AnswerRepo.find()
    .exec();

    return answers;
}

// Add user answer
const addAnswer = async (answer) => {
    const newAnswer = new AnswerRepo({
        quizId: answer.quizId,
        answer: answer.answer,
        input: answer.input
    });
    return await newAnswer.save();
}

export default {
    findAll,
    addAnswer
}