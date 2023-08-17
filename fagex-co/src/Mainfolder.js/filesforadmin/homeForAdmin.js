
import React, { useEffect } from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
function HomeForAdmin(){
  const [data, setData] = useState({
    name: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:3001/categories", {
        name: data.name
      });
      console.log(response.status, response.data.token);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };



  const [productsdata, setproductsdata] = useState({
    product_name: "",
    product_price: 0,
    product_description: "",
    category_id: 0
  });

  const handleChangeproductsdata = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handleSubmitproductsdata = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/products", data); // Use the correct URL
      console.log(response.status, response.data.token);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };


const [showcategoriesdata,setshowcategoriesdata]=useState([]);
const [showproductsdata,setshowproductsdata]=useState([]);


useEffect(() => {

  axios.get("http://localhost:3001/categories")
    .then(response => {
      setshowcategoriesdata(response.data.categories);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}, []); 
useEffect(() => {

  axios.get("http://localhost:3001/products")
    .then(response => {
      setshowproductsdata(response.data.productId);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}, []); 









const handleDeleteCategory = async (category) => {

  try {
    const response = await axios.delete(`http://localhost:3001/categories/${category}`);
    console.log("Category deleted:", response.data.message);
  } catch (error) {
    console.error("Error deleting category:", error);
  }
};

const handleDeleteProduct = async (productId) => {
  productId.preventDefault();
  try {
    const response = await axios.delete(`http://localhost:3001/delete_products/${productId.target.elements.productId.value}`);
    console.log("Product deleted:", response.data.message);
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};


    const handleCategory_block_color_homeChange = (event) => {
        const Category_block_color_home = event.target.value;
        Cookies.set('Category_block_color_home', Category_block_color_home,{expires:7});
      };
    
      const handletext_color_homeChange = (event) => {
        const text_color_home = event.target.value;
        Cookies.set('text_color_home', text_color_home,{expires:7});
      };
    
      const handlebackground_color_homeChange = (event) => {
        const background_color_home = event.target.value;
        Cookies.set('background_color_home', background_color_home,{expires:7});
      };
      const handleBorder_Radius_homeChange = (event) => {
        const Border_Radius_home = event.target.value;
        Cookies.set('Border_Radius_home', Border_Radius_home,{expires:7});
      };
      const handleBorder_bottom_homeChange = (event) => {
        const Border_bottom_home = event.target.value;
        Cookies.set('Border_bottom_home', Border_bottom_home,{expires:7});
      };
      const handlebackground_color_home_buttonChange = (event) => {
        const background_color_home_button = event.target.value;
        Cookies.set('background_color_home_button', background_color_home_button,{expires:7});
      };
      const handleBorder_Radius_home_buttonChange = (event) => {
        const Border_Radius_home_button = event.target.value;
        Cookies.set('Border_Radius_home_button', Border_Radius_home_button,{expires:7});
      };
      const handleBorder_bottom_home_buttonChange = (event) => {
        const Border_bottom_home_button = event.target.value;
        Cookies.set('Border_bottom_home_button', Border_bottom_home_button,{expires:7});
      };
    

    return(

        <>
 <form style={{marginTop:"395%"}} onSubmit={handleSubmit}>
        <label>
          Category Block Color:
        </label>
        <br />
        <input
          type="color"
          id="Category_block_color_home"
          name="Category_block_color_home"
          onChange={handleCategory_block_color_homeChange}
        />
        <br />
        <label>
          Text Color:
        </label>
        <br />
        <input
          type="color"
          id="text_color_home"
          name="text_color_home"
          onChange={handletext_color_homeChange}
        />
        
        <br />

        <label>
          Background Color:
        </label>
        <br />
        <input
          type="color"
          id="background_color_home"
          name="background_color_home"
          onChange={handlebackground_color_homeChange}
        />
        <br />
        <label>
          Border Radius:
        </label>
        <br />
        <input
          type="text"
          id="Border_Radius_home"
          name="Border_Radius_home"
          onChange={handleBorder_Radius_homeChange}
        />
        <br />
        <label>
          Border color:
        </label>
        <br />
        <input
          type="text"
          id="Border_bottom_home_home"
          name="Border_bottom_home"
          onChange={handleBorder_bottom_homeChange}
        />
        <br />
        <label>
          Background button Color:
        </label>
        <br />
        <input
          type="color"
          id="background_color_home_button"
          name="background_color_home_button"
          onChange={handlebackground_color_home_buttonChange}
        />
        <br />
        <label>
          Button Border Radius:
        </label>
        <br />
        <input
          type="text"
          id="Border_Radius_home_button"
          name="Border_Radius_home_button"
          onChange={handleBorder_Radius_home_buttonChange}
        />
        <br />
        <label>
          Button Border color:
        </label>
        <br />
        <input
          type="text"
          id="Border_bottom_home_button"
          name="Border_bottom_home_button"
          onChange={handleBorder_bottom_home_buttonChange}
        />
        <br />
        <br></br>
        <label>Names of Categories::</label>
        {showcategoriesdata.map((value,index)=>{
          return(
            <>
            <ul><li><strong> <p>{value}</p></strong></li>
         </ul>
            </>
          )
        })}
        <label>
         Please enter name of category:
        </label>
        <br></br>
        <input
          type="text"
          id="Name_of_category_home"
           name="name"
          value={data.name}
          onChange={handleChange}
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
      <br></br>
      <form  onSubmit={handleSubmitproductsdata}>
        <label>product_name :</label><br></br>
        <input
          type="text"
          id="product_name"
          name="product_name"
          value={data.product_name}
          onChange={handleChangeproductsdata}
        />
                <label>product_price :</label><br></br>
        <input
          type="number"
          id="product_price"
          name="product_price"
          value={data.product_price}
          onChange={handleChangeproductsdata}
        />
                <label>product_description :</label><br></br>
        <input
          type="text"
          id="product_description"
          name="product_description"
          value={data.product_description}
          onChange={handleChangeproductsdata}
        />
        <br></br>
        <label>category id:</label><br></br>
        <input
          type="text"
          id="category_id"
          name="category_id"
          value={data.category_id}
          onChange={handleChangeproductsdata}
        />
        <br></br>
        <button type="submit">Submit</button>
          </form>
          <form onSubmit={handleDeleteCategory}>
        <br />
        <label>Names of Categories to be deleted:</label>
        {showcategoriesdata.map((value, index) => (
          <ul key={index}>
            <li>
              <strong>
                <p>{value}</p>
              </strong>
              <button type="button" onClick={() => handleDeleteCategory(value)}>Delete</button>
            </li>
          </ul>
        ))}
      </form>
      <br></br>
      <form  onSubmit={handleDeleteProduct}>
                <label>productId to be deleted:</label><br></br>
        <input
          type="number"
          id="productId"
          name="productId"
          value={data.productId}
        />
      
        <button type="submit">Submit</button>
      
    </form>
        </>
    )
}
export default HomeForAdmin;