import React, { useState } from 'react';
import logoimage from '../assets/front-logo.png';
// import LocationCityIcon from '@mui/icons-material/LocationCity';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './Stylescss.scss';
import { SvgIcon } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function FrontPage_Location() {
const navigate=useNavigate();
function handelclick()
{
      navigate('/home');
}

  const [City, setCity] = React.useState('');
  const [Place, setplace] = React.useState('');
  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };
  const handleChangePlace = (event) => {
    setplace(event.target.value);
  };

  return (
    <>
      <div className='container'>
      <img src={logoimage} alt="logo image..." /> 
      <h3>Select Your Order Type </h3> 
      <div></div>
      <button>Deliver</button>
      <button>Take-away</button>
      <button>Dinning</button>
      <h3>Please Select Your Location </h3>
     <div className='location_button_margin'>
        <button>Location</button></div>
        <br></br>
        <div  className='above_select_box'>
      <Box sx={{ minWidth: 10 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label1" required>City</InputLabel>
        <Select
          labelId="demo-simple-select-label1"
          id="demo-simple-select1"
          value={City}
          label="City"
          onChange={handleChangeCity}
        >
          <MenuItem value={"lahore"}>Lahore</MenuItem>
          <MenuItem value={"karachi"}>Karachi</MenuItem>
          <MenuItem value={"islamabad"}>islamabad</MenuItem>
        </Select>
        </FormControl>
     
    </Box>
    <br></br>
        <Box sx={{ minWidth: 10 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label2" required>Place</InputLabel>
        <Select
          labelId="demo-simple-select-label2"
          id="demo-simple-select2"
          value={Place}
          label="Place"
          onChange={handleChangePlace}
        >
          <MenuItem value={"Ghari shahu"}>Ghari shahu</MenuItem>
          <MenuItem value={"Model Town"}>Model Town</MenuItem>
          <MenuItem value={"Johar Town"}>Johar Town</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
    <br></br>
  
        <button className='Select_button_margin' onClick={handelclick} >Select</button>
        
      </div>
      
    </>
  );
}

export default FrontPage_Location;
