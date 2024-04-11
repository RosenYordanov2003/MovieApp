import "./TrendingMoviesSection.css";
import {loadPopularMovies} from "../../services/movieService";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SlidingMovieCard from "../SlidingMovieCard/SlidingMovieCard";
import { Autoplay} from 'swiper/modules';

export default function TrendingMoviesSection(){
  const [movies, setMovies] = useState([]);
  useEffect(() => {
   loadPopularMovies(1)
   .then(res => setMovies(res.results))
  },[])
  const movieItems = movies.map((m, index) => {
     return <SwiperSlide key={index}>
         <SlidingMovieCard movie={m}/>
     </SwiperSlide>
  })
  return(
    <section className="trending-movies">
      <h1 className="trending-movies-title">Trending Movies</h1>
      <Swiper
         grabCursor={true}
         spaceBetween={10}
         slidesPerView={'auto'}
         autoplay={{
          delay: 1000,
          paused: true
        }}
        modules={[Autoplay]}>
        {movieItems}
      </Swiper>
    </section>  
  )
}