import { Box, List, Typography } from '@mui/material';

import '../../public/assets/styles/navbar.scss'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <Box component={'header'} className="navbar">
            <Box component={'div'} className="wrapper">
                <Box component={'div'} className="right">
                    <img src="../../public/assets/imgs/logo.png" />
                    <Typography className='navbar-title' component={'h2'} variant='h1'>
                        Quiz Buzz
                    </Typography>
                    </Box>
                <Box component={'div'} className="left">
                    <List component={'ul'} className='navbar-list'>
                        <Link to='/' className='navbar-item'>
                            <li>Home</li>
                        </Link>
                        <Link to='/dashboard' className='navbar-item'> 
                            <li>Dashboard</li>
                        </Link>
                    </List>
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar