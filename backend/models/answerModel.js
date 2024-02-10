import mongoose, { Schema } from "mongoose";

const AnswerSchema = new Schema({
    quizId: {
        type: Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    input : {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Answer", AnswerSchema);