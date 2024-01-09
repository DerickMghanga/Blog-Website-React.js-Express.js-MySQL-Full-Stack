import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const posts = [
    {
      id: 1,
      title: "Etiam ultricies nisi vel augue",
      desc: "Curabitur blandit mollis lacus. Vivamus consectetuer hendrerit lacus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nunc nonummy metus. Nam pretium turpis et arcu. Nulla porta dolor. Mauris sollicitudin fermentum libero. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.",
      img: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Etiam ultricies nisi vel augue",
      desc: "Curabitur blandit mollis lacus. Vivamus consectetuer hendrerit lacus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nunc nonummy metus. Nam pretium turpis et arcu. Nulla porta dolor. Mauris sollicitudin fermentum libero. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.",
      img: "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Etiam ultricies nisi vel augue",
      desc: "Curabitur blandit mollis lacus. Vivamus consectetuer hendrerit lacus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nunc nonummy metus. Nam pretium turpis et arcu. Nulla porta dolor. Mauris sollicitudin fermentum libero. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.",
      img: "https://images.pexels.com/photos/965117/pexels-photo-965117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Etiam ultricies nisi vel augue",
      desc: "Curabitur blandit mollis lacus. Vivamus consectetuer hendrerit lacus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nunc nonummy metus. Nam pretium turpis et arcu. Nulla porta dolor. Mauris sollicitudin fermentum libero. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.",
      img: "https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className='home'>
      <div className="posts">
        {
          posts.map((post) => (
            <div key={post.id} className='post'>
              <div className='img'>
                <img src={post.img} alt="" />
              </div>

              <div className="content">
                <Link className='link' to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{post.desc}</p>

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