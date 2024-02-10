import { Box, FormControl, Select, Typography, MenuItem, Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../../public/assets/styles/quiz.scss';
import { getQuestion } from '../common/reducers/quizReducer';
import { addAnswer } from '../common/reducers/answerReducer';

const Quiz = () => {
    const [answers, setAnswers] = useState('');
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const questions = useSelector((state) => state.quizReducer.questions);
    
    useEffect(() => {
        dispatch(getQuestion());
    }, [dispatch]);
    
    const handleChange = (event) => {
        setAnswers(event.target.value);
    };

    const handleInput = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addAnswer({ quizId: questions[0]._id, answer: answers, input: input}));
        navigate('/dashboard');
    }
  return (
    <Box component={'main'} className="quiz">
        <Box component={'div'}>
            <Typography className='quiz-title' variant='h2' component={'h1'}>Quiz</Typography>
            <form className='quiz-form'>
                <TextField id='quiz-title' label='Free Text' value={input} onChange={handleInput} variant='outlined' fullWidth />
                {questions.map((question, index) => (
                <Box component={'div'} className='quiz-question' key={question.id + index}>
                    <Typography className='quiz-subtitle' variant='h5' component={'h2'}>{question.question}</Typography>
                    <FormControl fullWidth>
                        <Select
                            className='quiz-select'
                            labelId='quiz-select-label'
                            id='quiz-select'
                            value={answers}
                            label='Answers'
                            onChange={handleChange}
                        >
                            <MenuItem value={question.options[0]}>{question.options[0]}</MenuItem>
                            <MenuItem value={question.options[1]}>{question.options[1]}</MenuItem>
                            <MenuItem value={question.options[2]}>{question.options[2]}</MenuItem>
                        </Select>
                    </FormControl>
                    <Box component={'div'} className='quiz-buttons'>
                        <Button
                            variant='contained'
                            className='quiz-submit'
                            color='primary'
                            type='submit'
                            onClick={handleSubmit}
                        >Submit</Button>
                        <Button
                            variant='contained'
                            className='quiz-submit'
                            color='secondary'
                            type='button'
                            onClick={() => navigate('/')}
                        >Back</Button>
                    </Box>
                </Box>
            ))}
            </form>
        </Box>
    </Box>
  )
}

export default Quiz