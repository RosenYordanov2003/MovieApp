import "../MediaItemDetails/MediaItemDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getDetails, getCasts, getVideos} from "../../services/movieService";
import apiConfig from "../../utilities";
import Cast from "./Cast/Cast";
import Video from "./Video/Video";

export default function MediaItemDetails(){
    const {category, id} = useParams();
    const [casts, setCasts] = useState([]);
    const [item, setItem] = useState(undefined);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
      getDetails(category, id)
      .then(res => setItem(res))
       getCasts(category, id)
      .then(res => setCasts(res.cast.slice(0, 5)))
      getVideos(category, id)
      .then(res => setVideos(res.results));
    },[category, id])

    const imgPath = item?.backdrop_path || item?.poster_path;
    const backgroundImg = apiConfig.getMovieImg(imgPath);
    const posterImg = apiConfig.getPosterImg(imgPath);

    const styleObject ={backgroundImage: `url(${backgroundImg})`};
    const genresResult = item?.genres.map((g, index) => <li key={index}>{g.name}</li>);
    const castsResult = casts.map((c) => <Cast key={c.id} cast={c}/>);
    const videosResult = videos.map((x) => <Video item={x} id={x.id}/>)

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
                  <h3 className="cast-title">Casts</h3>
                  <div className="cast-container">
                     {castsResult}
                  </div>
              </div>
         </article>
         <section className="media-item-videos">
            {videosResult}
         </section>
      </section>
   )
}