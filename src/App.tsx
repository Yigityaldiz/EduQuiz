import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <>
      <div className='font-sora'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <div>
        
      </div>
    </>
  );
}

export default App;
