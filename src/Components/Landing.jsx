import React from "react";
import { useTranslation } from 'react-i18next';
import hero from "../../src/assets/hero.jpg"
import RrssButtons from "./Reusable/RrssButtons";

const Landing = () => {
const {t} = useTranslation("global")


  return (
    <div className="md:grid md:grid-cols-2  md:max-h-screen lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2 flex flex-col h-auto lg:max-h-screen xl:max-h-screen w-full">
      <section className="lg:col-span-1 md:col-span-1 xl:col-span-1 lg:order-1 xl:order-1 flex flex-col relative sm:p-4 md:p-0 lg:p-4 justify-end sm:pb-16 md:pb-36 lg:pb-20 md:ml-[10%] lg:ml-40 xl:ml-40 h-[100vh] ">
        {/* Contenido del texto */}
        <div >
        <p className="animate-fade-up animate-duration-[2000ms] poppins-bold text-6xl md:text-[6rem] lg:text-[6rem] xl:text-[6rem] text-slate-50 max-w-[50%] lg:h-[7rem] md:h-[7rem] h-[5.5rem] leading-0">Moira</p>
        <p className="animate-fade-up animate-duration-[2000ms] poppins-bold text-6xl md:text-[6rem] lg:text-[6rem] xl:text-[6rem] text-slate-400 text-opacity-80 max-w-[50%] lg:h-[5rem] md:h-[5rem] h-[4.5rem] leading-3">Brun</p>
        <p 
        style={{
                 background: "linear-gradient(90deg, #1A237E, #ff0072, #FFEB3B)",
                //  #FFC296  #240046  
                
                 WebkitBackgroundClip: "text",
                 WebkitTextFillColor: "transparent",
                 
          //        // textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
               }}
        className="animate-fade-left animate-duration-[2000ms] poppins-regular font-extrabold tracking-wider xl:text-4xl lg:text-3xl text-2xl -mt-[30px] max-w-fit">
          {t("about.role")}
        </p>
        </div>
        <p className="animate-fade-left animate-duration-[2000ms] text-gray-900 poppins-regular tracking-wide lg:mt-16 md:mt-16 mt-12 text-sm lg:text-md xl:text-md w-full md:max-w-full sm:max-w-[85%]">
          {t("about.description")}
        </p>
       <RrssButtons />
      </section>

      <div className="max-h-screen max-w-full hidden md:block lg:col-span-1 xl:col-span-1 md:col-span-1 relative bottom-0 lg:order-2 xl:order-2 md:order-2 lg:pb-24">
        {/* Imagen de fondo */}
        <div className="animate-fade-left animate-duration-[2000ms] relative md:absolute lg:bottom-24 md:bottom-36 left-0 right-0">
        <img src={hero} alt="hero img" className="lg:w-[80%] w-[80%] h-auto md:w-full my-auto inset-0 object-cover md:pt-0 lg:pt-10 pt-10 lg:object-contain  " />
        </div>
      </div>
    </div>

  );
};

export default Landing;
