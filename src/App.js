import React, { useContext, useEffect } from "react"
import Header from "./components/Header"
import Pagination from "./components/Pagination"
import Blogs from "./components/Blogs"
import { Appcontext } from "./context/Appcontext"

export default function App() {
  const {fetchBlogPosts}=useContext(Appcontext);
  useEffect(()=>{
    fetchBlogPosts();
  },[]);

  return(
    <div className="Appdiv">
      <Header/>
      <Blogs></Blogs>
      <Pagination/>
    </div>
  ) 
}
