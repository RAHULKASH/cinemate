import { useEffect } from "react";

export function useTitle(title){

    useEffect(()=>{
        document.title=`Cinemate/${title}`;
    },[title])

    return;
}