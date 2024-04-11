import "../MediaListCard/MediaListCard.css";
import apiConfig from "../../utilities";

export default function MediaListCard({mediaItem}){
   const imgPath = apiConfig.getMovieImg(mediaItem.poster_path);
   return(
     <article className="media-item-card">
        <div className="media-item-img-container">
           <img src={imgPath}></img>
        </div>
        <div className="media-item-content-container">
           <h3 className="media-item-title">{mediaItem.title}</h3>
        </div>
     </article>
   )
}