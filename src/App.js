import './App.css';
import AboutMe from './components/AboutMe';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

function App() {
  return (
    <div> 
      <Nav />
      <Home />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;
