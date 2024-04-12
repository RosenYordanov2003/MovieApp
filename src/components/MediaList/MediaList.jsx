import {useParams} from "react-router-dom"
import "../MediaList/MediaList.css";
import {loadPopularMediaList, searchCollection} from "../../services/movieService";
import { useState, useEffect } from "react";
import MediaListCard from "../MediaListCard/MediaListCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import MediaListBG from "../../assets/MediaListBG.jpg";
import SearchInput from "../SearchInput/SearchInput";

export default function MediaList(){
    const {category} = useParams();
    const [pagerObject, setPagerObject] = useState({pageNumber: 1, totalPages: 0});
    const [mediaListItems, setMediaListItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [queryString, setQueryString] = useState(undefined);
    
    useEffect(() => {
      if(queryString === undefined || queryString?.trim().length === 0 || queryString === null){
        loadPopular(0, false);
      }
      else{
        loadMediaItemsByQueryString(0, false);
      }
    },[category, queryString])

    function handleOnLoadMoreClick(){
      if(queryString!== undefined && queryString.length > 0 && pagerObject.pageNumber + 1 <=pagerObject.totalPages){
        loadMediaItemsByQueryString(1, true);
      }
      if(pagerObject.pageNumber + 1 <=pagerObject.totalPages){
        setIsLoading(true);
        loadPopular(1, true);
      }
    }
    function loadPopular(pageNumberToAdd, itHasToSaveOldMovies){
      loadPopularMediaList(pagerObject.pageNumber + pageNumberToAdd, category, 'popular')
      .then(res => {
        if(itHasToSaveOldMovies){
          setMediaListItems([...mediaListItems,...res.results]);
        }
        else{
          setMediaListItems(res.results);
        }
        setPagerObject({pageNumber: pagerObject.pageNumber + pageNumberToAdd, totalPages: res.total_pages});
        setIsLoading(false);
      })
    }
    function loadMediaItemsByQueryString(pageNumberToAdd, itHasToSaveOldMovies){
      searchCollection(queryString, pagerObject.pageNumber + pageNumberToAdd)
      .then(res =>{
        const filteredItems = res.results.filter(x => x.poster_path !== null || x.backdrop_path !== null);
        if(itHasToSaveOldMovies){
          setMediaListItems([...mediaListItems, ...filteredItems]);
        }
        else{
          setMediaListItems(filteredItems);
        }
        setPagerObject({pageNumber: pagerObject.pageNumber + pageNumberToAdd, totalPages: res.total_pages});
        setIsLoading(false);
      })
    }
    function handleOnSearch(queryStringToSet){
      if(queryString !== queryStringToSet){
        setIsLoading(true);
        setPagerObject({pageNumber: 1,  totalPages: 0});
        setQueryString(queryStringToSet);
      }
    }
    const result = mediaListItems.map((x, index) => <MediaListCard key={index} mediaItem={x}/>);
    const styleObject = {backgroundImage: `url(${MediaListBG})`};
    return (
     <>
        <div className="media-list-container">
           <div className="media-list-header" style={styleObject}>
             <h1 className="media-list-title">{category === 'movie' ? 'Movies' : 'TV Shows'}</h1>
           </div>
          <SearchInput handleOnInputChange={handleOnSearch} placeholderParam={category === 'movie' ? 'Movie' : 'TV Show'}/>
         <section className="media-list-content">
           {!isLoading ? result : <LoadingSpinner/>}
         </section>
         {
           (pagerObject.pageNumber + 1 <= pagerObject.totalPages &&  !isLoading) &&
           <button onClick={handleOnLoadMoreClick} className="load-more-button">Load More</button>
         }
        </div>
      </>
    )
}