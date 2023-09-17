import React from "react";

import { HiArrowNarrowRight } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { FaGithub, FaFileDownload } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

// import i18n from "../i18n";

const Navbar = () => {
  const { i18n, t } = useTranslation("global");
  // const [isSpanish, setIsSpanish] = useState(false);


  console.log(i18n);

  function changeGitHub() {
    window.location.href = "https://github.com/moichubr";
  }

  function changeLinkdIn() {
    window.location.href = "https://www.linkedin.com/in/moira-brun/";
  }

  function changeResume() {
    i18n.languages[0] === 'es'
      ? (window.location.href =
          "https://drive.google.com/file/d/18yQ-KptHAq3hchP4OJqaqJDMJLRVquBk/view?usp=sharing")
      : (window.location.href =
          "https://drive.google.com/file/d/1-i4o9xoTEp1PaL499Sm4WPBKv1SKtH45/view?usp=sharing");
  }

  return (
    <header className="bg-indigo-950 sticky top-0 z-10">
      <div className="container relative mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center max-w-full">
        <a
          href="#about"
          className="ml-3 text-xl title-font font-medium text-white mb-4 md:mb-0"
        >
          Moira Brun
        </a>

        <nav className=" md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-white hover:font-bold">
            {t("navbar.op1")}
          </a>
          <a href="#skills" className="mr-5 text-white hover:font-bold">
            {t("navbar.op2")}
          </a>
          <a href="#certificates" className="mr-5 text-white hover:font-bold">
            {t("navbar.op3")}
          </a>
        </nav>
        {/* flex flex-col md:flex-row items-end md:items-center */}
        
        <div className="flex flex-col sm:flex-row items-end md:items-center md:ml-4 md:text-center lg:ml-auto md:mr-4">
         <div className="flex items-center">
          <div className="text-white mr-4 mt-4 lg:mt-0 ">
            <button onClick={changeGitHub} className="mr-4" title="GitHub">
              <FaGithub size={25} />
            </button>
            <button onClick={changeLinkdIn} className="mr-4" title="LinkedIn">
              <AiFillLinkedin size={25} />
            </button>
            <button onClick={changeResume} title="Resume">
              <FaFileDownload size={25} />
            </button>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center bg-green-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0 md:ml-auto mr-0 justify-end"
          >
            {t("navbar.op4")}
            <HiArrowNarrowRight className="w-4 h-4 ml-1" />
          </a>
          </div>


          <div className="md:w-auto w-full mx-auto md:text-center lg:ml-4 ">
            <div className="md:flex md:space-x-1 space-y-2 md:space-y-0">
              <button
                className="text-white hover:font-bold m-1 text-base"
                onClick={() => {
                  i18n.changeLanguage("en");
                }}
                title="English"
              >
                EN
              </button>
              <span className="text-white"> </span>
              <button
                className="text-white hover:font-bold m-1 text-base"
                onClick={() => {
                  i18n.changeLanguage("es");
                }}
                title="Español"
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
