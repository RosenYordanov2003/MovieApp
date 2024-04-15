import apiConfig from "../../../utilities"
import "./Cast.css";
import "./CastResponsive.css";

export default function Cast({cast}){

    const imgPath = apiConfig.getPosterImg(cast.profile_path);
    return (
        <article className="cast-card">
            <div className="cast-img-container">
                <img src={imgPath}></img>
            </div>
            <h2 className="cast-name">{cast.name}</h2>
        </article>
    )
}