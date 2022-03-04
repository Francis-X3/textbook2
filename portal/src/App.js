
import './App.css';
import Form from './components/form'
import Login from './components/login'
import Register from './components/register'
import Home from './components/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
import Info from './components/info'


function App() {
  // const [user, setLoginUser] = useState({})
  const [info, setInfo]= useState([])
  useEffect(()=>
{
  axios.post('http://localhost:5004/info')
  .then(res=>setInfo())
})

  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element ={<Home />}/>
            <Route exact path='/form' element={<Form />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/info' element ={ <Info />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
