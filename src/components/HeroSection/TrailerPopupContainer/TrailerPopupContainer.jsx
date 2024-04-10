import "../TrailerPopupContainer/TrailerPopupContainer.css";
import ReactPlayer from 'react-player/youtube'
import { useState, useEffect } from "react";
export default function TrailerPopupContainer({onVideoRemove, src}){

    const [isActive, setIsActive] = useState(undefined);
    useEffect(() => {
        setTimeout(() => {
            setIsActive(true);
        }, 100)
    },[])

    function handleOnCloseVideo(){
        setIsActive(false);
        setTimeout(() => {
            onVideoRemove();
        },302)
    }

    return(
        <div className={`trailer-container ${isActive ? `active-video` : ''}`}>
            <i onClick={handleOnCloseVideo} className="fa-solid fa-xmark close-video"></i>
            <ReactPlayer width='100%'
          height='600px'   
          url={src} className="trailer"/>
        </div>
    )
}