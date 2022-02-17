import React, { useState } from 'react'
import axios from 'axios'
import './register.css'
import { useNavigate } from 'react-router-dom'

export default function Register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const register = (e) => {
    e.preventDefault();
    const { name, email, password, reEnterPassword } = user
    if (name && email && password && (password === reEnterPassword)) {
      axios.post('http://localhost:5004/register', user)
    } else {
      alert("invalid input")
    }
  }

  const navigate = useNavigate()
  return (
    <div className='login'>
      <ul className='form'>
        <form className='form-elements' >
        <h1>Register</h1>
        <input name='name' value={user.name} placeholder='Your Name' type="text" onChange={handleChange} />
        <input name='email' value={user.email} placeholder='Your Email' type="email" onChange={handleChange} />
        <input name='password' value={user.password} placeholder='Password' type="password" onChange={handleChange} />
        <input name='reEnterPassword' value={user.reEnterPassword} placeholder='Reenter Password' type="password" onChange={handleChange} />
      <div>
        <button onClick={register} type='submit'>Register</button>
        <li>OR</li>
        <button onClick={() => navigate("/login")} type='submit'>login</button>
      </div>
        </form>
      </ul>
    </div>
  )
}

