import {Suspense, useState, useEffect} from 'react'; //suspense: para que la app cargue antes de renderizarse
import './App.css';
import Home from './Components/Home';
import {Route, Routes, useLocation} from "react-router-dom"
import Navigation from './Components/Navigation';



function App() {
const location = useLocation()
const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  if (darkMode) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}, [darkMode]);

const toggleDarkMode = () => {
  setDarkMode(!darkMode);
};

  return (
    <>
    {location.pathname === "/" && (
        <Navigation toggleDarkMode={toggleDarkMode}/>
      )}

    <Suspense fallback="loading...">
      <Routes>
        <Route exact path='/' element={<Home />} />
        {/* <Route path='/successSubmition' element={<Thankyou />} /> */}
      </Routes>
    </Suspense>
    </>
  );
}

export default App;
