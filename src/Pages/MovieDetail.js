import image from "../assets/image.png"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import {useTitle} from "../Hooks/useTitle";

export function MovieDetail(){

    const [movie,setMovie] = useState([]);

    const params=useParams();

    useEffect(()=>{
        async function fetchDetail(){
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=8c94d8fa18a936ed92d2bdd653a3b683`);
            const result= await response.json();
            setMovie(result);
        }
        fetchDetail();
    },[params.id])

    const title_path=useTitle(`Movie-${movie.title}`);

    const img=movie.poster_path?`https://image.tmdb.org/t/p/w500/${movie.poster_path}`:image;

    return(
        <div className="min-h-screen p-8 dark:bg-gray-800 flex flex-row flex-wrap justify-evenly dark:text-white">

        <div>
            <img src={img} alt="image"  className="w-96 mb-10 rounded-lg shadow-2xl"/>
        </div>
         <div className=" w-128 ">
                <p className="text-4xl font-bold py-4 max-lg:text-center">{movie.title}</p>
                <p className="py-4 text-lg text-justify">{movie.overview}</p>
                <div className="flex flex-row flex-wrap gap-4 py-4">
                    {movie.genres && movie.genres.map((item)=>(
                        <p key={item.id} className="border-2 p-2 border-zinc-600 rounded-lg">{item.name}</p>
                    ))
                    }
                </div>
                <div className="flex items-center py-2">
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <p className=" text-gray-900 dark:text-white">{movie.vote_average}</p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <span className="text-gray-900 dark:text-white">{movie.vote_count} reviews</span>
                </div>
                <p className="py-2 text-lg"><span className="font-xl font-semibold">Runtime:</span> {movie.runtime} min</p>
                <p className="py-2 text-lg"><span className="font-xl font-semibold">Budget:</span> {movie.budget}</p>
                <p className="py-2 text-lg"><span className="font-xl font-semibold">Revenue:</span> {movie.runtime}</p>
                <p className="py-2 text-lg"><span className="font-xl font-semibold">Release Date:</span> {movie.release_date}</p>
                <p className="py-2 text-lg"><span className="font-xl font-semibold">IMDB Code:</span> {movie.imdb_id}</p>
            </div>
        </div>
    )
}