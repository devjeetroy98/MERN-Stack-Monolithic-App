import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'

import Home from './home';
import About from './about';
import Error from './error';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className='router-container'>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <Routes>
          <Route exact path='/' element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
