
import React from "react";
import Cookies from "js-cookie";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function HeaderForAdmin() {
  const handleSideBlockColorChange = (event) => {
    const selectedColor = event.target.value;
    Cookies.set('side_block_color', selectedColor,{expires:7});
  };

  const handleTextColorChange = (event) => {
    const selectedColor = event.target.value;
    Cookies.set('text_color', selectedColor,{expires:7});
  };
  const handletext_logo_header = (event) => {
    const logoinput = event.target.value;
    Cookies.set('logoinput', logoinput,{expires:7});
  };
  const handleBackgroundColorChange = (event) => {
    const selectedColor = event.target.value;
    Cookies.set('background_color', selectedColor,{expires:7});
  };
  const handleBorder_RadiusChange = (event) => {
    const Radius = event.target.value;
    Cookies.set('Border_Radius', Radius,{expires:7});
  };
  const handleBorder_bottomChange = (event) => {
    const Border_bottom = event.target.value;
    Cookies.set('Border_bottom', Border_bottom,{expires:7});
  };
  const handlelocationheader= (event) => {

    const location_start_header = event.target.value;
    if(location_start_header==="start")
    {
    Cookies.set('location_start_header', "start",{expires:7});
  }
  else if(location_start_header==="center")
  {
    Cookies.set('location_start_header', "center",{expires:7});
  }
  else if(location_start_header==="end")
  {
    Cookies.set('location_start_header', "end",{expires:7});
  }
  else{
    Cookies.set('location_start_header', null,{expires:7});
  }
  };
  const handlelogoheader= (event) => {
    const logo_start_header = event.target.value;
    if(logo_start_header==="start")
    {
    Cookies.set('logo_start_header', "start",{expires:7});
  }
  else if(logo_start_header==="center")
  {
    Cookies.set('logo_start_header', "center",{expires:7});
  }
  else if(logo_start_header==="end")
  {
    Cookies.set('logo_start_header', "end",{expires:7});
  }
  else{
    Cookies.set('logo_start_header', null,{expires:7});
  }
  };
  const handlelast4header= (event) => {
    const last4_start_header = event.target.value;
    if(last4_start_header==="start")
    {
    Cookies.set('last4_start_header', "start",{expires:7});
  }
  else if(last4_start_header==="center")
  {
    Cookies.set('last4_start_header', "center",{expires:7});
  }
  else if(last4_start_header==="end")
  {
    Cookies.set('last4_start_header', "end",{expires:7});
  }
  else{
    Cookies.set('last4_start_header', null,{expires:7});
  }
  };

  return (
    <>
      <form>
        <label>
          Side Block Color:
        </label>
        <br />
        <input
          type="color"
          id="side_block_color"
          name="side_block_color"
          onChange={handleSideBlockColorChange}
        />
        <br />

        <label>
          Text Color:
        </label>
        <br />
        <input
          type="color"
          id="text_color"
          name="text_color"
          onChange={handleTextColorChange}
        />
        
        <br />

        <label>
          Background Color:
        </label>
        <br />
        <input
          type="color"
          id="background_color"
          name="background_color"
          onChange={handleBackgroundColorChange}
        />
        <br />
        <label>
          Border Radius:
        </label>
        <br />
        <input
          type="text"
          id="Border_Radius"
          name="Border_Radius"
          onChange={handleBorder_RadiusChange}
        />
        <br />
        <label>
          Border bottom:
        </label>
        <br />
        <input
          type="text"
          id="Border_bottom"
          name="Border_bottom"
          onChange={handleBorder_bottomChange}
        />
        <br />
          <label>
          Type Location position: 
          </label><br></br>
          <input
          type="text"
          id="location_start_header"
          name="location_start_header"
          onChange={handlelocationheader}
        />
        <br />
          <label>
          Type Logo position: 
          </label><br></br>
          <input
          type="text"
          id="logo_start_header"
          name="logo_start_header"
          onChange={handlelogoheader}
        />
        <br />
          <label>
            Type last4buttons position: 
          </label><br></br>
          <input
          type="text"
          id="last4_start_header"
          name="last4_start_header"
          onChange={handlelast4header}
        />
        <br></br>
        <label>
          Enter url for Logo:
        </label><br></br>
        <input type='text'  id='text_logo_header' name='text_logo_header' onChange={handletext_logo_header}></input>
    
      </form>
    </>
  );
}

export default HeaderForAdmin;
