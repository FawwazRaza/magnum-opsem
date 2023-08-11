
import React from "react";
import Cookies from "js-cookie";
function HomeForAdmin(){
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
 <form style={{marginTop:"395%"}}>
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
      </form>
        </>
    )
}
export default HomeForAdmin;