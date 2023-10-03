// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import components
import Home from "./components/index"
import DevPortfolio from './components/DevPortfolio'
import Agency from './components/Agency'
import NavBar from "./components/NavBar"
import Newsletter from './components/Newsletter';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/agency" element={<Agency />} />
          <Route path="/devportfolio" element={<DevPortfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
