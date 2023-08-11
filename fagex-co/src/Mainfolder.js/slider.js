import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import pancake from '../assets/pancake.jpg';
import tree from '../assets/tree.jpg';
import food from '../assets/food.jpg';
import './slider_css.scss'; // Import your custom styles
function SliderComponent() {

  const First_Slide_Image_slider_var = Cookies.get('First_Slide_Image_slider');
  const Second_Slide_Image_slider_var = Cookies.get('Second_Slide_Image_slider');
  const Third_Slide_Image_slider_var = Cookies.get('Third_Slide_Image_slider');

  return (

    <>
   <div className='container_slider' >
      <MDBCarousel showIndicators>
        <div className='image_container'>
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={1}
            src={First_Slide_Image_slider_var}
            alt='...'
          />
          
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={2}
            src={Second_Slide_Image_slider_var}
            alt='...'
          />
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={3}
            src={Third_Slide_Image_slider_var}
            alt='...'
          />
        </div>
      </MDBCarousel>
    </div>
    </>
  );
}

export default SliderComponent;
