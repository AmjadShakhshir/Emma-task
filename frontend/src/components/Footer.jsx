import { Box, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import '../../public/assets/styles/footer.scss';

const Footer = () => {
  return (
    <Box component={'footer'} className="footer">
        {/* icons */}
        <Box component={'div'} className="icons">
            <FacebookIcon className="icon" />
            <InstagramIcon className="icon" />
            <TwitterIcon className="icon" />
        </Box>
        <hr />
        <Typography variant="h5" className="footer-text">
            @2024 Quiz Buzz
        </Typography>
    </Box>
  )
}

export default Footer