
import Cookies from 'js-cookie';
import {Carousel} from '3d-react-carousal';
function SliderComponent() {
  const First_Slide_Image_slider_var = Cookies.get('First_Slide_Image_slider');
  const Second_Slide_Image_slider_var = Cookies.get('Second_Slide_Image_slider');
  const Third_Slide_Image_slider_var = Cookies.get('Third_Slide_Image_slider');

  let slides = [
    <img  src={First_Slide_Image_slider_var} alt="1"  style={{height:"500px",width:"1000px",objectFit:"cover"}}/>,
    <img  src={Second_Slide_Image_slider_var} alt="2" style={{height:"500px",width:"1000px" ,objectFit:"cover"}} />  ,
    <img  src={Third_Slide_Image_slider_var} alt="3" style={{height:"500px",width:"1000px"  ,objectFit:"cover"}}/>    ];

    function handleclick(){
      console.log("");
    }
  return (
  <>
    <Carousel slides={slides} autoplay={true} interval={2000}/>
  </>
  );
}

export default SliderComponent;
