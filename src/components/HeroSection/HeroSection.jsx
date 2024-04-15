import { useEffect, useState, useRef } from "react";
import {loadPopularMediaList} from "../../services/movieService";
import "../HeroSection/HeroSection.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay} from 'swiper/modules';
import HeroItem from "./HeroItem/HeroItem";

export default function HeroSection(){
  
  const ref = useRef();
   const[movieObject, setMovieObject] = useState(undefined);
   useEffect(() => {
    loadPopularMediaList(1, 'movie', 'popular')
      .then(res => setMovieObject(res))
      .catch((error) => console.error(error));
   }, [])
   const autoPlayer = ref.current?.swiper?.autoplay;
   const result = movieObject?.results?.slice(0, 6).map((m, index) => {
     return <SwiperSlide key={index}>
         {({ isActive }) => (
             <HeroItem movie={m} onResumePlayer={resumePlayer} onStopPlayer={stopPlayer} className={`${isActive ? "active" : ""}`} />
         )}
     </SwiperSlide>
   });

   function stopPlayer(){
     autoPlayer.stop();
   }
   function resumePlayer(){
    autoPlayer.start();
   }
   return (
      <section className="hero-section">
      <Swiper ref={ref}
        slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
          }}
          modules={[Autoplay]}
          className="swiper"
        >
         {result}
        </Swiper>
      </section>
  );
}