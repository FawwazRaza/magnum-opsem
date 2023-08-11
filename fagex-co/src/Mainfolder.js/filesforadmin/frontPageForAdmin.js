
import React from "react";
import Cookies from "js-cookie";
function LocationForAdmin(){
    const handleDeliver_Button_Color_front_pageChange = (event) => {
        const Deliver_Button_Color_front_page = event.target.value;
        Cookies.set('Deliver_Button_Color_front_page', Deliver_Button_Color_front_page,{expires:7});
      };
    
      const handletext_color_front_pageChange = (event) => {
        const text_color_front_page = event.target.value;
        Cookies.set('text_color_front_page', text_color_front_page,{expires:7});
      };
      const handleTake_Away_Button_Color_front_pageChange = (event) => {
        const Take_Away_Button_Color_front_page = event.target.value;
        Cookies.set('Take_Away_Button_Color_front_page', Take_Away_Button_Color_front_page,{expires:7});
      };
    
      const handleDinning_Button_Color_front_pageChange = (event) => {
        const Dinning_Button_Color_front_page = event.target.value;
        Cookies.set('Dinning_Button_Color_front_page', Dinning_Button_Color_front_page,{expires:7});
      };
      const handleUse_Location_Button_Color_front_pageChange = (event) => {
        const Use_Location_Button_Color_front_page = event.target.value;
        Cookies.set('Use_Location_Button_Color_front_page', Use_Location_Button_Color_front_page,{expires:7});
      };
    
      const handleSelect_Button_Color_front_pageChange = (event) => {
        const Select_Button_Color_front_page = event.target.value;
        Cookies.set('Select_Button_Color_front_page', Select_Button_Color_front_page,{expires:7});
      };
    
      const handlebackground_color_front_pageChange = (event) => {
        const background_color_front_page = event.target.value;
        Cookies.set('background_color_front_page', background_color_front_page,{expires:7});
      };
      const handleBorder_Radius_front_pageChange = (event) => {
        const Border_Radius_front_page = event.target.value;
        Cookies.set('Border_Radius_front_page', Border_Radius_front_page,{expires:7});
      };
      const handleBorder_color_front_pageChange = (event) => {
        const Border_color_front_page = event.target.value;
        Cookies.set('Border_color_front_page', Border_color_front_page,{expires:7});
      };
    //   const handleBorder_bottomChange = (event) => {
    //     const Border_bottom = event.target.value;
    //     Cookies.set('Border_bottom', Border_bottom);
    //   };

    return(

        <>
        <form>
        <label>
          Deliver Button Color:
        </label>
        <br />
        <input
          type="color"
          id="Deliver_Button_Color_front_page"
          name="Deliver_Button_Color_front_page"
          onChange={handleDeliver_Button_Color_front_pageChange}
        />
        <br />
        <label>
          Take Away Button Color:
        </label>
        <br />
        <input
          type="color"
          id="Take_Away_Button_Color_front_page"
          name="Take_Away_Button_Color_front_page"
          onChange={handleTake_Away_Button_Color_front_pageChange}
        />
        <br />
        <label>
          Dinning Button Color:
        </label>
        <br />
        <input
          type="color"
          id="Dinning_Button_Color_front_page"
          name="Dinning_Button_Color_front_page"
          onChange={handleDinning_Button_Color_front_pageChange}
        />
        <br />
        <label>
          Use Location Button Color:
        </label>
        <br />
        <input
          type="color"
          id="Use_Location_Button_Color_front_page"
          name="Use_Location_Button_Color_front_page"
          onChange={handleUse_Location_Button_Color_front_pageChange}
        />
        <br />
        <label>
          Select Button Color:
        </label>
        <br />
        <input
          type="color"
          id="Select_Button_Color_front_page"
          name="Select_Button_Color_front_page"
          onChange={handleSelect_Button_Color_front_pageChange}
        />
        <br />

        <label>
          Text Color:
        </label>
        <br />
        <input
          type="color"
          id="text_color_front_page"
          name="text_color_front_page"
          onChange={handletext_color_front_pageChange}
        />
        
        <br />

        <label>
          Background Color:
        </label>
        <br />
        <input
          type="color"
          id="background_color_front_page"
          name="background_color_front_page"
          onChange={handlebackground_color_front_pageChange}
        />
        <br />
        <label>
          Border Radius :
        </label>
        <br />
        <input
          type="text"
          id="Border_Radius_front_page"
          name="Border_Radius_front_page"
          onChange={handleBorder_Radius_front_pageChange}
        />
        <br />
        <label>
          Border size and color  :
        </label>
        <br />
        <input
          type="text"
          id="Border_color_front_page"
          name="Border_color_front_page"
          onChange={handleBorder_color_front_pageChange}
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
export default LocationForAdmin;