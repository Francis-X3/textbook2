import React, { useState } from 'react'
import './form.css'
import axios from 'axios'


const Form=()=> {
  const [entry,setEntry] = useState({
    title:"",
    description:"",
    code:"",
  });
    
  
  const handleInputChange =(e)=>{
    const {name,value} = e.target
    setEntry({...entry, 
    [name]:value})
  }

  const uploadData=(e)=>{
    e.preventDefault();
    const {title,description,code} = entry;
    if(title && description && code){
      
      axios.post('http://localhost:5004/form',entry)
      .then(res => console.log(res))
    }
    else{
      alert('invalid input')
    }
    }
  return (
    <div className='body'>
      {console.log("entry" , entry)}
      <form className='form' >
        {console.log()}
          <ul className='form-elements'>
            <li><h1>Data Submission Form</h1></li>
              
              <input name='title' value={entry.title} placeholder= 'Title' type="text" onChange={handleInputChange}/>
              
              <input name='description' value={entry.description} placeholder='Description' type="text" onChange={handleInputChange} />
             
              <input name='code' value={entry.code} placeholder='Your code here' type="text"  onChange={handleInputChange}/>
         
              <input type="file" placeholder='upload file' onChange={handleInputChange} />
              <button  className='btn' type='submit' onClick={uploadData}>Upload</button>
          </ul>
      </form>
    </div>
  )
}

export default Form
