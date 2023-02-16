import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
import Content from './Components/Content/Content';
import MiddleSlider from './Components/MiddleSlider/MiddleSlider';
import MiddleContent from './Components/MiddleContent/MiddleContent'
import Stories from './Components/Stories/Stories';
import Commercial from './Components/Commercial/Commercial';
import Social from './Social/Social';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <Routes> 
      
    <Route path="/" element={<><Navbar/><Slider/> <Content/><MiddleSlider/><MiddleContent/><Stories/><Commercial/><Social/><Footer/> </>}/>
 </Routes>
  );
}

export default App;
