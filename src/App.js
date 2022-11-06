// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import components
import Home from "./components/index"
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Projects from './components/Projects'
import NavBar from "./components/NavBar"

import ParticlesComponent from './components/Particles';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <ParticlesComponent id="tsparticles" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
