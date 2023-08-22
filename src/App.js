import './App.css';

import Landing from './Components/Landing';
import Navbar from './Components/Navbar'
import Projects from './Components/Projects';
import Skills from './Components/Skills'
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
