import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import profile_picture from "../assets/profile_picture.png";
import LanguageButtons from "./Reusable/LanguageButtons";

const HamburgerMenu = () => {
  const location = useLocation();
  const currentPath = location.hash;
  const menuRef = useRef(null)
  // console.log('location', location)
  // console.log('current path', currentPath)
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("global");

  // Función para manejar clics fuera del menú
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      // Si el clic ocurrió fuera del menú y el menú está abierto, ciérralo
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Agregar event listener al montar el componente
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Eliminar event listener al desmontar el componente
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
    ref={menuRef}
    className="fixed top-[-1px] z-50 w-100vw flex flex-row justify-between items-center p-4 md:px-14 bg-[#88c29e] border-t border-t-[#88c29e]">
      <img
        src={profile_picture}
        alt="Moira Brun"
        className="w-[10%] h-auto rounded-full"
      />

      <div className="cursor-pointer" onClick={toggleMenu}>
        <div>
          {!isOpen ? 
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
            </g>
          </svg>
          : <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
        </svg>
        
}
          {/* <div className="w-8 h-1 rounded bg-white mb-1"></div>
          <div className="w-8 h-1 rounded bg-white mb-1"></div>
          <div className="w-8 h-1 rounded bg-white "></div> */}
        </div>
      </div>
      <ul
       
        className={`menu-items ${
          isOpen ? "block" : "hidden"
        } sm:w-[48%] md:w-[35%] h-[100vh] max-h-[100vh] z-100 absolute top-[100%] border right-0 bg-[#88c29e] rounded rounded-l-3xl  list-none p-4 m-0 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        } duration-500`}
      >
        <li className="p-2 mt-6">
          <a
            href="#about"
            className={`text-white px-2 pb-2 leading-loose hover:scale-90 transform tracking-wide ${
              currentPath === "#about"
                ? "border-b border-b-white"
                : "no-underline"
            } h-11 lg:text-lg md:text-lg xl:text-xl text-md`}
          >
            {t("navbar.op6")}
          </a>
        </li>
        <li className="p-2">
          <a
            href="#services"
            className={`text-white px-2 pb-2 leading-loose hover:scale-90 transform tracking-wide ${
              currentPath === "#services"
                ? "border-b border-b-white"
                : "no-underline"
            } h-11 lg:text-lg md:text-lg xl:text-xl text-md`}
          >
            {t("navbar.op5")}
          </a>
        </li>

        <li className="p-2 ">
          <a
            href="#skills"
            className={`text-white px-2 pb-2 leading-loose hover:scale-90 transform tracking-wide ${
              currentPath === "#skills"
                ? "border-b border-b-white"
                : "no-underline"
            } h-11`}
          >
            {t("navbar.op2")}
          </a>
        </li>

        <li className="p-2 ">
          <a
            href="#projects"
            className={`text-white px-2 pb-2 leading-loose hover:scale-90 transform tracking-wide ${
              currentPath === "#projects"
                ? "border-b border-b-white"
                : "no-underline"
            } h-11 lg:text-lg md:text-lg xl:text-xl text-md`}
          >
            {t("navbar.op1")}
          </a>
        </li>

        {/* <li className="p-2 ">
          <a
            href="#design"
            className={`text-white px-2 pb-2 leading-loose hover:scale-90 transform tracking-wide ${
              currentPath === "#design"
                ? "border-b border-b-white"
                : "no-underline"
            } h-11 lg:text-lg md:text-lg xl:text-xl text-md`}
          >
            {t("navbar.op7")}
          </a>
        </li> */}

        {/* <li className="p-2">
          <a
            href="#certificates"
            className={`text-white px-2 pb-2 leading-loose tracking-wide ${
              currentPath === "#certificates"
                ? "border-b border-b-white"
                : "no-underline"
            } h-11`}
          >
            {t("navbar.op3")}
          </a>
        </li> */}
        <li className="p-2 mt-8 items-center">
          <a
            href="#contact"
            className={`text-white no-underline tracking-wider font-semibold text-sm`}
          >
            <p className="px-3 py-1.5 rounded text-center hover:scale-90 transform border border-[#E91E63]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #a5124d,  #E91E63)",
            }}>
              {t("navbar.op4")}
            </p>
          </a>
        </li>
      
        <div className="mt-44 w-full px-5">
          <LanguageButtons />
        </div>
      </ul>
    </nav>
  );
};

export default HamburgerMenu;
