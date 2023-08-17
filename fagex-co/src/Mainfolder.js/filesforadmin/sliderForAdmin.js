
import React from "react";
import Cookies from 'js-cookie';
import { useState } from "react";
function SliderForAdmin(){

    const handleFirst_Slide_Image_sliderChange = (event) => {
        const First_Slide_Image_slider = event.target.value;
        Cookies.set('First_Slide_Image_slider', First_Slide_Image_slider,{expires:7});
      };
    
      const handleSecond_Slide_Image_sliderChange = (event) => {
        const Second_Slide_Image_slider = event.target.value;
        Cookies.set('Second_Slide_Image_slider', Second_Slide_Image_slider,{expires:7});
      };
    
      const handleThird_Slide_Image_sliderChange = (event) => {
        const Third_Slide_Image_slider = event.target.value;
        Cookies.set('Third_Slide_Image_slider', Third_Slide_Image_slider,{expires:7});
      };
      // const handlelengthslider = (event) => {
      //   const lengthslider = event.target.value;
      //   if(lengthslider>=1&&lengthslider<=3)
      //   {
      //     Cookies.set('lengthslider', lengthslider,{expires:7});  
      //   }
      //   else{
      //     alert("wrong input")
      //   }
      // };

      // const [length, setLength] = useState(0);
      // const [values, setValues] = useState([]);
    
      // const handleChange = (event) => {
      //   const newLength = parseInt(event.target.value);
      //   setLength(newLength);
        
      //   const newValues = Array.from({ length: newLength }, (_, index) => index + 1);
      //   setValues(newValues);
      // };
    return(

        <>
        <form>
        <label>
         First Slide Image:
        </label>
        <br />
        <input
          type="text"
          id="First_Slide_Image_slider"
          name="First_Slide_Image_slider"
          onChange={handleFirst_Slide_Image_sliderChange}
        />
        <br />

        <label>
        Second Slide Image:
        </label>
        <br />
        <input
          type="text"
          id="Second_Slide_Image_slider"
          name="Second_Slide_Image_slider"
          onChange={handleSecond_Slide_Image_sliderChange}
        />
        
        <br />
        <label>
        Third Slide Image:
        </label>
        <br />
        <input
          type="text"
          id="Third_Slide_Image_slider"
          name="Third_Slide_Image_slider"
          onChange={handleThird_Slide_Image_sliderChange}
        />
        {/* <br />
        <label>
        Enter length from 1-3:
        </label>
        <br />
        <input
          type="number"
          id="lengthslider"
          name="lengthslider"
          min="1"
          max="3"
        />
        <button onClick={handlelengthslider}>Submit</button> */}
        {/* <br />
        <label>
        Enter length:
        <input type="number" value={length} onChange={handleChange} />
      </label>
      <ul>
        {values.map((value,index) => (
          <ul key={value}>
                   <br />
        <label>
        {index} Slide Image:
        </label>
        <br />
        <input
          type="text"
          id="Third_Slide_Image_slider"
          name="Third_Slide_Image_slider"
          onChange={handleThird_Slide_Image_sliderChange}
        />
        <br />
            
            </ul>
        ))}
      </ul> */}
      </form>
        </>
    )
}
export default SliderForAdmin;