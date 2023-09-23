import image from "../assets/image.png";
import {Link} from "react-router-dom";


export function Card({movie}){

    const img=(movie.poster_path?`https://image.tmdb.org/t/p/w500/${movie.poster_path}`:image);

    return(
        <Link to={`/movie/${movie.id}`} className="flex flex-col w-96 rounded-lg border-2 border-gray-300 shadow-2xl dark:bg-gray-800 dark:border-gray-900 cursor-pointer">
            <div>
            <img src={img} alt="image" className="rounded-lg" />
            </div>
            <div className="p-4">
                <p className="py-2 text-2xl font-bold dark:text-white">{movie.title?movie.title:"Title not available"}</p>
                <p className="py-2 text-justify dark:text-zinc-400">{movie.overview?movie.overview:"Sorry , overview not available"}</p>
            </div>
        </Link>
    )
}