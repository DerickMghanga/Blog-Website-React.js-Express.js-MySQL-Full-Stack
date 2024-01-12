import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  })

  const [err, setErr] = useState("");

  //console.log(inputs);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();  //prevent page refresh

    await axios.post("/auth/login", inputs)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      }
      ).catch((err) => {
        setErr(err.response.data.message);  //display error
      })
  }

  return (
    <div className='auth'>
      <h1>Login</h1>

      <form>
        <input type="text" placeholder='Username' name='username' onChange={handleChange} />
        <input type="password" placeholder='Password' name='password' onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>

        {
          err && (<p>{err}</p>)
        }

        <span>
          Dont have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login