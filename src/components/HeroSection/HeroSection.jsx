import { useEffect, useState } from "react";
import {loadHeroSectionMovie} from "../../services/movieService";
import "../HeroSection/HeroSection.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay} from 'swiper/modules';
import HeroItem from "./HeroItem/HeroItem";

export default function HeroSection(){

   const[movieObject, setMovieObject] = useState(undefined);
   useEffect(() => {
      loadHeroSectionMovie(1)
      .then(res => setMovieObject(res))
      .catch((error) => console.error(error));
   }, [])

   const result = movieObject?.results?.slice(0, 8).map((m, index) => {
     return <SwiperSlide key={index}>
         {({ isActive }) => (
             <HeroItem movie={m} className={`${isActive ? "active" : ""}`} />
         )}
     </SwiperSlide>
   });

   
   return (
      <section className="hero-section">
      <Swiper
        slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="swiper"
        >
         {result}
        </Swiper>
      </section>
   );
}