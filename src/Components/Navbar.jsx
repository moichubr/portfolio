import React from "react";
import { useTranslation } from "react-i18next";
import profile_picture from "../assets/profile_picture.png";
import LanguageButtons from "./Reusable/LanguageButtons";
import ToggleSwitch from "./Reusable/ToggleSwitch";

const Navbar = ({toggleDarkMode}) => {
  const { t } = useTranslation("global");

  return (
    <nav className="w-full fixed top-0 z-50 pl-32 pr-6  bg-[#E9E2DC] dark:bg-[#0e1118]">
      <div
        className="border-b-2 dark:border-none"
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "2px",
          backgroundImage: "linear-gradient(90deg, #240046, #ff0072, #FFC296)",
          animation: "moveShine 3s linear infinite",
        }}
      ></div>
      <div className="container relative mx-auto flex flex-wrap p-4 flex-row items-center max-w-full ">
        <a
          href="#about"
          className=" text-xl title-font font-medium text-white hover:animate-bounce w-[5%] mr-8"
        >
          <img
            src={profile_picture}
            alt="Moira Brun"
            className="w-full h-auto rounded-full"
          />
        </a>

        <section className="ml-4  border-l	flex flex-wrap items-center text-base justify-center  gap-6  w-[70%]">
          <span className="px-4"></span>
          <a
            href="#about"
            className=" text-[#9287AB] poppins-regular tracking-wide text-[14px] hover:font-semibold hover:border-b-2 hover:border-b-[#9287AB] py-1.5 px-3"
          >
            {t("navbar.op6")}
          </a>
          <a
            href="#services"
            className=" text-[#9287AB] poppins-regular tracking-wide text-[14px] hover:font-semibold hover:border-b-2 hover:border-b-[#9287AB] py-1.5 px-3"
          >
            {t("navbar.op5")}
          </a>
          <a
            href="#skills"
            className=" text-[#9287AB] poppins-regular tracking-wide text-[14px] hover:font-semibold hover:border-b-2 hover:border-b-[#9287AB] py-1.5 px-3"
          >
            {t("navbar.op2")}
          </a>
          <a
            href="#projects"
            className=" text-[#9287AB] poppins-regular tracking-wide text-[14px] hover:font-semibold hover:border-b-2 hover:border-b-[#9287AB] py-1.5 px-3"
          >
            {t("navbar.op1")}
          </a>
          {/* <a href="#certificates" className=" text-[#9287AB] poppins-regular tracking-wide text-[14px] hover:font-semibold hover:border-b-2 hover:border-b-[#9287AB] py-1.5 px-3">
            {t("navbar.op3")}
          </a> */}
        </section>
        {/* flex flex-col md:flex-row items-end md:items-center */}

        <div className="flex flex-col sm:flex-row items-end md:items-center md:ml-4 md:text-center lg:ml-auto md:mr-4">
          <div className="w-auto mx-auto text-center ml-4 ">
            <LanguageButtons />
          </div>
            <ToggleSwitch toggleDarkMode={toggleDarkMode}/>
          
        </div>
       
      </div>
      
    </nav>
  );
};

export default Navbar;
