import "../HeroItem/HeroItem.css";
import apiConfig from "../../../api";
import { useState, useEffect } from "react";

export default function HeroItem({movie, className}){
  
  const backgroundImg = apiConfig.getMovieImg(movie.backdrop_path ? movie.backdrop_path : movie.poster_path);
   return(
     <article className={`movie-item ${className}`} style={{backgroundImage: `url(${backgroundImg})`}}>
         <section className="movie-item-about-container">
            <div className="movie-item-about">
                <h1 className="movie-item-title">{movie.title}</h1>
                <p className="movie-item-description">{movie.overview}</p>
                <div className="movie-item-btn-container">
                    <button className="watch-now-btn">Watch Now</button>
                    <button className="watch-trailer-btn">Watch Trailer</button>
                </div>
            </div>
            <div className="movie-item-poster">
              <img src={apiConfig.getPosterImg(movie.poster_path)} />
            </div>
         </section>
     </article>
   )
}