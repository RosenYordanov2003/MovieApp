import "../HeroItem/HeroItem.css";
import "../HeroItem/HeroItemResponsive.css";
import apiConfig from "../../../utilities";
import TrailerPopupContainer from "../TrailerPopupContainer/TrailerPopupContainer";
import { useEffect, useState } from "react";
import {getMovieVideos} from "../../../services/movieService";
import { useNavigate } from "react-router-dom";

export default function HeroItem({movie, className, onStopPlayer, onResumePlayer}){

  const[trailer, setTrailer] = useState(undefined);
  const[movieVideos, setMovieVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMovieVideos(movie.id)
    .then((res) => setMovieVideos(res.results.filter(v => v.name.toLowerCase().startsWith('official trailer'))));
  },[])

  function onVideoRemove(){
    onResumePlayer();
    setTrailer(undefined);
  }
  function handleOnTrailerClick(){
    if(movieVideos.length === 0){
      return;
    }
    onStopPlayer();
    const src = 'https://www.youtube.com/embed/' + movieVideos[0].key;
    setTrailer(<TrailerPopupContainer onVideoRemove={onVideoRemove} src={src}/>);
  }
  const backgroundImg = apiConfig.getMovieImg(movie.backdrop_path ? movie.backdrop_path : movie.poster_path);
   return(
     <article className={`movie-item ${className}`} style={{backgroundImage: `url(${backgroundImg})`}}>
         {trailer !== undefined ? trailer : ""}
         <section className="movie-item-about-container">
            <div className="movie-item-about">
                <h1 className="movie-item-title">{movie.title}</h1>
                <p className="movie-item-description">{movie.overview}</p>
                <div className="movie-item-btn-container">
                    <button onClick={() => navigate(`/Details/movie/${movie.id}`)} className="watch-now-btn">Watch Now</button>
                    <button className="watch-trailer-btn" onClick={handleOnTrailerClick}>Watch Trailer</button>
                </div>
            </div>
            <div className="movie-item-poster">
              <img src={apiConfig.getPosterImg(movie.poster_path)} />
            </div>
         </section>
     </article>
   )
}