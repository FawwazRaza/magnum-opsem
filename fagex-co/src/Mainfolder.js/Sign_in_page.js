import './Signincss.scss';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import LinearProgress from '@mui/joy/LinearProgress';
import Typography from '@mui/joy/Typography';
import { fontSize, fontWeight } from '@mui/system';
function Signin_page()
{
const [value, setValue] = React.useState('');
  const minLength = 12;
    return(
    <>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
    
      <Box className="frontboxcss">
        <form>      
      <div className='emailinput-fields'>
<label><span style={{fontWeight: "bold"}}>Email:</span></label><br></br>
<Input placeholder="Username@gmail.com" variant="outlined" type='email' />
</div>
<div className='password-input-fields'>
<label><span style={{fontWeight: "bold"}}>Password:</span></label><br></br>
<Input placeholder="Password..." variant="outlined" type='password'/>
</div>
</form>

   <div className='center_button'>
      <div class="center">
  <a href="#" class="button">
    <div class="button__line"></div>
    <div class="button__line"></div>
    <span class="button__text">Cancel</span>
  </a>

</div>
<div className='center-1'>
<a href="#" class="button">
    <div class="button__line"></div>
    <div class="button__line"></div>
    <span class="button__text">Sign In</span>
  </a>

</div>
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