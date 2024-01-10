import React from 'react'
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import Menu from '../components/Menu';


const SinglePost = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

        <div className="user">
          <img src="https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />

          <div className="info">
            <p>John</p>
            <span>Posted 2 days ago</span>
          </div>

          <div className="edit">
            <div className="edit-icon">
              <Link to={`/write?edit=2`} className='link'>
                <CiEdit size={18} />
              </Link>
            </div>

            <div className="delete-icon">
              <AiOutlineDelete size={18} />
            </div>
          </div>
        </div>

        <h1>Pellentesque ut neque. Nullam accumsan lorem in dui.</h1>
        <p>
          Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Aenean massa. Praesent egestas neque eu enim. Etiam vitae tortor.
          Vestibulum suscipit nulla quis orci. Etiam ultricies nisi vel augue. Duis lobortis massa imperdiet quam. Aenean massa.
          Vivamus consectetuer hendrerit lacus. Nullam vel sem. Phasellus blandit leo ut odio. Fusce vulputate eleifend sapien.
          Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Ut id nisl quis enim dignissim sagittis. Sed aliquam ultrices mauris. Proin faucibus arcu quis ante.

          <br />
          <br />

          Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Aenean massa. Praesent egestas neque eu enim. Etiam vitae tortor.
          Vestibulum suscipit nulla quis orci. Etiam ultricies nisi vel augue. Duis lobortis massa imperdiet quam. Aenean massa.
          Vivamus consectetuer hendrerit lacus. Nullam vel sem. Phasellus blandit leo ut odio. Fusce vulputate eleifend sapien.
          Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Ut id nisl quis enim dignissim sagittis. Sed aliquam ultrices mauris. Proin faucibus arcu quis ante.

          <br />
          <br />

          Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Aenean massa. Praesent egestas neque eu enim. Etiam vitae tortor.
          Vestibulum suscipit nulla quis orci. Etiam ultricies nisi vel augue. Duis lobortis massa imperdiet quam. Aenean massa.
          Vivamus consectetuer hendrerit lacus. Nullam vel sem. Phasellus blandit leo ut odio. Fusce vulputate eleifend sapien.
          Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Ut id nisl quis enim dignissim sagittis. Sed aliquam ultrices mauris. Proin faucibus arcu quis ante.

          <br />
          <br />

          Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Aenean massa. Praesent egestas neque eu enim. Etiam vitae tortor.
          Vestibulum suscipit nulla quis orci. Etiam ultricies nisi vel augue. Duis lobortis massa imperdiet quam. Aenean massa.
          Vivamus consectetuer hendrerit lacus. Nullam vel sem. Phasellus blandit leo ut odio. Fusce vulputate eleifend sapien.
          Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Ut id nisl quis enim dignissim sagittis. Sed aliquam ultrices mauris. Proin faucibus arcu quis ante.
        </p>
      </div>

      <Menu />

    </div>
  )
}

export default SinglePost