import {Card} from "../Components";
import {useFetch} from "../Hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import {useTitle} from "../Hooks/useTitle";

export function Search({url}){

    const [searchParams] =useSearchParams();
    const movie = searchParams.get("q");
    const { data } = useFetch(url, movie);
    useTitle(`Search-${movie}`);

    return(
        <div className="min-h-screen p-10 dark:bg-gray-800">
            <div className="pb-10 px-4 text-2xl dark:text-white max-sm:text-center max-sm:px-0">
                <p>{ data!=0 ? `Result for '${movie}'` : `No result found for '${movie}'` }</p>
            </div>
            <div className="flex flex-row justify-center gap-10 flex-wrap">
            {
                data && data.map((movie)=>(
                <Card key={movie.id} movie={movie}/>
                ))
            }
            </div>
        </div>
    )
}