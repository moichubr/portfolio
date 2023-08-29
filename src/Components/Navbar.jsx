import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useTranslation } from "react-i18next";
// import i18n from "../i18n";

const Navbar = () => {
  // const [isActive, setIsActive] = useState(false)
  // const isActive = ({ isActive }) => `link ${isActive ? 'active' : ''}`
  const { i18n, t } = useTranslation("global");

  return (
    <header className="bg-indigo-950 md:sticky top-0 z-10">
      <div className="container relative mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="#about"
          className="ml-3 text-xl title-font font-medium text-white mb-4 md:mb-0"
        >
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
          <div className="md:mt-4 md:ml-4 md:w-auto w-full md:absolute md:left-auto left-0 right-0 md:inline-flex md:items-center">
          {/* <div className="absolute left-1/2 justify-center items-end md:mr-auto md:ml-auto  md:py-1 md:pl-4 inline-flex "> */}
          <button
            className="text-white hover:font-bold m-1 text-base"
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </button>
          <span className="text-white ">{" "}</span>

          <button
            className="text-white hover:font-bold m-1 text-base"
            onClick={() => i18n.changeLanguage("es")}
          >
            ES
          </button>
          </div>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-green-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0"
        >
          {t("navbar.op4")}
          <HiArrowNarrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
