import {Suspense} from 'react'; //suspense: para que la app cargue antes de renderizarse
import './App.css';
import Home from './Components/Home';
import {Route, Routes, useLocation} from "react-router-dom"
import Navigation from './Components/Navigation';


function App() {
const location = useLocation()

  return (
    <>
    {location.pathname === "/" && (
        <Navigation />
      )}

    <Suspense fallback="loading...">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Suspense>
    </>
  );
}

export default App;
