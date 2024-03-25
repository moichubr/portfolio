import { useTranslation } from "react-i18next";
import { MdDesignServices, MdOutlineDevices } from "react-icons/md";
import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { useState } from "react";
import AnimationScrollHandler from "./Reusable/AnimationScrollHandler";

const Services = () => {
  const { t } = useTranslation("global");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <AnimationScrollHandler setIsVisible={setIsVisible} component={"services"}>
      <section
        id="services"
        className=" flex flex-col h-auto max-h-auto w-full max-w-full lg:px-48 xl:px-48 md:px-24 px-4 pt-3 pb-8"
      >
        <div className={`${isVisible ? 'animate-fade-right animate-duration-1000' : ''}flex flex-col mt-20  w-full`}>
          <div className="flex flex-row gap-3 items-center ">
            <span className="bg-pink-700 w-[20px] h-1"></span>{" "}
            <span className="text-pink-900 roboto-regular font-semibold text-md tracking-wide">
              {t("services.title")}
            </span>
          </div>
          <p className="text-pink-900 roboto-regular font-semibold text-2xl tracking-wide">
            {t("services.descripcion")}
          </p>
        </div>

        <div className={` w-full h-auto bg-transparent flex flex-col gap-6 items-center justify-center mt-10 lg:mt-8`}>
          <article className={`${isVisible ? 'animate-flip-up animate-ease-in animate-duration-[2000ms]' : ''} flex lg:flex-row flex-col gap-6 justify-center items-center`}>
            <div className="bg-orange-100 rounded-[10px] px-4 shadow-sm h-[200px] lg:w-[250px] xl:w-[250px] w-[90%] gap-3 py-5 text-center flex flex-col items-center justify-center border-r border-b">
              <span className="flex justify-center mb-2">
                <MdDesignServices color="orange" size={30} />
              </span>
              <p className="poppins-regular text-lg font-semibold text-gray-700">
                {t("services.1.title")}
              </p>
              <p className="poppins-regular text-sm text-gray-600 mt-4 max-w-[88%]">
                {t("services.1.descripcion")}
              </p>
            </div>

            <div className={`${isVisible ? 'animate-flip-up animate-ease-in animate-duration-[2000ms]' : ''} bg-pink-100 rounded-[10px] px-4 shadow-sm h-[200px] lg:w-[250px] xl:w-[250px] w-[90%] flex flex-col items-center justify-center gap-3 py-5 text-center border-r border-b`}>
              <span className="flex justify-center mb-2">
                <FaLaptopCode color="pink" size={30} />
              </span>
              <p className="poppins-regular text-lg font-semibold text-gray-700">
                {t("services.2.title")}
              </p>
              <p className="poppins-regular text-sm text-gray-600 mt-4 max-w-[88%]">
                {t("services.2.descripcion")}
              </p>
            </div>

            <div className={`${isVisible ? 'animate-flip-up animate-ease-in animate-duration-[2000ms]' : ''} bg-violet-100 rounded-[10px] px-4 shadow-sm h-[200px] lg:w-[250px] xl:w-[250px] w-[90%]  gap-3 py-5 text-center flex flex-col items-center justify-center border-r border-b`}>
              <span className="flex justify-center mb-2">
                <FaMobileAlt color="violet" size={30} />
              </span>
              <p className="poppins-regular text-lg font-semibold text-gray-700">
                {t("services.3.title")}
              </p>
              <p className="poppins-regular text-sm text-gray-600 mt-4 md:max-w-[95%] lg:max-w-[88%] max-w-[88%]">
                {t("services.3.descripcion")}
              </p>
            </div>
          </article>

          <article className={`${isVisible ? 'animate-flip-up animate-ease-in animate-duration-[2000ms]' : ''} flex lg:flex-row flex-col gap-6 items-center justify-center  md:px-14 lg:px-0`}>
            <div className="bg-indigo-100 rounded-[10px] px-4 shadow-sm h-[200px] lg:w-[250px] xl:w-[250px] w-[90%]  gap-3 py-5 text-center flex flex-col items-center justify-center border-r border-b">
              <span className="flex justify-center mb-2">
                <MdOutlineDevices color="indigo" size={30} />
              </span>
              <p className="poppins-regular text-lg font-semibold text-gray-700">
                {t("services.4.title")}
              </p>
              <p className="poppins-regular text-sm text-gray-600 mt-4 max-w-[95%]">
                {t("services.4.descripcion")}
              </p>
            </div>

            <div className={`${isVisible ? 'animate-flip-up animate-ease-in animate-duration-[2000ms]' : ''} bg-green-100 rounded-[10px] px-4 shadow-sm h-[200px] lg:w-[250px] xl:w-[250px] w-[90%] flex flex-col items-center justify-center gap-3 py-5 text-center border-r border-b`}>
              <span className="flex justify-center mb-2">
                <FaCode color="green" size={30} />
              </span>
              <p className="poppins-regular text-lg font-semibold text-gray-700">
                {t("services.5.title")}
              </p>
              <p className="poppins-regular text-sm text-gray-600 mt-4 max-w-[88%]">
                {t("services.5.descripcion")}
              </p>
            </div>
          </article>
        </div>
      </section>
    </AnimationScrollHandler>
  );
};

export default Services;
