import React from 'react'
import {useNavigate} from 'react-router-dom'
import './home.css'
export default function Home() {

    const navigate = useNavigate()
  return (
      <div className='wrapper'>
    <div className='card'>
      <h1>Welcome</h1>
      <h4>Login to Access data from the DB</h4>
      <button onClick={()=>navigate('./login')}>Login</button>
      <h6>New user?</h6>
      <button onClick={()=>navigate('./register')}>Register</button>
    </div>
    </div>
  )
}
