import './App.css';
import {BrowserRouter ,Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import HomeSection from './components/HomeSection/HomeSection';
import MediaList from "../src/components/MediaList/MediaList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/Movies/:category' element={<MediaList/>}/>
          <Route path="/Home" element={<HomeSection/>} />
          <Route path="/" element={<HomeSection/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
