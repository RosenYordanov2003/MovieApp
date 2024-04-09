import './App.css';
import {useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <HeroSection/>
    </BrowserRouter>
  );
}

export default App;
