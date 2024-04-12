import { Link } from "react-router-dom";
import "../Navigation/Navigation.css";
import { useState } from "react";

export default function Navigation(){
    const [isActive, setIsActive] = useState(false);

    window.addEventListener("scroll", function(){
        if(this.window.scrollY > 0){
            if(!isActive){
                setIsActive(true);
            }
        }
        else{
            setIsActive(false);
        }
    })
    return(
        <header className={`${isActive ? 'active-header' : ''}`}>
             <div className="header-logo">
                 <h3 className="header-logo-title">Movies For You</h3>    
                 <i className="fa-solid fa-video"></i>
            </div>
            <nav className="navigation">
                <ul className="navigation-list">
                    <li>
                       <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/Movies/movie">Movies</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}