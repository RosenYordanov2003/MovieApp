import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import HeroSection from './components/HeroSection/HeroSection';
import TrendingMoviesSection from './components/TrendingMoviesSection/TrendingMoviesSection';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <HeroSection/>
      <TrendingMoviesSection category={'movie'} title={"Popular Movies"} criteria={'popular'}/>
      <TrendingMoviesSection category={'tv'} title={"Popular TV Shows"} criteria={'popular'}/>
      <TrendingMoviesSection category={'movie'} title={"Upcoming Movies"} criteria={'upcoming'}/>
    </BrowserRouter>
  );
}

export default App;
