import React from 'react'

export default function login() {
  return (
    <div>
      <ul>
          <h1>Register</h1>
          <input placeholder='Your Name' type="text" />
          <input placeholder='Your Email' type="email" />
          <input placeholder='Password' type="password" />
          <input placeholder='Reenter Password' type="password" />
      </ul>
      <div>
          <button type='submit'>login</button>
          <button type='submit'>Register</button>
      </div>
    </div>
  )
}