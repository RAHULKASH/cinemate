import { useEffect, useState } from "react"

export function useFetch(url , movie=""){

    const [data , setData] = useState();
    const new_url=`https://api.themoviedb.org/3/${url}?api_key=8c94d8fa18a936ed92d2bdd653a3b683&query=${movie}`;

    useEffect(()=>{
        async function fetchDetail(){
            const response = await fetch(new_url);
            const result = await response.json();
            setData(result.results);
        }
        fetchDetail();
    },[new_url]);

    return { data }

}