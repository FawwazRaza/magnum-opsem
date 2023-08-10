
import * as React from 'react';
import axios from "axios";
import { useState ,useEffect} from 'react';
import products from '../dataBase/productsFile.json';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import './home_page_css.scss';
import front from '../assets/front-background.jpg';
import Header from './header.js';
import Footer from './footer';
import Slider from './slider.js';
import FrontPage from './frontpage.js';
import { useLocation } from 'react-router-dom';
import CartComponent from './cart';
import { useContext, createContext } from 'react';
import { Typography } from '@mui/material';
import Cookies from 'js-cookie';

export const usercontext = createContext();
const baseURL = "http://localhost:3001/";
const productsbaseURL = "http://localhost:3001/products";

function Home(props) {

  const Category_block_color_home_var = Cookies.get('Category_block_color_home');
  const text_color_home_var = Cookies.get('text_color_home');
  const background_color_home_var = Cookies.get('background_color_home');
  const Border_Radius_home_var = Cookies.get('Border_Radius_home');
  const Border_bottom_home_var = Cookies.get('Border_bottom_home');
  const background_color_home_button_var = Cookies.get('background_color_home_button');
  const Border_Radius_home_button_var = Cookies.get('Border_Radius_home_button');
  const Border_bottom_home_button_var = Cookies.get('Border_bottom_home_button');

  var obj = [];
  const location = useLocation();
  const city = location.state?.city || '';
  const branch = location.state?.branch || '';

  const [count, setCount] = React.useState(0);
  const [forcart, setcityforcart] = React.useState([]);

  const [category, setcategory] = useState('');
  const [product, setproduct] = useState('');

  const handleCategory = (event) => {
    setcategory(event.target.value);
  };

  const handlProduct = (event) => {
    setproduct(event.target.value);
  };  

  const [categoryfromapi, setcategoryfromapi] = useState([]);
  const [productfromapi, setproductfromapi] = useState([]);

  useEffect(() => {
    // Fetch data from both endpoints
    axios.all([
      axios.get(baseURL),
      axios.get(productsbaseURL)
    ])
    .then(axios.spread((categoryResponse, productResponse) => {
      setcategoryfromapi(categoryResponse.data.categories);
      setproductfromapi(productResponse.data.products);
    }))
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  return (
    <>
      <usercontext.Provider value={forcart}>
        <Header count={count} city={city} branch={branch} />
        <Slider />
      </usercontext.Provider>
      {categoryfromapi.map(category => (
        <div key={category}>
          <div className='categories_heading' style={{ background: Category_block_color_home_var }}>
            {category + ':'}
          </div>
          <div className="products_row">
            {productfromapi
              .filter(product => product.category_name === category)
              .sort((a, b) => (a.product_name > b.product_name ? 1 : -1))
              .map(item => (
                <MenuItem
                  key={item.product_id}
                  value={item.product_name}
                  sx={{ "&:hover": { backgroundColor: "transparent" } }}
                  disableRipple
                  disableFocusRipple
                >
                  <div className='card_home'>
                    <div className="container_home" style={{ background: background_color_home_var, color: text_color_home_var, border: Border_bottom_home_var, borderRadius: Border_Radius_home_var }}>
                      <img src={front} className='home_page_images' alt="Product" />
                      <h4 className='h4_heading'><b>{item.product_name}</b></h4>
                      <p>Description:</p>
                      <Typography className="product-description" noWrap>
                        {item.product_description}
                      </Typography>
                      <p className='home_page_p'><b>{"Rs. " + item.product_price}</b></p>
                      <button
                        className='home_page_button'
                        aria-label="increase"
                        style={{ background: background_color_home_button_var, borderRadius: Border_Radius_home_button_var, border: Border_bottom_home_button_var }}
                        onClick={() => {
                          setCount(count + 1);
                          setcityforcart(previous => ([...previous, { id: item.product_id, cat: category, item_name: item.product_name, price: item.product_price }]));
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </MenuItem>
              ))}
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
}

export default Home;
