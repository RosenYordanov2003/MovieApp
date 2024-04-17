import "../MediaListCard/MediaListCard.css";
import "../MediaListCard/MediaListCardResponsive.css";
import apiConfig from "../../utilities";
import {useNavigate} from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function MediaListCard({mediaItem, category}){
   const navigate = useNavigate();
   const imgPath = apiConfig.getMovieImg(mediaItem.poster_path !== null ? mediaItem.poster_path :mediaItem.backdrop_path);
   return(
     <article onClick={() => navigate(`/Details/${category}/${mediaItem.id}`)} className="media-item-card">
        <div className="media-item-img-container">
         <LazyLoadImage
           effect="blur"
           src={imgPath}
         />
        </div>
        <div className="media-item-content-container">
           <h3 className="media-item-title">{mediaItem.title ? mediaItem.title : mediaItem.name}</h3>
        </div>
     </article>
   )
}