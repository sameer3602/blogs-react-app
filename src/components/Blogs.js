import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'
import Spinner from './Spinner';
const Blogs = () => {
    const {posts,loading}=useContext(Appcontext);

  return (
    <div>
        {
            loading ? (<Spinner/>):(
                posts.length===0?(<div><p>No Post Fount</p></div>):
                (posts.map((post)=>(
                    <div key={post.id} classname="posts">
                        <p classname="title">{post.title}</p>
                        <p>
                            By <span classname="author">{post.author}</span> on <span>{post.category}</span>
                        </p>
                        <p classname="date">posted on {post.date}</p>
                        <p classname="content">{post.content}</p>
                        <div>
                            {post.tags.map((tag,index)=>{
                                return <span key={index} classname="tags">{`#${tag}`}</span>
                            })}
                        </div>
                    </div>
                )))
            )
        }
    </div>
  )
}

export default Blogs