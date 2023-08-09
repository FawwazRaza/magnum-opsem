// import * as React from 'react';
// import { useState,useEffect } from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Input from '@mui/joy/Input'; 
// import './signin_css.scss';
// import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
// function Signin_page()
// {

//   const front_block_color_signin_var=Cookies.get('front_block_color_signin');
//   const front_block_text_color_var=Cookies.get('front_block_text_color');
//   const Back_block_text_color_var=Cookies.get('Back_block_text_color');
//   const background_color_sign_in_var=Cookies.get('background_color_sign_in');
//   const front_Border_Radius_signin_var=Cookies.get('front_Border_Radius_signin');
//   const front_Border_bottom_signin_var=Cookies.get('front_Border_bottom_signin');
//   const navigate=useNavigate();
//   const[email,setemail]=useState('');
//   const[password,setpassword]=useState('');
//   const email_ids=[
//     "name@gmail.com",
//    "Abcde123.",
//     "user2@gmail.com",
//   "Abcde1233.",
//   ]
//   const handelemail_pass=()=>
//   {
//     if(!email.localeCompare(email_ids[0]) && !password.localeCompare(email_ids[1]))
//     {
//       sessionStorage.setItem('Signin_page',true)
//        navigate('/home')
//     }
//   }
//   const navigate2=useNavigate();
//   useEffect(()=>{
//       let login=sessionStorage.getItem('Signin_page');
//       if(login)
//       {
//           navigate2('/admin')
//       }
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();}
 
//     return(
//     <>
  
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="md" >
//       <Box className="frontboxcss" style={{backgroundColor:front_block_color_signin_var,borderRadius:front_Border_Radius_signin_var,border:front_Border_bottom_signin_var}}>
//         <form onSubmit={handleSubmit}>      
//       <div className='emailinput-fields'>
// <label><span style={{fontWeight: "bold",color:front_block_text_color_var}}>Email:</span></label><br></br>
// <Input placeholder="Username@gmail.com" variant="outlined" type='email' id='email' name='email' value={email} onChange={(e) => setemail(e.target.value)}
//  required/>
// </div>
// <div className='password-input-fields'>
// <label><span style={{fontWeight: "bold",color:front_block_text_color_var}}>Password:</span></label><br></br>
// <Input placeholder="Password..." variant="outlined" id='password' name='password' type='password' value={password} onChange={(e) => setpassword(e.target.value)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
// </div>
// <br></br>
// <hr></hr>

// </form>

//    <div className='center_button'>
//       <div className="center">
//   <a href="#"  className="button">
//     <div className="button__line"></div>
//     <div className="button__line"></div>
//     <span className="button__text" >Cancel</span>
//   </a>

// </div>
// <div className='center-1'>
// <a href="#" onClick={handelemail_pass} className="button">
//     <div className="button__line"></div>
//     <div className="button__line"></div>
//     <span className="button__text">Sign In</span>
//   </a>
// </div>
// </div>

//       </Box>
//        <Box className="boxcss" style={{backgroundColor:background_color_sign_in_var,borderRadius:front_Border_Radius_signin_var,border:front_Border_bottom_signin_var}}>
//        <h1 className='sign_in_h1'style={{color:Back_block_text_color_var}}>Customer Login</h1>
//         <p className='sign_in_h1' style={{color:Back_block_text_color_var}}>Please Login to our website in order to avail all features.</p>
//        </Box>
      
//       </Container>
//     </React.Fragment>
   
//     </>
//     )
// }
// export default Signin_page;
import * as React from 'react';
import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Input from '@mui/joy/Input';
import './signin_css.scss';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Signin_page() {
  const front_block_color_signin_var = Cookies.get('front_block_color_signin');
  const front_block_text_color_var = Cookies.get('front_block_text_color');
  const Back_block_text_color_var = Cookies.get('Back_block_text_color');
  const background_color_sign_in_var = Cookies.get('background_color_sign_in');
  const front_Border_Radius_signin_var = Cookies.get('front_Border_Radius_signin');
  const front_Border_bottom_signin_var = Cookies.get('front_Border_bottom_signin');
  
  const navigate = useNavigate();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  
  const email_ids = [
    "name@gmail.com",
    "Abcde123.",
    "user2@gmail.com",
    "Abcde1233.",
  ];
  
  const handelemail_pass = () => {
    if (!email.localeCompare(email_ids[0]) && !password.localeCompare(email_ids[1])) {
      sessionStorage.setItem('Signin_page', true);
      navigate('/home');
    }
  };
  
  const navigate2 = useNavigate();
  useEffect(() => {
    let login = sessionStorage.getItem('Signin_page');
    if (login) {
      navigate2('/admin');
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <Box className="frontboxcss" style={{ backgroundColor: front_block_color_signin_var, borderRadius: front_Border_Radius_signin_var, border: front_Border_bottom_signin_var }}>
            <form onSubmit={handleSubmit}>
              <div className='emailinput-fields'>
                <label><span style={{ fontWeight: "bold", color: front_block_text_color_var }}>Email:</span></label><br />
                <Input placeholder="Username@gmail.com" variant="outlined" type='email' id='email' name='email' value={email} onChange={(e) => setemail(e.target.value)} required />
              </div>
              <div className='password-input-fields'>
                <label><span style={{ fontWeight: "bold", color: front_block_text_color_var }}>Password:</span></label><br />
                <Input placeholder="Password..." variant="outlined" id='password' name='password' type='password' value={password} onChange={(e) => setpassword(e.target.value)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
              </div>
              <br />
              <hr />
            </form>

            <div className='center_button'>
              <div className="center">
                <a href="#" className="button">
                  <div className="button__line"></div>
                  <div className="button__line"></div>
                  <span className="button__text">Cancel</span>
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

          <Box className="boxcss" style={{ backgroundColor: background_color_sign_in_var, borderRadius: front_Border_Radius_signin_var, border: front_Border_bottom_signin_var }}>
            <h1 className='sign_in_h1' style={{ color: Back_block_text_color_var }}>Customer Login</h1>
            <p className='sign_in_h1' style={{ color: Back_block_text_color_var }}>Please Login to our website in order to avail all features.</p>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}

export default Signin_page;
