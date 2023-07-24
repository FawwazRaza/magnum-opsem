import logo from './logo.svg';
import './App.css';
import FrontPage_Location from './Mainfolder.js/frontpage';
import headerComponent from './Mainfolder.js/header';
import Signin_page from './Mainfolder.js/signinPage';
import { BrowserRouter , Router, Switch, Route, Routes,Redirect,} from "react-router-dom";
import HOME from './Mainfolder.js/homePage';
function App() {
  return (
   <> 
   <BrowserRouter>
   <Routes>
        <Route exact path="/" element={<Signin_page />} />
        <Route exact path="/header" element={<headerComponent />} />
        <Route  path="/location" element={<FrontPage_Location />} />
       <Route path="/home" element={<HOME />} />
     
   </Routes>
 </BrowserRouter>
    {/* <Signin_page/> */}
   
   </>
    
   
  );
}

export default App;
