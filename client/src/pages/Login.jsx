import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

const Login = () => {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
      username: "",
      password: ""
    })

    const [err, setErr] = useState("");

    const {login, currentUser} = useContext(AuthContext);

    //console.log(currentUser);
    //console.log(inputs);

    const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
      e.preventDefault();  //prevent page refresh
      
      try {
        await login(inputs);
        navigate("/");
      } catch (err) {
        setErr(err.response.data.message);
      }
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