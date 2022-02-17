import React, { useState } from 'react'
import './login.css'
import axios from 'axios'

export default function Login() {

  const [entry,setEntry] = useState({
    email :"",
    password:""
  });
const handleChange=(e)=>{
 const {name,value} = e.target;
 setEntry({...entry,
  [name]:value
})
}
  
const login=e=>{
  e.preventDefault();
  axios.post('http://localhost:5004/login')

}


  return (
    
    <div className='login' >
      {console.log("user",entry)}
      <ul className='form' >
          <form className='form-elements'>
          <h1>Login</h1>
          
          <input placeholder='Email' name='email' value={entry.email} onChange={handleChange} type="text" />
          
          <input placeholder='Password' name='password' value={entry.password} onChange={handleChange} type="password" />
     
          <button onClick={login} type='submit'>login</button>
          <li>or</li>
          
          <button type='submit'>Register</button>
      </form>
      </ul>
    </div>
  )
}
