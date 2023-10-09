import React, {Suspense} from 'react'; //suspense: para que la app cargue antes de renderizarse
import './App.css';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar'
import Projects from './Components/Projects';
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Certificates from './Components/Certificates';
import Footer from './Components/Footer'


function App() {

  return (
    <Suspense fallback="loading...">
    <div className="App md:max-w-full lg:max-w-full max-w-full">
      <Navbar />
      <Landing />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
    </Suspense>
  );
}

export default App;
