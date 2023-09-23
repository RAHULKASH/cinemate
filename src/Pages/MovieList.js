import {Card} from "../Components";
import { useFetch } from "../Hooks/useFetch";
import { useTitle } from "../Hooks/useTitle";

export function MovieList({url,title}){

    const title_head = useTitle(title);

    const { data } = useFetch(url);

    return(
        <div className="min-h-screen p-10 dark:bg-gray-800 flex flex-row justify-center gap-10 flex-wrap">
            {
                data && data.map((movie)=>(
                <Card key={movie.id} movie={movie}/>
                ))
            }
        </div>
    )
}