import pnf from "../assets/pnf.png";
import {Link} from "react-router-dom";
import {useTitle} from "../Hooks/useTitle";

export function Pnf(){

    const title_path=useTitle("404 !Oops");

    return(
        <div className="min-h-screen p-10 flex flex-col justify-evenly items-center dark:bg-gray-800">
            <p className="text-3xl dark:text-white my-2">No Result Found</p>
            <img src={pnf} alt="image" className="h-72 w-72 rounded-lg shadow-2xl my-2"/>
            <Link to={"/"}  className="px-8 py-2 text-white bg-blue-600 rounded-lg text-xl shadow-2xl my-2">Back to Home</Link>
        </div>
    )
}