import "./TrendingMoviesSection.css";
import "./TrendingMoviesSectionResponsive.css";
import {loadPopularMediaList} from "../../services/movieService";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SlidingMovieCard from "../SlidingMovieCard/SlidingMovieCard";
import { Autoplay} from 'swiper/modules';

export default function TrendingMoviesSection({category, title, criteria}){
  const [movies, setMovies] = useState([]);
  const defaultPage = 1;
  useEffect(() => {
    loadPopularMediaList(defaultPage, category, criteria)
   .then(res => setMovies(res.results, criteria))
  },[])
  const movieItems = movies?.map((m, index) => {
     return <SwiperSlide key={index}>
         <SlidingMovieCard movie={m}/>
     </SwiperSlide>
  })
  return(
    <section className="trending-movies">
      <h1 className="trending-movies-title">{title}</h1>
      <Swiper
         grabCursor={true}
         spaceBetween={10}
         slidesPerView={'auto'}
         autoplay={{
          delay: 4000,
          paused: true
        }}
        modules={[Autoplay]}>
        {movieItems}
      </Swiper>
    </section>  
  )
}