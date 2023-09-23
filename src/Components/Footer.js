export function Footer(){
    return(
        <div className="py-8 px-4 w-full flex flex-row justify-between items-center flex-wrap dark:bg-gray-800">
            <div>
                <p className="text-sm dark:text-zinc-300 ">© 2030 Cineflix. All Rights Reserved.</p>
            </div>
            <div className="flex flex-row gap-3 flex-wrap">
                <a href="https://www.instagram.com/" target="_blank" className="hover:cursor-pointer hover:underline text-sm dark:text-zinc-300 dark:hover:text-white">Instagram</a>
                <a href="https://www.linkedin.com/" target="_blank" className="hover:cursor-pointer hover:underline text-sm dark:text-zinc-300 dark:hover:text-white">LinkedIn</a>
                <a href="https://www.twitter.com/" target="_blank" className="hover:cursor-pointer hover:underline text-sm dark:text-zinc-300 dark:hover:text-white">Twitter</a>
                <a href="https://www.youtube.com/" target="_blank" className="hover:cursor-pointer hover:underline text-sm dark:text-zinc-300 dark:hover:text-white">YouTube</a>
            </div>
        </div>
    )
}