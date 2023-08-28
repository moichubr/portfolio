import React from "react";
import {HiArrowNarrowRight} from "react-icons/hi"
import { useTranslation } from 'react-i18next';
// import i18n from "../i18n";


const Navbar = () => {
  // const [isActive, setIsActive] = useState(false)
  // const isActive = ({ isActive }) => `link ${isActive ? 'active' : ''}`
  const {i18n, t} = useTranslation("global")
  

  
  return(
        <header className="bg-indigo-950 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="#about" className="ml-3 text-xl title-font font-medium text-white mb-4 md:mb-0">
            Moira Brun
          </a>
       
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-white hover:font-bold">
            {t("navbar.op1")}
          </a>
          <a href="#skills" className="mr-5 text-white hover:font-bold">
            {t("navbar.op2")}
          </a>
          <a href="#certificates" className="mr-5 text-white hover:font-bold">
            {t("navbar.op3")}
          </a>

          <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        <button  onClick={() => i18n.changeLanguage("es")}>ES</button>
          

        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-green-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0">
          {t('navbar.op4')}
          <HiArrowNarrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
    )
}

export default Navbar