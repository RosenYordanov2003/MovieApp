import './App.css';
import {useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';

//https://www.omdbapi.com/
function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(apiKey);
  const baseUrl = `http://www.omdbapi.com/?t=wednesday&apikey=${apiKey}&t=Wednesday`;
  useEffect(() => {
     fetch(baseUrl)
     .then(res => res.json())
     .then(res => console.log(res));
  });
  return (
    <BrowserRouter>
      <Navigation/>
    </BrowserRouter>
  );
}

export default App;
