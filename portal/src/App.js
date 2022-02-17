import logo from './logo.svg';
import './App.css';
import Form from './components/form'
import Login from './components/login'
import Register from './components/register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';

function App() {
  const [user, setLoginUser] = useState({})
  return (
    <>
      <div className="App">
        {/* <Login />
      <Form />
      <Register /> */}
        <Router>
          <Routes>
            <Route exact path='/' />
            <Route exact path='/form' element={<Form />} />
            /
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
