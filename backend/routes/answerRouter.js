import express from "express";
import answerController from "../controller/answerController.js";

const answerRouter = express.Router();

answerRouter.get('/',answerController.getAnswer);
answerRouter.post('/', answerController.addAnswer);

export default answerRouter;