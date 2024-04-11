import "./TrendingMoviesSection.css";
import {loadPopularMovies} from "../../services/movieService";
import { useEffect, useState } from "react";

export default function TrendingMoviesSection(){
  const [movies, setMovies] = useState([]);
  useEffect(() => {
   loadPopularMovies(1)
   .then(res => setMovies(res.results))
  },[])
  return(
    <section className="trending-movies">
      <h1 className="trending-movies-title">Trending Movies</h1>
    </section>  
  )
}