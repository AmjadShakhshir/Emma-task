import { useState, useEffect } from 'react';
import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { getAnswer } from '../common/reducers/answerReducer';
import { getQuestion } from '../common/reducers/quizReducer';
import '../../public/assets/styles/dashboard.scss';

const Dashboard = () => {
    const [quizId, setQuizId] = useState('');
    const answers = useSelector((state) => state.answerReducer.answers);
    const question = useSelector((state) => state.quizReducer.questions.find((question) => question._id === quizId));
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAnswer());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getQuestion());
    }, [dispatch]);

    useEffect(() => {
        if (answers.length > 0) {
        setQuizId(answers[0].quizId);
    }
    }, [answers]);

  return (
    <Box component={'main'} className='dashboard'>
        <Typography className='dashboard-title' variant="h4" gutterBottom>
            Dashboard
        </Typography>
        <TableContainer component={Paper}>
            <Table className='dashboard-table' aria-label="answers table" >
            <TableHead>
                <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Question</TableCell>
                <TableCell>Answer</TableCell>
                <TableCell>Input field</TableCell>
                <TableCell>Date</TableCell>
                </TableRow>
            </TableHead>
            <TableBody >
                {answers.map((answer, index) => (
                    <TableRow key={answer._id + index}>
                        <TableCell>{index}</TableCell>
                        <TableCell>{question ? question.question  : 'No question found'}</TableCell>
                        <TableCell>{typeof answer.answer === 'object' ? JSON.stringify(answer.answer) : answer.answer}</TableCell>
                        <TableCell>{answer && answer.input 
                                        ? answer.input.length > 7 
                                            ? `${answer.input.slice(0, 7)}...` 
                                            : answer.input
                                        : ''}</TableCell>
                        <TableCell>{new Date(answer.date).toLocaleString()}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    </Box>
        
  )
}

export default Dashboard