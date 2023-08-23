import './App.css';

import Landing from './Components/Landing';
import Navbar from './Components/Navbar'
import Projects from './Components/Projects';
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <div className="App md:w-auto lg:w-full">
      <Navbar />
      <Landing />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
