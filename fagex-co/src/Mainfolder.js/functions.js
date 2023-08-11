/*<button  aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}> */
              {/* {categoryfromapi?.map(category => (
        <>
          <div className='categories_heading' style={{ background: Category_block_color_home_var }}>
            {category?.name + ":"}
          </div>
          <MenuItem key={category?.id} value={category?.name}>
          {/* sort((a, b) =>
    a.product_name > b.product_name ? 1 : -1,) */}
          
          
        {/*  {category?.products.map(item => (
              <MenuItem
                key={item?.product_id}
                value={item?.product_name}
                sx={{"&:hover": { backgroundColor: "transparent" }}}
                disableRipple
                disableFocusRipple
              >
                <div className='card_home'>
                  <div className="container_home" style={{ background: background_color_home_var, color: text_color_home_var, border: Border_bottom_home_var, borderRadius: Border_Radius_home_var }}>
                    <img src={front} className='home_page_images' alt="Product" />
                    <h4 className='h4_heading'><b>{item?.product_name}</b></h4>
                    <p>Description:</p>
                    <Typography noWrap>{item?.product_description}</Typography>
                    <p className='home_page_p'><b>{"Rs. " + item?.product_price}</b></p>
                    <button
                      className='home_page_button'
                      aria-label="increase"
                      style={{ background: background_color_home_button_var, borderRadius: Border_Radius_home_button_var, border: Border_bottom_home_button_var }}
                      onClick={() => {
                        setCount(count + 1);
                        setcityforcart(previous => ([...previous, { id: item?.product_id, cat: category?.name, item_name: item?.product_name, price: item?.product_price }]));
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </MenuItem>
            ))}
          </MenuItem>
        </>
      ))} */}


// import * as React from 'react';
// import PlaceIcon from '@mui/icons-material/Place';
// import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
// import SvgIcon from '@mui/material/SvgIcon';
// import logoimage from '../assets/front-logo.png';
// import Badge from '@mui/material/Badge';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import './header_css.scss';
// import Frontpage from './frontpage.js'
// import Backdrop from '@mui/material/Backdrop';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { useNavigate } from 'react-router-dom';
// import CartComponent from './cart';
// import { useContext } from 'react';
// import { usercontext } from './homePage';
// import Search from './searchPage.js';
// import Cookies from 'js-cookie';
// function HeaderComponent(props)
// {
//   const background_color_var=Cookies.get('background_color');
//   const text_color_var=Cookies.get('text_color');
//   const side_block_color_var=Cookies.get('side_block_color');
//   const Border_bottom_var=Cookies.get('Border_bottom');
//   const Border_Radius_var=Cookies.get('Border_Radius');
//   const forcart =useContext(usercontext)
//     const [open, setOpen] = React.useState(false);
//     const [Cart, setOpenCart] = React.useState(false);
//     const [isSearchOpen, setOpenSearch] = React.useState(false);
//     const handleClose = () => {

//       setOpen(false);
//     };
//     const handleOpen = () => {
//       setOpen(true);
//     };
//     const handleCloseCart = () => {

//       setOpenCart(false);
//     };
//     const handleOpenCart = () => {
//       setOpenCart(true);
//     };
//     const handleOpenSearch = () => {
//       setOpenSearch(true);
//     };
//     return(
//         <>
      
//         <div className="navbar" style={{backgroundColor:background_color_var, color:text_color_var,borderBottom:Border_bottom_var}}>
// <img src={logoimage} className='header_image'/>
// <div>
// <div className='center_location'>
//    <LocationOnIcon style={{height:"40px",width:"40px"}} />
//    <h6>Deliver to<span style={{fontSize:"13px"}}><p style={{marginTop:"10px"}}>{sessionStorage.getItem('City')} , {sessionStorage.getItem('Branch')}</p></span></h6>
// {/*   
//    {props.city} , {props.branch} */}
//   </div>
  
//   </div>
//   <div className='last3buttons' style={{borderRadius:Border_Radius_var, background:side_block_color_var}} >
//   <div className='btn2'><a href="#" className="right"   style={{ color:text_color_var}} onClick={handleOpenCart}><Badge badgeContent={props.count} color="primary"><ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} /></Badge></a></div>
//   <div className='btn3'><a href="#" className="right" style={{ color:text_color_var}}><SearchRoundedIcon sx={{ fontSize: 30 }} onClick={handleOpenSearch}/></a></div>
//   <div className='btn3'><a href="#" className="right" style={{ color:text_color_var}} onClick={handleOpen}><LocationOnIcon sx={{ fontSize: 30 }} /></a></div>



//   <div className='blur'> <Backdrop
//         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         open={open}
        
//       >
//         <Frontpage setOpen={setOpen} />
//       </Backdrop>
//       </div>
 

//       <Backdrop
//         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 3 }}
//         open={Cart}
        
//       >
//         {Cart==true? <CartComponent setOpenCart={setOpenCart} cartdata={forcart} />:null}
//       </Backdrop>
     
//       <Backdrop
//   sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 2 }}
//   open={isSearchOpen}
// >
//   <Search setOpenSearch={setOpenSearch}/>
// </Backdrop>


      
//   <div className='btn3'><a href="http://localhost:3000/" className="right" style={{ color:text_color_var}}><AccountCircleOutlinedIcon sx={{ fontSize: 30 }}  /></a></div>
//   </div>
//   </div>
//         </>
//     )
// }
// export default HeaderComponent;


// import * as React from 'react';
// import { useState } from 'react';
// import products from '../dataBase/productsFile.json';
// import MenuItem from '@mui/material/MenuItem';
// import Badge from '@mui/material/Badge';
//  import './home_page_css.scss';
// import front from '../assets/front-background.jpg';
// import Header from './header.js';
// import Footer from './footer';
// import Slider from './slider.js';
//  import FrontPage from './frontpage.js'
//  import { useLocation } from 'react-router-dom';
// import CartComponent from './cart';
// import { useContext,createContext } from 'react';
// import { Typography } from '@mui/material';
// import Cookies from 'js-cookie';
// export const usercontext=createContext();
// function Home(props){

// const Category_block_color_home_var =Cookies.get('Category_block_color_home');
// const text_color_home_var =Cookies.get('text_color_home');
// const background_color_home_var =Cookies.get('background_color_home');
// const Border_Radius_home_var =Cookies.get('Border_Radius_home');
// const Border_bottom_home_var =Cookies.get('Border_bottom_home');
// const background_color_home_button_var =Cookies.get('background_color_home_button');
// const Border_Radius_home_button_var =Cookies.get('Border_Radius_home_button');
// const Border_bottom_home_button_var =Cookies.get('Border_bottom_home_button');



// var obj=[];
//   const location = useLocation();
//   const city = location.state?.city || ''; 
//   const branch = location.state?.branch || ''; 

//   const [count, setCount] = React.useState(0);
//   const [forcart, setcityforcart] = React.useState([]);

//     const [category, setcategory] = useState('');
//   const [product, setproduct] =useState('');
//   const handleCategory = (event) => {
//     setcategory(event.target.value);
//   };
//   const handlProduct = (event) => {
//     console.log(event)
//     setproduct(event.target.value);
//   };
 

//     return(
      
//         <>
//         <usercontext.Provider value={forcart}>
//        <Header count={count} city={city} branch={branch}/>
//        <Slider/>
//        </usercontext.Provider>
// {
  
//   products?.categories?.map(category => (
//     <>
//       <div className='categories_heading' style={{background:Category_block_color_home_var}}>
//         {category?.name+":"}
//       </div> 
//         <MenuItem key={category?.id} value={category?.name}>
          
//         {category?.products?.map(item=>(
//             <MenuItem key={item?.id} value={item?.name} sx={{"&:hover": {backgroundColor: "transparent", }}} disableRipple disableFocusRipple> 
//  <div className='card_home'>
//   <div className="container_home" style={{background:background_color_home_var,color:text_color_home_var,border:Border_bottom_home_var,borderRadius:Border_Radius_home_var}}>
//     <img src={front} className='home_page_images'></img>
//       <h4 className='h4_heading' ><b>{item?.name}</b></h4>
//       <p>Description:</p>
//   <Typography noWrap>{item?.description}</Typography>
//     <p className='home_page_p'><b>{"Rs. "+item?.price}</b></p> 
//     <button className='home_page_button'  aria-label="increase" style={{background:background_color_home_button_var,borderRadius:Border_Radius_home_button_var,border:Border_bottom_home_button_var}}
//             onClick={() => {
//               setCount(count + 1);
//               setcityforcart((previous)=>([...previous,{id:item?.id,cat:category?.name,item_name:item?.name,price:item?.price}]));
//             }}>Add to Cart</button>
//   </div>
//   </div>

//             </MenuItem>
//         ))}
        
//         </MenuItem>
//         </>
//       ))}

// <Footer/>
//        </>
//     )
// }
// export default Home;

// import React, { useState } from 'react';
// import logoimage from '../assets/front-logo.png';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import branches from '../dataBase/branchesData.json';
// import citiesdata from '../dataBase/cities.json';
// import './style_css.scss';
// import { SvgIcon } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import LocationCityIcon from '@mui/icons-material/LocationCity';
// import Home from './homePage';
// import Header from './header.js'
// import Cookies from 'js-cookie';
// function FrontPage_Location(props) {
//   const Deliver_Button_Color_front_page_var=Cookies.get('Deliver_Button_Color_front_page');
//   const text_color_front_page_var=Cookies.get('text_color_front_page');
//   const Take_Away_Button_Color_front_page_var=Cookies.get('Take_Away_Button_Color_front_page');
//   const Dinning_Button_Color_front_page_var=Cookies.get('Dinning_Button_Color_front_page');
//   const Use_Location_Button_Color_front_page_var=Cookies.get('Use_Location_Button_Color_front_page');
//   const Select_Button_Color_front_page_var=Cookies.get('Select_Button_Color_front_page');
//   const Border_Radius_front_page_var=Cookies.get('Border_Radius_front_page');
//   const Border_color_front_page_var=Cookies.get('Border_color_front_page');
//   const background_color_front_page_var=Cookies.get('background_color_front_page');
 
 
// const navigate=useNavigate();
// const handelclick = () => {
//   props.setOpen(false);
//   navigate('/home', { state: { city: City, branch: Branch } });
// };

//   const [City, setCity] = useState('');
//   const [Branch, setbranch] =useState('');
//   const handleChangeCity = (event) => {
//     setCity(event.target.value);
//     sessionStorage.setItem('City',event.target.value)
//   };
//   const handleChangeBranch = (event) => {
//     setbranch(event.target.value);
//     sessionStorage.setItem('Branch',event.target.value)
//   };
//   return (
//     <>


//       <div className='container_frontpage' style={{background:background_color_front_page_var}}>
//       <img src={logoimage} alt="logo image..." className='location_logo'/> 
//       <h3 className='h3_css'>Select Your Order Type </h3> 
//       <div></div>
//       <button className='front_page_button' style={{background:Deliver_Button_Color_front_page_var,color:text_color_front_page_var,borderRadius:Border_Radius_front_page_var,border:Border_color_front_page_var}}>Deliver</button>
//       <button className='front_page_button' style={{background:Take_Away_Button_Color_front_page_var,color:text_color_front_page_var,borderRadius:Border_Radius_front_page_var,border:Border_color_front_page_var}}>Take-away</button>
//       <button className='front_page_button' style={{background:Dinning_Button_Color_front_page_var,color:text_color_front_page_var,borderRadius:Border_Radius_front_page_var,border:Border_color_front_page_var}}>Dinning</button>
//       <h3 className='h3_css'>Please Select Your Location </h3>
//      <div className='location_button_margin'>
//         <button className='front_page_button_use_location' style={{background:Use_Location_Button_Color_front_page_var,color:text_color_front_page_var,borderRadius:Border_Radius_front_page_var,border:Border_color_front_page_var}}> <LocationCityIcon/> Use Location</button></div>
//         <br></br>
//         <div  className='above_select_box'>
//       <Box sx={{ minWidth: 10 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label1" required>City</InputLabel>
//         <Select
          
//           value={City}
//           onChange={handleChangeCity}
//         >

// {
  
//     citiesdata?.data?.map(city => (
//           <MenuItem key={city?.id} value={city?.cityId}>
//             {city?.cityId}
//           </MenuItem>
//         ))}

//         </Select>
//         </FormControl>
     
//     </Box>
//     <br></br>
//         <Box sx={{ minWidth: 10 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label2" required>branches</InputLabel>
//         <Select
         
//           value={Branch}
//           onChange={handleChangeBranch}
//         >
//          {
  
//   branches?.Branches?.map(branch => 
//     {
//      if(City==branch?.cityId){
//         return(
//         <MenuItem key={branch?.id} value={branch?.branchLocation}>
//           {  branch?.branchLocation}
//         </MenuItem>
//       )
//         }
//              }
//       )}
//         </Select>
//       </FormControl>
//     </Box>
//     </div>
//     <br></br>
  
//         <button className='Select_button_margin' onClick={handelclick} style={{background:Select_Button_Color_front_page_var,color:text_color_front_page_var,borderRadius:Border_Radius_front_page_var,border:Border_color_front_page_var}}>Select</button>
        
//       </div>
      
//     </>
//   );
// }

// export default FrontPage_Location;

// import './admin_css.scss';
// import Header from './header';
// import Home from './homePage';
// import FrontPage_Location from './frontpage';
// import Footer from './footer';
// import Signin_page from './signinPage'
// import SliderComponent from './slider';
// import HeaderForAdmin from './filesforadmin/headerForAdmin';
// import HomeAdmin from './filesforadmin/homeForAdmin';
// import FrontPageAdmin from './filesforadmin/frontPageForAdmin';
// import FooterForAdmin from './filesforadmin/footerForAdmin';
// import SignInForAdmin from './filesforadmin/signInForAdmin';
// import SliderForAdmin from './filesforadmin/sliderForAdmin';


// import React, { useState } from 'react';
// function Admin()
// {
//     const [headers,setheader]=useState(false);
//     const [homes,sethome]=useState(false);
//     const [FrontPageAdmins,setFrontPageAdmin]=useState(false);
//     const [FooterForAdmins,setFooterForAdmin]=useState(false);
//     const [SignInForAdmins,setSignInForAdmin]=useState(false);
//     const [SliderForAdmins,setSliderForAdmin]=useState(false);
//     function handleheader(){
//         setheader(true);
//         sethome(false);
//         setFrontPageAdmin(false);
//         setFooterForAdmin(false);
//         setSignInForAdmin(false);
//         setSliderForAdmin(false);
//     }
//     function handleFrontPageAdmin(){
//         setheader(false);
//         sethome(false);
//         setFrontPageAdmin(true);
//         setFooterForAdmin(false);
//         setSignInForAdmin(false);
//         setSliderForAdmin(false);
//     }
//     function handleFooterForAdmin(){
//         setheader(false);
//         sethome(false);
//         setFrontPageAdmin(false);
//         setFooterForAdmin(true);
//         setSignInForAdmin(false);
//         setSliderForAdmin(false);
//     }
//     function handleSignInForAdmin(){
//         setheader(false);
//         sethome(false);
//         setFrontPageAdmin(false);
//         setFooterForAdmin(false);
//         setSignInForAdmin(true);
//         setSliderForAdmin(false);
//     }
//     function handleSliderForAdmin(){
//         setheader(false);
//         sethome(false);
//         setFrontPageAdmin(false);
//         setFooterForAdmin(false);
//         setSignInForAdmin(false);
//         setSliderForAdmin(true);
//     }
    
//     function handlehome(){
//         sethome(true);
//         setheader(false);
//         setFrontPageAdmin(false);
//         setFooterForAdmin(false);
//         setSignInForAdmin(false);
//         setSliderForAdmin(false);
//     }
//     return(
//         <> 
//          <div className='buttonS_admin'>
//             <button className='admin_btn' onClick={handleheader}>Header</button>
//             <button className='admin_btn' onClick={handlehome}>Home</button>
//             <button className='admin_btn' onClick={handleFrontPageAdmin}>FrontPage_Location</button>
//             <button className='admin_btn' onClick={handleFooterForAdmin}>Footer</button>
//             <button className='admin_btn' onClick={handleSignInForAdmin}>Signin_page</button>
//             <button className='admin_btn' onClick={handleSliderForAdmin}>SliderComponent</button>
//         </div>
//         <div className="admin_page">
//       <div>
//         {headers&&<HeaderForAdmin />}
//         {homes&&<HomeAdmin />}
//         {FrontPageAdmins&&<FrontPageAdmin/>}
//         {FooterForAdmins&&<FooterForAdmin />}
//         {SignInForAdmins&&<SignInForAdmin />}
//         {SliderForAdmins&&<SliderForAdmin />}
//       </div >
//         <div className='right_admin_section'>
//             {headers&&<Header />}</div>
//         <div>{homes&&<Home/>}</div>
//         <div>{FrontPageAdmins&&<FrontPage_Location/>}</div>
//         <div>{FooterForAdmins&&<Footer/>}</div>
//         <div>{SignInForAdmins&&<Signin_page/>}</div>
//         <div>{SliderForAdmins&&<SliderComponent/>}</div>
//         </div>
//         <button className='admin_btn' onClick={() => window.location.reload(false)}>Click for change!</button>
//         </>
//     )
// }
// export default Admin;


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
// import React from 'react';
// import {
//   MDBCarousel,
//   MDBCarouselItem,
// } from 'mdb-react-ui-kit';
// // import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
// // import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
// import pancake from '../assets/pancake.jpg';
// import tree from '../assets/tree.jpg';
// import food from '../assets/food.jpg';
// import './slider_css.scss';
// import Cookies from 'js-cookie'
//  function SliderComponent() {
//     return (
//         <div className='container_slider'>
//       <MDBCarousel showIndicators>
//         <div className='image_container'>
//         <MDBCarouselItem
//           className='w-100 d-block'
//           itemId={1}
//           src={pancake}
//           alt='...'
//         />
        
//         <MDBCarouselItem
//           className='w-100 d-block'
//           itemId={2}
//           src={tree}
//           alt='...'
          
//         />
//         <MDBCarouselItem
//           className='w-100 d-block'
//           itemId={3}
//           src={food}
//           alt='...'
//         />
//          </div>
//       </MDBCarousel>
     
//       </div>
      
//     );
//   }
//   export default SliderComponent;s



// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// const app = express();

// const bodyParser = require('body-parser');
// app.use(cors()); // Enable CORS for all routes

// // ... Rest of your code ...


// // MySQL database configuration
// const db = mysql.createConnection({
//   host: 'localhost', // Change to your MySQL host
//   user: 'root', // Change to your MySQL username
//   password: '', // Change to your MySQL password
//   database: 'fagex_co'
// });

// // Connect to the database
// db.connect(err => {
//   if (err) {
//     throw err;
//   }
//   console.log('Connected to MySQL database');
// });

// // Define a route to fetch and display category names
// app.get('/', (req, res) => {
//   const query = 'SELECT name FROM category';

//   db.query(query, (err, results) => {
//     if (err) {
//       res.status(500).json({ error: 'Error fetching data from database' });
//     } else {
//       const categoryNames = results.map(category => category.name);
//       res.json({ categories: categoryNames });
//     }
//   });
// });
// // Define a route to fetch and display products with their category names
// app.get('/products', (req, res) => {
//   const query = `
//     SELECT p.id AS product_id, p.name AS product_name, p.price AS product_price, p.description AS product_description,
//            c.name AS category_name
//     FROM products p
//     JOIN category c ON p.category_id = c.id
//   `;

//   db.query(query, (err, results) => {
//     if (err) {
//       console.error(err); // Log the error message
//       res.status(500).json({ error: 'Error fetching data from database' });
//     } else {
//       res.json({ products: results });
//     }
//   });
// });
// const PORT = 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// // Example in-memory "category" database
// const categoryData = [];

// app.use(bodyParser.json()); // Parse JSON request bodies

// // POST endpoint to add data to the "category" table
// app.post('/api/category', (req, res) => {
//   const { name } = req.body;

//   if (!name) {
//     return res.status(400).json({ error: 'Name is required' });
//   }

//   // Add data to the in-memory "category" database
//   categoryData.push({ name });

//   return res.status(201).json({ message: 'Data added successfully', category: { name } });
// });















// import * as React from 'react'; 
// import { useState } from 'react';
// import './cart_css.scss';
// import { useNavigate } from 'react-router-dom';
// import { MenuItem } from '@mui/base';
// import front from '../assets/food.jpg';
// import { Container, ButtonGroup, Button, TextField } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { blueGrey } from "@mui/material/colors";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import DeleteIcon from '@mui/icons-material/Delete';
// const StyledButton = styled(Button)(({ theme }) => ({
//     color: theme.palette.getContrastText(blueGrey[50]),
//     backgroundColor: blueGrey[50],
//     borderColor: blueGrey[200],
//     "&:hover": {
//       backgroundColor: blueGrey[100],
//       borderColor: blueGrey[300]
//     }
//   }));
  
//   const StyledInput = styled(TextField)({
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderRadius: 0,
//         borderColor: blueGrey[200]
//       },
//       "&:hover fieldset": {
//         borderColor: blueGrey[300]
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: blueGrey[500]
//       },
//       "& input": {
//         textAlign: "center",
//         width: 60,
//         color: blueGrey[700]
//       }
//     }
//   });

// function CartComponent(props)
// {
//   var countsameitem={};
//   var t={};
//   var result=[];
//     const [count, setCount] = useState(1);
//     const [delicon, setdelicon] = useState(true);
//     const [price, setprice] = useState(0);
//     const navigate=useNavigate();
//    const handleclickCheckout =()=>
//     {
//         props.setOpenCart(false);
//         navigate('/home');
//     };
//       const uniqueItems = [...new Set(props.cartdata.map(item => item.id))];

//     return(
//         <> {  props.cartdata.forEach(function(i) {
//           countsameitem[i.id] = (countsameitem[i.id]||0) + 1;
          
//         })}
//         <div style={{display:"none"}}>
//         {
//         t=Object.keys(countsameitem)
//         }
//         </div>
//         <div className='container_slide_left' >
//         <div  className='upper_container'>
//      <p>Your Cart</p>
//      <DeleteIcon className='delete_icon' onClick={()=>{
//       return(
//       <>
//       {setdelicon(false)}
//       </>
//       )
//       }} />       
//         </div>
    
//         <div className='middle_container'>

//   {delicon &&
//             uniqueItems.map((itemId, index) => {
//               const currentItem =props.cartdata.find(item => item.id === itemId);
//               const itemCount = countsameitem[itemId];
           
//               return (
//                 <div className='middle_container_flex' key={itemId}>
//                   <div className='image_middle_container_around'>
//                     <img src={front} className='image_middle_container' />
//                     <div className='image_top_left'>{itemCount}</div>
                  
//                   </div>
//                   <p>
//                     <div className='middle_container_inner'>
//                       <strong>{currentItem.cat}</strong>
//                       {currentItem.item_name}
//                       <Container style={{ marginTop: '10px' }}>
//                         <ButtonGroup>
//                         <StyledButton
//           onClick={() => setCount((prev) => prev - 1)}
//            disabled={count === 1}
//         >
//           <RemoveIcon fontSize="small"  />
//         </StyledButton>
//         <StyledButton onClick={() => setCount((prev) => prev + 1)}>
//           <AddIcon fontSize="small" />
//         </StyledButton>
//                         </ButtonGroup>
//                       </Container>
//                     </div>
//                   </p>
//                 </div>
//               );
//             })}
//         </div>
//         <div className='lower_container'>
//            <div className='lowercontainer_upper'> 
//             <p>Subtotal</p>
//             <p>Subtotal</p>
//             </div>
            
//             <div className='lowercontainer_mid'>
//             <p>Delivery Charges</p>
//             <p>Delivery Charges</p>
//             </div>
//            <div className='lowercontainer_low'>
//              <strong><p >Grand Total</p></strong>
//             <strong><p>Grand Total</p></strong>
//             </div>
//             <button className='checkout_button' onClick={handleclickCheckout}>Checkout</button>
//         </div>
       
      
//         </div>
//         </>
//     )
// }
// export default CartComponent;
















// import './footer_css.scss';
// import React from 'react';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GoogleIcon from '@mui/icons-material/Google';
// import Cookies from 'js-cookie';
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBIcon,
//   MDBBtn
// } from 'mdb-react-ui-kit';

// function Footer()
// {
//   const Bottom_block_color_footer_var=Cookies.get('Bottom_block_color_footer');
//   const text_color_footer_var=Cookies.get('text_color_footer');
//   const Border_Radius_footer_var=Cookies.get('Border_Radius_footer');
//     return(
//         <>
//         <div className='margin_above_space'>
//        <MDBFooter className='bg-light text-center text-white' >
//       <MDBContainer className='p-4 pb-0'  >
//         <section className='mb-4'>
//           <MDBBtn
//             floating
//             className='m-1'
//             style={{ backgroundColor: '#3b5998' }}
//             href='https://www.facebook.com/adaxiomtech/'
//             role='button'
//           >
//             <FacebookOutlinedIcon style={{marginTop:"6px"}}/>
//           </MDBBtn>

//           <MDBBtn
//             floating
//             className='m-1'
//             style={{ backgroundColor: '#55acee' }}
//             href='#!'
//             role='button'
//           >
//             <TwitterIcon style={{marginTop:"6px"}} />
//           </MDBBtn>

//           <MDBBtn
//             floating
//             className='m-1'
//             style={{ backgroundColor: '#dd4b39' }}
//             href='https://www.google.com/'
//             role='button'
//           >
//             <GoogleIcon style={{marginTop:"6px"}}/>
//           </MDBBtn>
//           <MDBBtn
//             floating
//             className='m-1'
//             style={{ backgroundColor: '#ac2bac' }}
//             href='#!'
//             role='button'
//           >
//             <InstagramIcon style={{marginTop:"6px"}}/>
//           </MDBBtn>

//           <MDBBtn
//             floating
//             className='m-1'
//             style={{ backgroundColor: '#0082ca' }}
//             href='https://www.linkedin.com/company/adaxiom/mycompany/'
//             role='button'
//           >
//            <LinkedInIcon style={{marginTop:"6px"}}/>
//            </MDBBtn>
//           <MDBBtn
//             floating
//             className='m-1'
//             style={{ backgroundColor: '#333333' }}
//             href='https://github.com/Fawwaz-rz/magnum-opsem/tree/main/fagex-co/src/Mainfolder.js'
//             role='button'
//           >
//         <GitHubIcon style={{marginTop:"6px"}} />
//           </MDBBtn>
//         </section>
//       </MDBContainer >

//       <div className='text-center p-3' style={{ backgroundColor: Bottom_block_color_footer_var ,color:text_color_footer_var,borderRadius:Border_Radius_footer_var}}>
//         © 2023 Copyright:
//         <a className='text-red' href='http://localhost:3000/home'>
//           Fagex-co.com
//         </a>
//       </div>
//     </MDBFooter>
//     </div>
//         </>
//     )
// }
// export default Footer;



















// import { Component } from "react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Protected(props)
// {
// const {Component}=props;
// const navigate=useNavigate();
// useEffect(()=>{
//     let login=sessionStorage.getItem('Signin_page');
//     if(!login)
//     {
//         navigate('/')
//     }
// });

//     return(
//         <>
//         <Component />
//         </>
//     )
// }
// export default Protected;