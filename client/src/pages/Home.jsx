import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from "axios";

const Home = () => {

  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;  //get search parameter when category is selected
  //console.log(cat);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchPosts();
  }, [cat]);  //  whenever a category is selected it refetches the posts

  //convert string html recieved from server to HTML text
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");

    return doc.body.textContent
  }

  return (
    <div className='home'>
      <div className="posts">
        {
          posts.map((post) => (
            <div key={post.id} className='post'>
              <div className='img'>
                <img src={`http://localhost:8800/Images/${post.img}`} alt="" />
              </div>

              <div className="content">
                <Link className='link' to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{getText(post.desc)}</p>

                <Link className='link' to={`/post/${post.id}`}>
                  <button>Read More</button>
                </Link>

              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home