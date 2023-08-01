
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
function HeaderComponent(props)
{
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {

      setOpen(false);
    };
    const handleOpen = () => {
      setOpen(true);
    };
    return(
        <>
      
        <div className="navbar">
<img src={logoimage} className='header_image'/>
<div>
<div className='center_location'>
 <div className='location_icon_center'> <LocationOnIcon  /></div>
  <p>{props.city}<span><p>{props.branch}</p></span></p>
{/* <p>{props.city}</p> */}
  </div>
  
  </div>
  <div className='last3buttons'>
  <div className='btn2'><a href="#" className="right" ><Badge badgeContent={props.count} color="primary"><ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} /></Badge></a></div>
  <div className='btn3'><a href="http://localhost:3000/search" className="right" ><SearchRoundedIcon sx={{ fontSize: 30 }} /></a></div>
  <div className='btn3'><a href="#" className="right" ><LocationOnIcon sx={{ fontSize: 30 }} onClick={handleOpen}/></a></div>



<div> <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        
    //  onClick={handleClose}
      >
        <Frontpage setOpen={setOpen} />
      </Backdrop>
      </div>


  <div className='btn3'><a href="http://localhost:3000/" className="right" ><AccountCircleOutlinedIcon sx={{ fontSize: 30 }}  /></a></div>
  </div>
  </div>
        </>
    )
}
export default HeaderComponent;