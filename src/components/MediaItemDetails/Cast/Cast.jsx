import apiConfig from "../../../utilities"
import "./Cast.css";
import "./CastResponsive.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Cast({cast}){

    const imgPath = apiConfig.getPosterImg(cast.profile_path);
    return (
        <article className="cast-card">
            <div className="cast-img-container">
        <LazyLoadImage
           effect="blur"
           src={imgPath} 
         />
            </div>
            <h2 className="cast-name">{cast.name}</h2>
        </article>
    )
}