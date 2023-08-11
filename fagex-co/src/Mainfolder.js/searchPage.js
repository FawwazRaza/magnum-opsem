import * as React from 'react';
import { useState } from "react";
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import data from '../dataBase/productsFile.json';
import front from '../assets/food.jpg';
import './Search_css.scss';
function Search(props) {
  let mess;
  const [filteredData, setfilteredData] = useState([]);
  const [message, setmessage] = useState('');
  const [check, setcheck] = useState(false);
  const [changed, setchanged] = useState([]);

  const handleChange = (event) => {
    setmessage(event.target.value);
    mess = message.toLowerCase();
    console.log(mess);

    function searchCategoryAndProducts(data, query) {
      query = query.toLowerCase();
      return data.categories.filter((category) => {
        const productsMatchingQuery = category.products.filter((product) =>
          product.name.toLowerCase().includes(query)
        );

        return productsMatchingQuery.length > 0;
      });
    }

    const searchQuery = mess;
    setfilteredData(searchCategoryAndProducts(data, searchQuery));
    setcheck(true);
  }

  const handleclose = () => {
    props.setOpenSearch(false);
  }

  const handleClick = () => {

  }

  return (
    <>
      <div className="Search_container">
        <div className="upper_flex">
          <TextField id="outlined-basic" label="Search" variant="outlined" value={message}
            onChange={handleChange} size="small" sx={{ width: 900 }} />
          <div><HighlightOffOutlinedIcon onClick={handleclose} sx={{ fontSize: "xx-large" }} className="close_button" /></div>
        </div>
        <div className="searchbar_below_container">
          <div className="norecord_text">{filteredData.length === 0 && message.length !== 0 ? "No Record Found." : null}</div>
          {
            filteredData?.map((anObjectMapped, index) => {
              return (
                <>
                  <p key={`${anObjectMapped?.id}`}>
                    <div>
                      {/* Your content */}
                    </div>
                  </p>
                  {
                    anObjectMapped?.products?.map((nestedobject) => {
                      return (
                        <>
                          <p key={`${nestedobject?.id}`}>
                            <div className="text_image-container">
                              <div><img src={front} className="image_search" alt="Product" /></div>
                              <div className="text_css">
                                <strong>{anObjectMapped?.name}</strong>
                                {nestedobject?.name}
                              </div>
                            </div>
                          </p>
                        </>
                      )
                    })
                  }
                </>
              );
            })
          }
        </div>
      </div>
    </>
  )
}

export default Search;
