import "../SlidingMovieCard/SlidingMovieCard.css";
import "../SlidingMovieCard/SlidingMovieCardResponsive.css";
import apiConfig from "../../utilities";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function SlidingMovieCard({movie, category}){
    const navigate = useNavigate();
    const imgPath = apiConfig.getMovieImg(movie.poster_path !== null ? movie.poster_path:movie.backdrop_path);
    return(
        <article onClick={() =>navigate(`/Details/${category}/${movie.id}`)} className="sliding-movie-card">
            <div className="sliding-movie-card-img-container">
            <LazyLoadImage
            effect="blur"
            src={imgPath} 
           />
            </div>
           <h3 className="sliding-movie-card-name">{movie.title}</h3>
        </article>
    )
}