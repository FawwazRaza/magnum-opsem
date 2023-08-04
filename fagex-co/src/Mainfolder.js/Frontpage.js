import React, { useState } from 'react';
import logoimage from '../assets/front-logo.png';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import branches from '../dataBase/branchesData.json';
import citiesdata from '../dataBase/cities.json';
import './style_css.scss';
import { SvgIcon } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Home from './homePage';
import Header from './header.js'
function FrontPage_Location(props) {

 
const navigate=useNavigate();
const handelclick = () => {
  props.setOpen(false);
  navigate('/home', { state: { city: City, branch: Branch } });
};

  const [City, setCity] = useState('');
  const [Branch, setbranch] =useState('');
  const handleChangeCity = (event) => {
    setCity(event.target.value);
    sessionStorage.setItem('City',event.target.value)
  };
  const handleChangeBranch = (event) => {
    setbranch(event.target.value);
    sessionStorage.setItem('Branch',event.target.value)
  };
  return (
    <>


      <div className='container_frontpage'>
      <img src={logoimage} alt="logo image..." className='location_logo'/> 
      <h3 className='h3_css'>Select Your Order Type </h3> 
      <div></div>
      <button className='front_page_button'>Deliver</button>
      <button className='front_page_button'>Take-away</button>
      <button className='front_page_button'>Dinning</button>
      <h3 className='h3_css'>Please Select Your Location </h3>
     <div className='location_button_margin'>
        <button className='front_page_button_use_location'> <LocationCityIcon/> Use Location</button></div>
        <br></br>
        <div  className='above_select_box'>
      <Box sx={{ minWidth: 10 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label1" required>City</InputLabel>
        <Select
          
          value={City}
          onChange={handleChangeCity}
        >

{
  
    citiesdata?.data?.map(city => (
          <MenuItem key={city?.id} value={city?.cityId}>
            {city?.cityId}
          </MenuItem>
        ))}

        </Select>
        </FormControl>
     
    </Box>
    <br></br>
        <Box sx={{ minWidth: 10 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label2" required>branches</InputLabel>
        <Select
         
          value={Branch}
          onChange={handleChangeBranch}
        >
         {
  
  branches?.Branches?.map(branch => 
    {
     if(City==branch?.cityId){
        return(
        <MenuItem key={branch?.id} value={branch?.branchLocation}>
          {  branch?.branchLocation}
        </MenuItem>
      )
        }
             }
      )}
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
