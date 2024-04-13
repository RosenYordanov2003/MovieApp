import "../MediaItemDetails/MediaItemDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getDetails} from "../../services/movieService";
import apiConfig from "../../utilities";

export default function MediaItemDetails(){
    const {category, id} = useParams();

    const [item, setItem] = useState(undefined);
    useEffect(() => {
      getDetails(category, id)
      .then(res => setItem(res))
    },[category, id])
    const imgPath = item?.backdrop_path || item?.poster_path;
    const backgroundImg = apiConfig.getMovieImg(imgPath);
    const posterImg = apiConfig.getPosterImg(imgPath);

    const styleObject ={backgroundImage: `url(${backgroundImg})`};
    const genresResult = item?.genres.map((g, index) => <li key={index}>{g.name}</li>);

   return(
      <section className="details-section">
         <div className="details-background" style={styleObject}></div>
         <article className="details-card">
             <div className="details-poster-container">
               <img src={posterImg} className="details-poster"></img>
            </div>
              <div className="details-card-about">
                 <h2 className="details-card-title">{item?.title || item?.name}</h2>
                  <ul className="genres">
                      {genresResult}
                  </ul>
                  <p className="details-item-overview">{item?.overview}</p>
              </div>
         </article>
      </section>
   )
}