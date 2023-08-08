
import * as React from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SvgIcon from '@mui/material/SvgIcon';
import logoimage from '../assets/front-logo.png';
import Badge from '@mui/material/Badge';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './header_css.scss';
import Frontpage from './frontpage.js'
import Backdrop from '@mui/material/Backdrop';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';
import CartComponent from './cart';
import { useContext } from 'react';
import { usercontext } from './homePage';
import Search from './searchPage.js';
function HeaderComponent(props)
{
  const background_color_var=localStorage.getItem('background_color');
  const text_color_var=localStorage.getItem('text_color');
  const side_block_color_var=localStorage.getItem('side_block_color');
  const Border_bottom_var=localStorage.getItem('Border_bottom');
  const Border_Radius_var=localStorage.getItem('Border_Radius');
  const forcart =useContext(usercontext)
    const [open, setOpen] = React.useState(false);
    const [Cart, setOpenCart] = React.useState(false);
    const [isSearchOpen, setOpenSearch] = React.useState(false);
    const handleClose = () => {

      setOpen(false);
    };
    const handleOpen = () => {
      setOpen(true);
    };
    const handleCloseCart = () => {

      setOpenCart(false);
    };
    const handleOpenCart = () => {
      setOpenCart(true);
    };
    const handleOpenSearch = () => {
      setOpenSearch(true);
    };
    return(
        <>
      
        <div className="navbar" style={{backgroundColor:background_color_var, color:text_color_var,borderBottom:Border_bottom_var}}>
<img src={logoimage} className='header_image'/>
<div>
<div className='center_location'>
   <LocationOnIcon style={{height:"40px",width:"40px"}} />
   <h6>Deliver to<span style={{fontSize:"13px"}}><p style={{marginTop:"10px"}}>{sessionStorage.getItem('City')} , {sessionStorage.getItem('Branch')}</p></span></h6>
{/*   
   {props.city} , {props.branch} */}
  </div>
  
  </div>
  <div className='last3buttons' style={{borderRadius:Border_Radius_var, background:side_block_color_var}} >
  <div className='btn2'><a href="#" className="right"   style={{ color:text_color_var}} onClick={handleOpenCart}><Badge badgeContent={props.count} color="primary"><ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} /></Badge></a></div>
  <div className='btn3'><a href="#" className="right" style={{ color:text_color_var}}><SearchRoundedIcon sx={{ fontSize: 30 }} onClick={handleOpenSearch}/></a></div>
  <div className='btn3'><a href="#" className="right" style={{ color:text_color_var}} onClick={handleOpen}><LocationOnIcon sx={{ fontSize: 30 }} /></a></div>



  <div className='blur'> <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        
      >
        <Frontpage setOpen={setOpen} />
      </Backdrop>
      </div>
 

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 3 }}
        open={Cart}
        
      >
        {Cart==true? <CartComponent setOpenCart={setOpenCart} cartdata={forcart} />:null}
      </Backdrop>
     
      <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 2 }}
  open={isSearchOpen}
>
  <Search setOpenSearch={setOpenSearch}/>
</Backdrop>


      
  <div className='btn3'><a href="http://localhost:3000/" className="right" style={{ color:text_color_var}}><AccountCircleOutlinedIcon sx={{ fontSize: 30 }}  /></a></div>
  </div>
  </div>
        </>
    )
}
export default HeaderComponent;