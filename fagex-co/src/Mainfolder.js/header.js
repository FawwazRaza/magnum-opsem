
import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Cookies from 'js-cookie';
import PlaceIcon from '@mui/icons-material/Place';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SvgIcon from '@mui/material/SvgIcon';
import Badge from '@mui/material/Badge';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Backdrop from '@mui/material/Backdrop';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CartComponent from './cart';
import logoimage from '../assets/front-logo.png';
import Frontpage from './frontpage.js';
import Search from './searchPage.js';
import './header_css.scss';
import { userContext} from "../App"

function HeaderComponent(props) {
  const background_color_var = Cookies.get('background_color');
  const text_color_var = Cookies.get('text_color');
  const side_block_color_var = Cookies.get('side_block_color');
  const Border_bottom_var = Cookies.get('Border_bottom');
  const Border_Radius_var = Cookies.get('Border_Radius');
  const location_start_header_var = Cookies.get('location_start_header');
  const logo_start_header_var = Cookies.get('logo_start_header');
  const last4_start_header_var = Cookies.get('last4_start_header');
  const logoinput_var = Cookies.get('logoinput');
  const {forcart,setcityforcart} = useContext(userContext);

  const [open, setOpen] = React.useState(false);
  const [Cart, setOpenCart] = React.useState(false);
  const [isSearchOpen, setOpenSearch] = React.useState(false);

// Utility function to determine selected position based on input
function getPositionState(selectedPosition, currentPosition) {
  return selectedPosition === currentPosition;
}
const isLocationStart = getPositionState(location_start_header_var, "start");
const isLocationCenter = getPositionState(location_start_header_var, "center");
const isLocationEnd = getPositionState(location_start_header_var, "end");

// Logo div positioning
const isLogoStart = getPositionState(logo_start_header_var, "start");
const isLogoCenter = getPositionState(logo_start_header_var, "center");
const isLogoEnd = getPositionState(logo_start_header_var, "end");

// Last 3 buttons div positioning
const isLast3ButtonsStart = getPositionState(last4_start_header_var, "start");
const isLast3ButtonsCenter = getPositionState(last4_start_header_var, "center");
const isLast3ButtonsEnd = getPositionState(last4_start_header_var, "end");



useEffect(() => {
  if (sessionStorage.getItem('City') == null || sessionStorage.getItem('Branch') == "") {
    setOpen(true);
  }
  else{
    setOpen(false);
  }
  }, []);
  const handleOpen = () => {
    setOpen(true);
  };



  const handleOpenCart = () => {
    setOpenCart(true);
  };

  const handleOpenSearch = () => {
    setOpenSearch(true);
  };

  return (
    <>
      <div className="navbar" style={{ backgroundColor: background_color_var, color: text_color_var, borderBottom: Border_bottom_var }}>
        {isLogoStart&&<img src={logoinput_var} className='header_image' />}

       { isLocationStart&&<div>
        <div className='center_location'>
                <LocationOnIcon style={{height:"40px",width:"40px"}} />
                  <h6>Deliver to<span style={{fontSize:"13px"}}><p style={{marginTop:"10px"}}>{sessionStorage.getItem('City')} , {sessionStorage.getItem('Branch')}</p></span></h6>
            </div>
         </div>}

       {isLast3ButtonsStart&& <div className='last3buttons' style={{ borderRadius: Border_Radius_var, background: side_block_color_var }}>
          <div className='btn2'><a href="#" className="right" style={{ color: text_color_var }} onClick={handleOpenCart}><Badge badgeContent={props.count} color="primary"><ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} /></Badge></a></div>
          <div className='btn3'><a href="#" className="right" style={{ color: text_color_var }}><SearchRoundedIcon sx={{ fontSize: 30 }} onClick={handleOpenSearch} /></a></div>
          <div className='btn3'><a href="#" className="right" style={{ color: text_color_var }} onClick={handleOpen}><LocationOnIcon sx={{ fontSize: 30 }} /></a></div>

          <div className='blur'>
            <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
            >
              <Frontpage setOpen={setOpen} />
            </Backdrop>
          </div>

          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 3 }}
            open={Cart}
            onClick={()=> setOpenCart(false)}
          >

            {Cart ? (
    <CartComponent
      setOpenCart={setOpenCart}
      count={props.count}
      // cartdata={forcart}
      // setforcart={props.setcityforcart} 
    />
  ) : null}
          </Backdrop>

          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 2 }}
            open={isSearchOpen}
          >
            <Search setOpenSearch={setOpenSearch} />
          </Backdrop>

          <div className='btn3'><a href="http://localhost:3000/" className="right" style={{ color: text_color_var }}><AccountCircleOutlinedIcon sx={{ fontSize: 30 }} /></a></div>
        </div>}
        {isLogoCenter&&<img src={logoinput_var} className='header_image' />}

       { isLocationCenter&&<div>
        <div className='center_location'>
                <LocationOnIcon style={{height:"40px",width:"40px"}} />
                  <h6>Deliver to<span style={{fontSize:"13px"}}><p style={{marginTop:"10px"}}>{sessionStorage.getItem('City')} , {sessionStorage.getItem('Branch')}</p></span></h6>
            </div>
         </div>}

       {isLast3ButtonsCenter&& <div className='last3buttons' style={{ borderRadius: Border_Radius_var, background: side_block_color_var }}>
          <div className='btn2'><a href="#" className="right" style={{ color: text_color_var }} onClick={handleOpenCart}><Badge badgeContent={props.count} color="primary"><ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} /></Badge></a></div>
          <div className='btn3'><a href="#" className="right" style={{ color: text_color_var }}><SearchRoundedIcon sx={{ fontSize: 30 }} onClick={handleOpenSearch} /></a></div>
          <div className='btn3'><a href="#" className="right" style={{ color: text_color_var }} onClick={handleOpen}><LocationOnIcon sx={{ fontSize: 30 }} /></a></div>

          <div className='blur'>
            <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
            >
              <Frontpage setOpen={setOpen} />
            </Backdrop>
          </div>

          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 3 }}
            open={Cart}
            onClick={()=> setOpenCart(false)}
          >
            {Cart ? <CartComponent setOpenCart={setOpenCart} count={props.count} /> : null}
          </Backdrop>

          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 2 }}
            open={isSearchOpen}
          >
            <Search setOpenSearch={setOpenSearch} />
          </Backdrop>

          <div className='btn3'><a href="http://localhost:3000/" className="right" style={{ color: text_color_var }}><AccountCircleOutlinedIcon sx={{ fontSize: 30 }} /></a></div>
        </div>}
        {isLogoEnd&&<img src={logoinput_var} className='header_image' />}

       { isLocationEnd&&<div>
        <div className='center_location'>
                <LocationOnIcon style={{height:"40px",width:"40px"}} />
                  <h6>Deliver to<span style={{fontSize:"13px"}}><p style={{marginTop:"10px"}}>{sessionStorage.getItem('City')} , {sessionStorage.getItem('Branch')}</p></span></h6>
            </div>
         </div>}
       {isLast3ButtonsEnd&& <div className='last3buttons' style={{ borderRadius: Border_Radius_var, background: side_block_color_var }}>
          <div className='btn2'><a href="#" className="right" style={{ color: text_color_var }} onClick={handleOpenCart}><Badge badgeContent={props.count} color="primary"><ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} /></Badge></a></div>
          <div className='btn3'><a href="#" className="right" style={{ color: text_color_var }}><SearchRoundedIcon sx={{ fontSize: 30 }} onClick={handleOpenSearch} /></a></div>
          <div className='btn3'><a href="#" className="right" style={{ color: text_color_var }} onClick={handleOpen}><LocationOnIcon sx={{ fontSize: 30 }} /></a></div>

          <div className='blur'>
            <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
            >
              <Frontpage setOpen={setOpen} />
            </Backdrop>
          </div>

          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 3 }}
            open={Cart}
            onClick={()=> setOpenCart(false)}
          >
            {Cart ? <CartComponent setOpenCart={setOpenCart} count={props.count} setCount={props.setCount} /> : null}
          </Backdrop>

          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 2 }}
            open={isSearchOpen}
          >
            <Search setOpenSearch={setOpenSearch} />
          </Backdrop>

          <div className='btn3'><a href="http://localhost:3000/" className="right" style={{ color: text_color_var }}><AccountCircleOutlinedIcon sx={{ fontSize: 30 }} /></a></div>
        </div>}
      </div>
    </>
  );
}

export default HeaderComponent;
