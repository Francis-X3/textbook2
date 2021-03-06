import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Html from './pages/Html'
import Javascript from './pages/Javascript';
import Css from './pages/Css';
import  Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/html' exact element={<Html />} />
          <Route path='/css' element = {<Css />}/>
         <Route path='/javascript' element = {<Javascript />}/>
         <Route path='/home' element ={<Home />}/>
        </Routes>

      </Router>
    </>
  );
}

export default App;
