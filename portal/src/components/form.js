import React, { useState } from 'react'
import './form.css'
import axios from 'axios'


const Form=()=> {
  const [user,setUser] = useState({
    title:"",
    description:"",
    code:"",
  });
    
  
  const handleInputChange =(e)=>{
    const {name,value} = e.target
    setUser({...user, 
    [name]:value})
  }

  const uploadData=()=>{
    const {title,description,code} = user;
    if(title && description && code){
      alert("posted")
      // axios.post
    }
    else{
      alert('invalid input')
    }
    }
  return (
    <div className='body'>
      {console.log("user" , user)}
      <form className='form' >
        {console.log()}
          <ul className='form-elements'>
            <li><h1>Data Submission Form</h1></li>
              
              <input name='title' value={user.title} placeholder= 'Title' type="text" onChange={handleInputChange}/>
              
              <input name='description' value={user.description} placeholder='Description' type="text" onChange={handleInputChange} />
              
              <input name='code' value={user.code} placeholder='Your code here' type="text"  onChange={handleInputChange}/>
              
              <input type="file" placeholder='upload file' onChange={handleInputChange} />

              <button  className='btn' type='submit' onClick={uploadData}>Upload</button>
          </ul>
      </form>
    </div>
  )
}

export default Form
