
import React from "react";
import Cookies from 'js-cookie';
function SiginForAdmin(){


    const handlefront_block_color_signinChange = (event) => {
        const front_block_color_signin = event.target.value;
        Cookies.set('front_block_color_signin', front_block_color_signin,{ expires:7 });
        
      };
    
      const handlefront_block_text_colorChange = (event) => {
        const front_block_text_color = event.target.value;
        Cookies.set('front_block_text_color', front_block_text_color,{ expires:7 });
      };
      const handleBack_block_text_colorChange = (event) => {
        const Back_block_text_color = event.target.value;
        Cookies.set('Back_block_text_color', Back_block_text_color,{ expires:7 });
      };
    
      const handlebackground_color_sign_inChange = (event) => {
        const background_color_sign_in = event.target.value;
        Cookies.set('background_color_sign_in', background_color_sign_in,{ expires:7 });
      };
      const handlefront_Border_Radius_signinChange = (event) => {
        const front_Border_Radius_signin = event.target.value;
        Cookies.set('front_Border_Radius_signin', front_Border_Radius_signin,{ expires:7 });
      };
      const handlefront_Border_bottom_signinChange = (event) => {
        const front_Border_bottom_signin = event.target.value;
        Cookies.set('front_Border_bottom_signin', front_Border_bottom_signin,{ expires:7 });
      };
    
      return (
        <>
          <form>
            <label>
              front Block Color:
            </label>
            <br />
            <input
              type="color"
              id="front_block_color_signin"
              name="front_block_color_signin"
              onChange={handlefront_block_color_signinChange}
            />
            <br />
    
            <label>
              front block Text Color:
            </label>
            <br />
            <input
              type="color"
              id="front_block_front_block_text_color"
              name="front_block_text_color"
              onChange={handlefront_block_text_colorChange}
            />
            
            <br />
    
            <label>
              Back block Text Color:
            </label>
            <br />
            <input
              type="color"
              id="Back_block_text_color"
              name="Back_block_text_color"
              onChange={handleBack_block_text_colorChange}
            />
            
            <br />
    
            <label>
              Background Color:
            </label>
            <br />
            <input
              type="color"
              id="background_color_sign_in"
              name="background_color_sign_in"
              onChange={handlebackground_color_sign_inChange}
            />
            <br />
            <label>
            Front Border Radius:
            </label>
            <br />
            <input
              type="text"
              id="front_Border_Radius_signin"
              name="front_Border_Radius_signin"
              onChange={handlefront_Border_Radius_signinChange}
            />
            <br />
            <label>
              Border front container:
            </label>
            <br />
            <input
              type="text"
              id="front_Border_bottom_signin_signin"
              name="front_Border_bottom_signin"
              onChange={handlefront_Border_bottom_signinChange}
            />
            <br />
          </form>
        </>
      )
}
export default SiginForAdmin;