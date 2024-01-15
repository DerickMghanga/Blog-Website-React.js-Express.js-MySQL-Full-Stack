import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import Menu from '../components/Menu';
import { AuthContext } from "../context/authContext";
import { useState } from 'react';
import axios from 'axios';
import moment from "moment";
import { RxAvatar } from "react-icons/rx";


const SinglePost = () => {

  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  // const params = useParams();
  // console.log(params.id)

  const location = useLocation(); //get URL 
  //console.log(location.pathname);

  const postId = location.pathname.split("/")[2]
  //console.log(postId)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
        //console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchPost();
  }, [postId]);


  const handleDelete = async() => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className='single'>
      <div className="content">
        <img src={post?.img} alt="" />

        <div className="user">
          {
            post?.userImg == null ? <RxAvatar size={46} /> : (
              <img src={post?.userImg} alt="" />
            )
          }

          <div className="info">
            <p>{post?.username}</p>
            <span>Posted {moment(post?.date).fromNow()}</span>
          </div>

          {
            currentUser?.username === post?.username && (
              <div className="edit">
                <div className="edit-icon">
                  <Link to={`/write?edit=2`} className='link'>
                    <CiEdit size={18} />
                  </Link>
                </div>

                <div className="delete-icon" onClick={handleDelete}>
                  <AiOutlineDelete size={18} />
                </div>
              </div>
            )
          }

        </div>

        <h1>{post?.title}</h1>
        
        {/* WE ARE USING RICH TEXT TO WRITE OUR POST AND HAS <p></p> by default */}
        {post?.desc}

      </div>

      <Menu />

    </div>
  )
}

export default SinglePost