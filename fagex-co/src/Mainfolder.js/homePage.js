import * as React from 'react';
import { useState } from 'react';
import products from '../dataBase/productsFile.json';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
 import './home_page_css.scss';
import front from '../assets/front-background.jpg';
import Header from './header.js';
import Footer from './footer';
import Slider from './slider.js';
 import FrontPage from './frontpage.js'














 import { useLocation } from 'react-router-dom';














function Home(props){


  const location = useLocation();
  const city = location.state?.city || ''; // Default to an empty string if not provided
  const branch = location.state?.branch || ''; // Default to an empty string if not provided

















  const [count, setCount] = React.useState(0);


    const [category, setcategory] = useState('');
  const [product, setproduct] =useState('');
  const handleCategory = (event) => {
    setcategory(event.target.value);
  };
  const handlProduct = (event) => {
    console.log(event)
    setproduct(event.target.value);
  };
 

    return(
      
        <>
       <Header count={count} city={city} branch={branch} />
       <Slider/>

{
  
  products?.categories?.map(city => (
    <>
     <div className='categories_heading'>
         {city?.name+":"}
         </div> 
         <hr></hr>
        <MenuItem key={city?.id} value={city?.name}>
          
         
         
        {city?.products?.map(call=>(
            <MenuItem key={call?.id} value={call?.name}> 
 <div className='card_home'>
  <div className="container_home">
    <img src={front} className='home_page_images'></img>
    <br></br><br></br><br></br><br></br><br></br>
    <hr></hr>   <h4><b>{call?.name}</b></h4> 
    <p className='home_page_p'><b>{"Rs. is "+call?.price}</b></p> 
    <button className='home_page_button'  aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}>Add to Cart</button>
  </div>
  </div>

            </MenuItem>
        ))}
        
        </MenuItem>
        </>
      ))}

<Footer/>
       </>
    )
}
export default Home;