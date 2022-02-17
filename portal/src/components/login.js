import React, { useState } from 'react'
import './login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const login = e => {
    e.preventDefault();
    axios.post('http://localhost:5004/login', user)
      .then(res => (alert(res.data.message)))

  }

  const navigate = useNavigate()


  return (

    <div className='login' >
      {console.log("user", user)}
      <ul className='form' >
        <form className='form-elements'>
          <h1>Login</h1>

          <input placeholder='Email' name='email' value={user.email} onChange={handleChange} type="text" />

          <input placeholder='Password' name='password' value={user.password} onChange={handleChange} type="password" />

          <button onClick={login} type='submit'>login</button>
          <li>or</li>

          <button onClick={() => navigate("/register")} type='submit'>Register</button>
        </form>
      </ul>
    </div>
  )
}
