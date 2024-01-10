import React from 'react'
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";


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
      </div>

      <div className="menu">
        menu
      </div>

    </div>
  )
}

export default SinglePost