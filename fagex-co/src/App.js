import logo from './logo.svg';
import './App.css';
import FrontPage_Location from './Mainfolder.js/Frontpage';
import Signin_page from './Mainfolder.js/Sign_in_page';
import { BrowserRouter , Router, Switch, Route, Routes,Redirect,} from "react-router-dom";
import HOME from './Mainfolder.js/Home_page';
function App() {
  return (
   <> 
   <BrowserRouter>
   <Routes>
        <Route exact path="/" element={<Signin_page />} />
        <Route  path="/location" element={<FrontPage_Location />} />
       <Route path="/home" element={<HOME />} />
     
   </Routes>
 </BrowserRouter>
    {/* <Signin_page/> */}
   
   </>
    
   
  );
}

export default App;
