import {MovieList,MovieDetail,Search,Pnf} from "../Pages";
import {Routes,Route} from "react-router-dom";

export function AllRoutes(){
    return(
        <Routes>
            <Route path={"/"} element={<MovieList url={"movie/now_playing"} title={"Home"}/>}/>
            <Route path={"movie/popular"} element={<MovieList url={"movie/popular"} title={"Popular"}/>}/>
            <Route path={"movie/top"} element={<MovieList url={"movie/top_rated"} title={"Top-Rated"}/>}/>
            <Route path={"movie/upcoming"} element={<MovieList url={"movie/upcoming"} title={"Upcoming"}/>} />
            <Route path={"movie/:id"} element={<MovieDetail url={"movie"}/>} />
            <Route path={"search"} element={<Search url={"search/movie"}/>} />
            <Route path={"*"} element={<Pnf/>} />
        </Routes>
    )
}