import "../MediaItemDetails/MediaItemDetails.css";
import "../MediaItemDetails/MediaItemDetailsResponsive.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getDetails, getCasts, getVideos, getSimilar} from "../../services/movieService";
import apiConfig from "../../utilities";
import Cast from "./Cast/Cast";
import Video from "./Video/Video";
import SlidingMovieCard from "../SlidingMovieCard/SlidingMovieCard";
import { Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function MediaItemDetails(){
    const {category, id} = useParams();
    const [casts, setCasts] = useState([]);
    const [item, setItem] = useState(undefined);
    const [videos, setVideos] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);

    useEffect(() => {
      getDetails(category, id)
      .then(res => setItem(res))
       getCasts(category, id)
      .then(res => setCasts(res.cast.slice(0, 5)))
      getVideos(category, id)
      .then(res => setVideos(res.results))
      getSimilar(category, id)
      .then(res => setSimilarMovies(res?.results?.filter(x => x.backdrop_path!== null || x.poster_path!==null)));
      window.scrollTo(0, 0);
    },[category, id])

    const imgPath = item?.backdrop_path || item?.poster_path;
    const backgroundImg = apiConfig.getMovieImg(imgPath);
    const posterImg = apiConfig.getPosterImg(imgPath);

    const styleObject ={backgroundImage: `url(${backgroundImg})`};
    const genresResult = item?.genres.map((g, index) => <li key={index}>{g.name}</li>);
    const castsResult = casts.map((c) => <Cast key={c.id} cast={c}/>);
    const videosResult = videos.map((x) => <Video item={x} id={x.id}/>);
    const similarResult = similarMovies.map((x) => {
        return <SwiperSlide key={x.id}>
            <SlidingMovieCard movie={x} category={category}/>
        </SwiperSlide>
    } )

   return(
      <section className="details-section">
         <div className="details-background" style={styleObject}></div>
         <article className="details-card">
             <div className="details-poster-container">
             <LazyLoadImage
               effect="blur"
               src={posterImg} 
            />
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
         <h2 className="similar-title">Similar</h2>
         <Swiper
         className="similar-container"
         grabCursor={true}
         spaceBetween={10}
         slidesPerView={'auto'}
         autoplay={{
          delay: 4000,
          paused: true
        }}
        modules={[Autoplay]}>
        {similarResult}
      </Swiper>
      </section>
   )
}