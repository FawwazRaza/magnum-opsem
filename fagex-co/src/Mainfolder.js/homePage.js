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
import CartComponent from './cart';
import { useContext,createContext } from 'react';
import { Typography } from '@mui/material';
export const usercontext=createContext();
function Home(props){
var obj=[];
  const location = useLocation();
  const city = location.state?.city || ''; 
  const branch = location.state?.branch || ''; 

  const [count, setCount] = React.useState(0);
  const [forcart, setcityforcart] = React.useState([]);

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
        <usercontext.Provider value={forcart}>
       <Header count={count} city={city} branch={branch}/>
       <Slider/>
       </usercontext.Provider>
{
  
  products?.categories?.map(category => (
    <>
      <div className='categories_heading'>
        {category?.name+":"}
      </div> 
        <MenuItem key={category?.id} value={category?.name}>
          
        {category?.products?.map(item=>(
            <MenuItem key={item?.id} value={item?.name} sx={{"&:hover": {backgroundColor: "transparent", }}} disableRipple disableFocusRipple> 
 <div className='card_home'>
  <div className="container_home">
    <img src={front} className='home_page_images'></img>
      <h4 className='h4_heading' ><b>{item?.name}</b></h4>
      <p>Description:</p>
  <Typography noWrap>{item?.description}</Typography>
    <p className='home_page_p'><b>{"Rs. "+item?.price}</b></p> 
    <button className='home_page_button'  aria-label="increase"
            onClick={() => {
              setCount(count + 1);
              setcityforcart((previous)=>([...previous,{id:item?.id,cat:category?.name,item_name:item?.name,price:item?.price}]));
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