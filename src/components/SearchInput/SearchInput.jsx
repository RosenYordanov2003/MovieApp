import { useState } from "react"
import "../SearchInput/SearchInput.css";
export default function SearchInput({handleOnInputChange, placeholderParam}){
    const [queryString, setQueryString] = useState(undefined);
    return(
        <div className="search-container">
            <div className="input-container">
              <input className="search-input" placeholder={`Enter ${placeholderParam}`} onChange={(e) => setQueryString(e.target.value)} type="text"/>
              <button onClick={() => handleOnInputChange(queryString)} className="search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
    )
}