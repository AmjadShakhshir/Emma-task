import { Box, Button, Typography } from '@mui/material';
import '../../public/assets/styles/home.scss';
const Home = () => {
    return (
        <Box component={'main'} className="home">
            <Box component={'div'}>
                <Typography className='title' variant='h2' component={'h1'}>Welcome to Quiz Buzz</Typography>
                <Button className='home-btn' variant='contained' color='primary' href='/quiz'>Start Quiz</Button>
            </Box>
            <Box component={'div'}>
                <img className='home-img' src='https://images.pexels.com/photos/7092414/pexels-photo-7092414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='student-cheating-during-an-exam' />
            </Box>
        </Box>
    )
}

export default Home