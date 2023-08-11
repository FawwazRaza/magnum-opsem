
import React from "react";
import Cookies from "js-cookie";
function FooterForAdmin(){
    const handleBottom_block_color_footerChange = (event) => {
        const Bottom_block_color_footer = event.target.value;
        Cookies.set('Bottom_block_color_footer', Bottom_block_color_footer,{expires:7});
      };
    
      const handletext_color_footerChange = (event) => {
        const text_color_footer = event.target.value;
        Cookies.set('text_color_footer', text_color_footer,{expires:7});
      };
    
    //   const handlebackground_color_footerChange = (event) => {
    //     const background_color_footer = event.target.value;
    //     Cookies.set('background_color_footer', background_color_footer);
    //   };
      const handleBorder_Radius_footerChange = (event) => {
        const Border_Radius_footer = event.target.value;
        Cookies.set('Border_Radius_footer', Border_Radius_footer,{expires:7});
      };
    //   const handleBorder_bottomChange = (event) => {
    //     const Border_bottom = event.target.value;
    //     Cookies.set('Border_bottom', Border_bottom);
    //   };

    return(

        <>
        <form>
        <label>
          Bottom Block Color:
        </label>
        <br />
        <input
          type="color"
          id="Bottom_block_color_footer"
          name="Bottom_block_color_footer"
          onChange={handleBottom_block_color_footerChange}
        />
        <br />

        <label>
          Text Color:
        </label>
        <br />
        <input
          type="color"
          id="text_color_footer"
          name="text_color_footer"
          onChange={handletext_color_footerChange}
        />
        
        <br />

        {/* <label>
          Background Color:
        </label>
        <br />
        <input
          type="color"
          id="background_color_footer"
          name="background_color_footer"
          onChange={handlebackground_color_footerChange}
        />
        <br /> */}
        <label>
          Border Radius:
        </label>
        <br />
        <input
          type="text"
          id="Border_Radius_footer"
          name="Border_Radius_footer"
          onChange={handleBorder_Radius_footerChange}
        />
        <br />
        {/* <label>
          Border bottom:
        </label>
        <br />
        <input
          type="text"
          id="Border_bottom"
          name="Border_bottom"
          onChange={handleBorder_bottomChange}
        />
        <br /> */}
      </form>
        </>
    )
}
export default FooterForAdmin;