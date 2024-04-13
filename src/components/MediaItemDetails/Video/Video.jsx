import ReactPlayer from 'react-player/youtube'
import "../Video/Video.css";

export default function Video({item}){
    const url = 'https://www.youtube.com/embed/' + item.key;
    return(
        <div className="media-video-container">
            <h1 className="video-title">{item.name}</h1>
            <div className="media-video">
                <ReactPlayer width='90%'
                height='500px'   
                url={url} className="trailer"/>
            </div>
        </div>
    )
}