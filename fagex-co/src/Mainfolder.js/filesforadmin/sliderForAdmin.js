
import React from "react";
import Cookies from 'js-cookie';
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
        <br />
      
      </form>
        </>
    )
}
export default SliderForAdmin;