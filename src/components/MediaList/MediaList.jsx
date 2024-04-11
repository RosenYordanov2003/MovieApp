import {useParams} from "react-router-dom"
import "../MediaList/MediaList.css";
import {loadPopularMediaList} from "../../services/movieService";
import { useState, useEffect } from "react";
import MediaListCard from "../MediaListCard/MediaListCard";

export default function MediaList(){
    const {category} = useParams();
    const [pagerObject, setPagerObject] = useState({pageNumber: 1, totalPages: 0});
    const [mediaListItems, setMediaListItems] = useState([]);
    useEffect(() => {
      loadPopularMediaList(pagerObject.pageNumber, category, 'popular')
      .then(res => {
        setMediaListItems(res.results);
        setPagerObject({...pagerObject, totalPages: res.total_pages});
      })
    },[category])
    function handleOnLoadMoreClick(){
        loadPopularMediaList(pagerObject.pageNumber + 1, category, 'popular')
        .then(res => {
          setMediaListItems([...mediaListItems, ...res.results]);
          setPagerObject({...pagerObject, pageNumber: pagerObject.pageNumber + 1});
        });
    }
    const result = mediaListItems.map((x, index) => <MediaListCard key={index} mediaItem={x}/>);
    return (
      <div className="media-list-container">
        <h1 className="media-list-title">{category === 'movie' ? 'Movies' : 'TV Shows'}</h1>
        <section className="media-list-content">
          {result}
        </section>
        <button onClick={handleOnLoadMoreClick} className="load-more-button">Load More</button>
      </div>
    )
}