import HamburgerMenu from "./HamburguerMenu";
import Navbar from "./Navbar";
import {useState, useEffect} from "react"

const Navigation = ({toggleDarkMode}) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 1150px)');
      setIsSmallScreen(mediaQuery.matches);
  
      const handleResize = () => {
        setIsSmallScreen(mediaQuery.matches);
      };
  
      mediaQuery.addEventListener('change', handleResize);
  
      return () => {
        mediaQuery.removeEventListener('change', handleResize);
      };
    }, []);


    return(
        <>
        {isSmallScreen ? <HamburgerMenu toggleDarkMode={toggleDarkMode}/> : <Navbar toggleDarkMode={toggleDarkMode}/>}
      </>
    )
}

export default Navigation