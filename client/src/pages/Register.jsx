import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

const Register = () => {

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [err, setErr] = useState("");

  //console.log(inputs);

  const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
  }

  const handleSubmit = async(e) => {
    e.preventDefault();  //prevent page refresh

    await axios.post("/auth/register", inputs)
    .then((res) => {
      console.log(res.data);
      navigate("/login");
    }
    ).catch((err)=>{
      setErr(err.response.data.message);  //display error
    })
  }
  
  return (
    <div className='auth'>
      <h1>Register</h1>

      <form>
        <input required type="text" name='username' placeholder='Username' onChange={handleChange} />
        <input required type="text" name='email' placeholder='Email' onChange={handleChange} />
        <input required type="password" name='password' placeholder='Password' onChange={handleChange} /> 
        <button onClick={handleSubmit}>Register</button>

        {
          err && (<p>{err}</p>)
        }

        <span>
          Do you have an account? <Link to="/login">Login</Link>
          </span>
      </form>
    </div>
  )
}

export default Register