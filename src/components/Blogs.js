import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'
import Spinner from './Spinner';
import "./Blogs.css"
const Blogs = () => {
    const {posts,loading}=useContext(Appcontext);

  return (
    <div className='Blogsdiv'>
        {
            loading ? (<Spinner/>):(
                posts.length===0?(<div className='PostError'><p className='Nopost'>No Post Fount</p></div>):
                (posts.map((post)=>(
                    <div key={post.id} className='posts'>
                        <p className='title'>{post.title}</p>
                        <p>
                            By <span className='author'>{post.author}</span> on <span className='category'>{post.category}</span>
                        </p>
                        <p>Posted on   <span className='date'>{post.date}</span></p>
                        <p className='content'>{post.content}</p>
                        <div>
                            {post.tags.map((tag,index)=>{
                                return <span key={index} className='tags'>{`  #${tag}`}</span>
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