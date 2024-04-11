import HeroSection from "../HeroSection/HeroSection";
import TrendingMoviesSection from "../TrendingMoviesSection/TrendingMoviesSection";

export default function HomeSection(){
    return(
        <>
            <HeroSection/>
            <TrendingMoviesSection category={'movie'} title={"Popular Movies"} criteria={'popular'}/>
            <TrendingMoviesSection category={'tv'} title={"Popular TV Shows"} criteria={'popular'}/>
            <TrendingMoviesSection category={'movie'} title={"Upcoming Movies"} criteria={'upcoming'}/>
        </>
    )
}