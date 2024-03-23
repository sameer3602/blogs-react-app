import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl";
export const Appcontext= createContext();
export default function AppcontextProvider({children}){
    const [loading,setloading]=useState(false);
    const [posts,setposts]=useState([]);
    const [page,setpage]=useState(1);
    const [totalPages,settotalPages]=useState(null);

    async function fetchBlogPosts(page=1){
        setloading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setpage(data.page);
            settotalPages(data.totalPages);
            setposts(data.posts);
        }
        catch(error){
            alert("Errpr in Fetching Data");
            setpage(1);
            setposts([]);
            settotalPages(null);

        }
        setloading(false);
    }
    function handlepage(page){
        setpage(page);
        fetchBlogPosts(page);
    }
    const value={
        posts,
        setposts,
        loading,
        setloading,
        page,
        setpage,
        totalPages,
        settotalPages,
        fetchBlogPosts,
        handlepage
    };

    return <Appcontext.Provider value={value}>
        {children}
    </Appcontext.Provider>
}