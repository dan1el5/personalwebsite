// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import components
import Home from "./components/index"
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
