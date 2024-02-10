import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import quizRouter  from './routes/quizRouter.js';
import answerRouter from './routes/answerRouter.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

dotenv.config();

const port = process.env.PORT || 5001;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/quiz', quizRouter);
app.use('/api/answer', answerRouter);

app.get('/', (req, res) => {
    res.send('Server is Ready!');
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});