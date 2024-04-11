import { Link } from "react-router-dom";
import "../Navigation/Navigation.css";

export default function Navigation(){
    return(
        <header>
             <div className="header-logo">
                 <h3 className="header-logo-title">Movies For You</h3>    
                 <i className="fa-solid fa-video"></i>
            </div>
            <nav className="navigation">
                <ul className="navigation-list">
                    <li>
                       <Link to="Home">Home</Link>
                    </li>
                    <li>
                        <Link to="Library">Library</Link>
                    </li>
                    <li>
                      <Link to="Cart"><i className="fa-solid fa-cart-shopping"></i></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}