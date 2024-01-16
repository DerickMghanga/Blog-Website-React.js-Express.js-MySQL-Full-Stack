import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Menu = ({cat}) => {

    // const posts = [
    //     {
    //       id: 1,
    //       title: "Etiam ultricies nisi vel augue",
    //       desc: "Curabitur blandit mollis lacus. Vivamus consectetuer hendrerit lacus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nunc nonummy metus. Nam pretium turpis et arcu. Nulla porta dolor. Mauris sollicitudin fermentum libero. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.",
    //       img: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    //     {
    //       id: 2,
    //       title: "Etiam ultricies nisi vel augue",
    //       desc: "Curabitur blandit mollis lacus. Vivamus consectetuer hendrerit lacus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nunc nonummy metus. Nam pretium turpis et arcu. Nulla porta dolor. Mauris sollicitudin fermentum libero. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.",
    //       img: "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    //     {
    //       id: 3,
    //       title: "Etiam ultricies nisi vel augue",
    //       desc: "Curabitur blandit mollis lacus. Vivamus consectetuer hendrerit lacus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nunc nonummy metus. Nam pretium turpis et arcu. Nulla porta dolor. Mauris sollicitudin fermentum libero. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.",
    //       img: "https://images.pexels.com/photos/965117/pexels-photo-965117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    //     {
    //       id: 4,
    //       title: "Etiam ultricies nisi vel augue",
    //       desc: "Curabitur blandit mollis lacus. Vivamus consectetuer hendrerit lacus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nunc nonummy metus. Nam pretium turpis et arcu. Nulla porta dolor. Mauris sollicitudin fermentum libero. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.",
    //       img: "https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    //   ];

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const fetchPost = async () => {
        try {
          const res = await axios.get(`/posts?cat=${cat}`);
          setPosts(res.data);
          //console.log(res.data);
        } catch (err) {
          console.log(err);
        }
      }
  
      fetchPost();
    }, [cat]);

  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>

        {
            posts.map((post)=> (
                <div className='post' key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))
        }

    </div>
  )
}

export default Menu