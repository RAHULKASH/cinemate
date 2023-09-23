import {Link , NavLink , useNavigate} from "react-router-dom";
import icon from "../assets/icon.jpg";
import { useState,useEffect } from "react";

export function Header(){

  const [md_option,setmd_option]=useState(false);
  const [isDark,setDark] = useState(JSON.parse(localStorage.getItem("isDark")) || false);
  
  useEffect(()=>{
    localStorage.setItem("isDark", JSON.stringify(isDark));
  },[isDark])

  if(isDark){
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const navigate = useNavigate();
  const active="text-blue-600 cursor-pointer dark:text-white";
  const inactive="hover:text-blue-600 cursor-pointer dark:text-zinc-400 dark:hover:text-white";
  const active_md="bg-blue-600 text-white p-2 border-b w-full rounded-lg cursor-pointer dark:border-gray-600";
  const inactive_md="hover:bg-blue-600 hover:text-white p-2 border-b w-full rounded-lg cursor-pointer dark:text-zinc-400 dark:border-gray-600";

  function handleSearch(event){
    event.preventDefault();
    const movie=event.target.search.value;
    event.target.reset();
    setmd_option(false);

    return navigate(`search?q=${movie}`);
  }

    return(
      <div className="p-4 w-full border-b dark:bg-gray-900 dark:border-gray-900">
      <div className="flex flex-row justify-between items center flex-wrap">
      <div className="flex flex-row gap-2 items-center">
        <img src={icon} alt="icon" className="w-10 h-10 rounded-full" />
        <p className="text-2xl font-semibold dark:text-white">Cinemate</p>
      </div>

      <div className="flex flex-row gap-4 items-center p-2 max-md:hidden font-semibold ">
        <NavLink to={"/"} end className={({isActive})=>isActive?active:inactive}>Home</NavLink>
        <NavLink to={"movie/popular"} className={({isActive})=>isActive?active:inactive}>Popular</NavLink>
        <NavLink to={"movie/top"} className={({isActive})=>isActive?active:inactive}>Top Rated</NavLink>
        <NavLink to={"movie/upcoming"} className={({isActive})=>isActive?active:inactive}>Upcoming</NavLink>
      </div>

      <div className="flex flex-row gap-3 items-center">

        {isDark &&
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 p-2 border-2 dark:border-zinc-400 dark:text-white rounded-lg cursor-pointer" onClick={()=>setDark(!isDark)}>
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>
        }

        {!isDark &&
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 p-2 border-2  rounded-lg cursor-pointer" onClick={()=>setDark(!isDark)}>
        <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
        </svg>
        }

        <form className="max-md:hidden" onSubmit={handleSearch}>
          <input name="search" type="text" className="border-2 rounded-md p-2 text-sm w-48 dark:bg-gray-700 dark:text-white dark:border-gray-900" placeholder="...Search Movie" autoComplete="off"/>
        </form>

  
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 p-1 md:hidden cursor-pointer dark:text-white" onClick={()=>setmd_option(!md_option)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 p-1 md:hidden cursor-pointer dark:text-white" onClick={()=>setmd_option(!md_option)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
         
      </div>
      </div>

      {md_option &&

      <div className="md:hidden py-6 ">

      <form className="py-4" onSubmit={handleSearch}>
        <input name="search" type="text" className="border-2 rounded-md text-sm p-2 w-full bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-900" placeholder="...Search Movie" autoComplete="off" />
      </form>

      <div className="flex flex-col w-full gap-2 px-4 ">
        <NavLink to={"/"} end className={({isActive})=>isActive?active_md:inactive_md} onClick={()=>setmd_option(false)} >Home</NavLink>
        <NavLink to={"movie/popular"} className={({isActive})=>isActive?active_md:inactive_md} onClick={()=>setmd_option(false)}>Popular</NavLink>
        <NavLink to={"movie/top"} className={({isActive})=>isActive?active_md:inactive_md} onClick={()=>setmd_option(false)}>Top Rated</NavLink>
        <NavLink to={"movie/upcoming"} className={({isActive})=>isActive?active_md:inactive_md} onClick={()=>setmd_option(false)}>Upcoming</NavLink>
      </div>

      </div>

      }
      </div>
    )
}