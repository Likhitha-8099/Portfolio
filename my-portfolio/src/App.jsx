
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Contact from './pages/Contact';

import Projects from './pages/Projects';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
           <Route path="/contact" element={<Contact />} />
      
      </Routes>
      <Footer />
    </div>
  
  )
  
}

export default App
