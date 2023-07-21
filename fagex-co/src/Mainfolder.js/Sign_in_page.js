import * as React from 'react';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Input from '@mui/joy/Input'; 
import './Signincss.scss';
import HOME from './Home_page';
import { useNavigate } from 'react-router-dom';
function Signin_page()
{
  const navigate=useNavigate();
  const[email,setemail]=useState('');
  const[password,setpassword]=useState('');
  const email_ids=[
    "name@gmail.com",
   "Abcde123.",
    "user2@gmail.com",
  "Abcde1233.",
  ]
  function handelemail_pass()
  {
    if(!email.localeCompare(email_ids[0]) && !password.localeCompare(email_ids[1]))
    {
      navigate('/location')
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();}
 
    return(
    <>
  
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
      <Box className="frontboxcss">
        <form onSubmit={handleSubmit}>      
      <div className='emailinput-fields'>
<label><span style={{fontWeight: "bold"}}>Email:</span></label><br></br>
<Input placeholder="Username@gmail.com" variant="outlined" type='email' id='email' name='email' value={email} onChange={(e) => setemail(e.target.value)}
 required/>
</div>
<div className='password-input-fields'>
<label><span style={{fontWeight: "bold"}}>Password:</span></label><br></br>
<Input placeholder="Password..." variant="outlined" id='password' name='password' type='password' value={password} onChange={(e) => setpassword(e.target.value)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
</div>
<br></br>
<hr></hr>

</form>

   <div className='center_button'>
      <div className="center">
  <a href="#"  className="button">
    <div className="button__line"></div>
    <div className="button__line"></div>
    <span className="button__text" >Cancel</span>
  </a>

</div>
<div className='center-1'>
<a href="#" onClick={handelemail_pass} className="button">
    <div className="button__line"></div>
    <div className="button__line"></div>
    <span className="button__text">Sign In</span>
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