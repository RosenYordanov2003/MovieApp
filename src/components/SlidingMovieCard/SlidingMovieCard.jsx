import "../SlidingMovieCard/SlidingMovieCard.css";
import apiConfig from "../../api";

export default function SlidingMovieCard({movie}){
    const imgPath = apiConfig.getMovieImg(movie.poster_path);
    return(
        <article className="sliding-movie-card">
            <div className="sliding-movie-card-img-container">
                <img src={imgPath}></img>
            </div>
           <h3 className="sliding-movie-card-name">{movie.title}</h3>
        </article>
    )
}