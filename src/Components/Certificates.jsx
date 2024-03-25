import React from "react";
import {PiCertificate} from "react-icons/pi"
import { certificates } from "../data";
import { useTranslation } from "react-i18next";

const Certificates = () => {
  const {t} = useTranslation("global")

  return (
    <section id="certificates" className="lg:mb-12">
      <div className="text-white text-center container px-5 py-10 mx-auto max-w-full">
        <PiCertificate className="w-10 inline-block mb-4 text-gray-400 text-5xl"/>
        <p className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">{t("certificates.title")}</p>
        
      
            
        <div className="lg:flex-row lg:justify-evenly lg:w-[3/4] lg:mx-auto flex flex-col lg:items-center w-full lg:pt-10">
  
    {certificates?.map((cert) => {
      return (
        <a href={cert.img} key={cert.title}>
          <span className="font-semibold text-base mb-2 bg-indigo-950 hover:bg-indigo-900 hover:scale-95 transform text-white p-4 w-full rounded-3xl">
            {cert.title}
          </span>
        </a>
      );
    })}
 
</div>
     
      </div>
    
    </section>
  );
};

export default Certificates;
