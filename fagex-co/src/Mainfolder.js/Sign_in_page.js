import './Signincss.scss';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Signin_page()
{

    return(
    <>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
      <Box className="frontboxcss">
      <div class="center">
  <a href="#" class="button">
    <div class="button__line"></div>
    <div class="button__line"></div>
    <span class="button__text">Submit</span>
  </a>

</div>
<div className='center-1'>
<a href="#" class="button">
    <div class="button__line"></div>
    <div class="button__line"></div>
    <span class="button__text">Cancel</span>
  </a>

</div>

      </Box>
       <Box className="boxcss">
       <h1>Customer Login</h1>
        <p>Please Login to our website in order to avail all features.</p>
       </Box>
      
      </Container>
    </React.Fragment>
    </>
    )
}
export default Signin_page;