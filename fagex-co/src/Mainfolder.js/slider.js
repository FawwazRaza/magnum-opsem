import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
// import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
// import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import pancake from '../assets/pancake.jpg';
import tree from '../assets/tree.jpg';
import food from '../assets/food.jpg';
import './slider_css.scss';
 function SliderComponent() {
    return (
        <div className='container_slider'>
      <MDBCarousel showIndicators>
        <div className='image_container'>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={1}
          src={pancake}
          alt='...'
        />
        
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={2}
          src={tree}
          alt='...'
          
        />
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={3}
          src={food}
          alt='...'
        />
         </div>
      </MDBCarousel>
     
      </div>
      
    );
  }
  export default SliderComponent;