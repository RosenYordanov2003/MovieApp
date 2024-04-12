import {useParams} from "react-router-dom"
import "../MediaList/MediaList.css";
import {loadPopularMediaList} from "../../services/movieService";
import { useState, useEffect } from "react";
import MediaListCard from "../MediaListCard/MediaListCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import MediaListBG from "../../assets/MediaListBG.jpg";

export default function MediaList(){
    const {category} = useParams();
    const [pagerObject, setPagerObject] = useState({pageNumber: 1, totalPages: 0});
    const [mediaListItems, setMediaListItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
      loadPopularMediaList(pagerObject.pageNumber, category, 'popular')
      .then(res => {
        setMediaListItems(res.results);
        setPagerObject({...pagerObject, totalPages: res.total_pages});
      })
    },[category])
    function handleOnLoadMoreClick(){
      if(pagerObject.pageNumber + 1 <=pagerObject.totalPages){
        loadPopularMediaList(pagerObject.pageNumber + 1, category, 'popular')
        .then(res => {
          setMediaListItems([...mediaListItems, ...res.results]);
          setPagerObject({...pagerObject, pageNumber: pagerObject.pageNumber + 1});
        });
      }
    }
    const result = mediaListItems.map((x, index) => <MediaListCard key={index} mediaItem={x}/>);
    const styleObject = {backgroundImage: `url(${MediaListBG})`};
    return (
     <>
       {
         isLoading ? <LoadingSpinner/> : 
        <div className="media-list-container">
           <div className="media-list-header" style={styleObject}>
             <h1 className="media-list-title">{category === 'movie' ? 'Movies' : 'TV Shows'}</h1>
           </div>
         <section className="media-list-content">
           {result}
         </section>
         {
           pagerObject.pageNumber + 1 <= pagerObject.totalPages &&  
           <button onClick={handleOnLoadMoreClick} className="load-more-button">Load More</button>
         }
        </div>
      }
      </>
     
    )
}