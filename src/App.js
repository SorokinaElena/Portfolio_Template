import './App.css';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Nav from './components/Nav';
import Skills from './components/Skills';

function App() {
  return (
    <div> 
      <Nav />
      <Home />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
