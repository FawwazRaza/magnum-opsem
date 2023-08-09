
import './App.css';
import FrontPage_Location from './Mainfolder.js/frontpage.js';
import HeaderComponent from './Mainfolder.js/header';
import Signin_page from './Mainfolder.js/signinPage';
import { BrowserRouter , Route, Routes,} from "react-router-dom";
import HOME from './Mainfolder.js/homePage';
import Footer from './Mainfolder.js/footer.js';
import Search from './Mainfolder.js/searchPage';
import SliderComponent from './Mainfolder.js/slider';
import CartComponent from './Mainfolder.js/cart';
import Admin from './Mainfolder.js/admin';
import Protected from './Mainfolder.js/protected';
function App() {
  return (
   <> 
   <BrowserRouter>
   <Routes>
        <Route exact path="/" element={<Signin_page />} />      
        <Route path="/home" element={<HOME />} />
        <Route path="/admin" element={<Protected Component={Admin} />} />
        <Route  path="/location" element={<FrontPage_Location />} />
        <Route  path="/search" element={<Search />} /> 
        <Route  path="/header" element={<HeaderComponent />} />
        <Route  path="/Footer" element={<Footer />} />
        <Route  path="/slider" element={<SliderComponent />} />
   </Routes>
 </BrowserRouter>
    {/* <Signin_page/> */}
   
   </>
    
   
  );
}

export default App;
