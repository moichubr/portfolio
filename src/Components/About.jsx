import { useTranslation } from "react-i18next";
import profile_picture from "../../src/assets/profile_picture.png";
import { FaFileDownload } from "react-icons/fa";
import { useState } from "react";
import AnimationScrollHandler from "./Reusable/AnimationScrollHandler";


const About = () => {
  const { i18n, t } = useTranslation("global");
  const [isVisible, setIsVisible] = useState(false);

  function changeResume() {
    i18n.languages[0] === "es"
      ? window.open(
          "https://drive.google.com/file/d/1H1lwav3EUvlQoHK2hfWBVNp97xvn2sut/view?usp=sharing",
          "_blank"
        )
      : window.open(
          "https://drive.google.com/file/d/1I0uwEikRqEKPI-sB-OvF6OvUl-z7roUm/view?usp=sharing",
          "_blank"
        );
  }

  const createParagraphs = () => {
    const text = t("about.text");
    const paragraphs = text.split("\n");
    //  console.log('paragraph', paragraphs)
    return paragraphs;
  };

  const paragraphs = createParagraphs();

  return (
    <AnimationScrollHandler setIsVisible={setIsVisible} component={"about"}>
      <section
        id="about"
        className=" flex flex-col h-auto lg:max-h-auto w-full max-w-full md:px-24 lg:px-48 xl:px-48 px-4 lg:py-3  py-0 "
      >
        <div
          className={`${
            isVisible ? "animate-fade-right animate-duration-[2000ms]" : ""
          } flex flex-col mt-20  w-full`}
        >
          <div className="flex flex-row gap-3 items-center">
            <span className="bg-pink-700 w-[20px] h-1"></span>{" "}
            <span className="text-pink-900 roboto-regular font-semibold text-md tracking-wide">
              {t("about.title")}
            </span>
          </div>
          <p className="text-pink-900 roboto-regular font-semibold text-2xl tracking-wide ">
            {t("about.descripcion")}
          </p>
        </div>

        <div className="flex lg:flex-row xl:flex-row flex-col items-start w-full h-auto sm:py-8 lg:py-8 lg:gap-6 gap-4">
          {/* derecha */}
          <div
            className={`${
              isVisible ? "animate-fade-up animate-duration-[2000ms]" : ""
            } lg:max-w-[50%] xl:max-w-[50%] max-w-[90%] mt-6 lg:mt-0 xl:mt-0`}
          >
            {paragraphs.map((paragraph, i) => {
              return (
                <p
                  index={i}
                  className="text-sm poppins-regular text-gray-700 text-justify leading-6"
                >
                  {paragraph}
                </p>
              );
            })}
            <p className="text-sm poppins-regular text-gray-700 text-justify leading-6">
              {t("about.text2")}
            </p>
            <div className="flex md:flex-row flex-col w-full gap-3 items-center justify-center mt-8">
              <button
                onClick={changeResume}
                className="border border-pink-900 bg-white flex flex-row justify-center gap-3 rounded px-3 py-2 poppins-regular text-pink-900 font-semibold lg:w-[50%] xl:w-[50%] w-full hover:translate-y-2"
                title="Resumen"
              >
                {t("about.button2")}
                <FaFileDownload size={20} />
              </button>

              <button
                className="border border-[#E91E63] rounded px-4 py-2 poppins-regular text-white font-semibold lg:w-[50%] xl:w-[50%] w-full hover:translate-y-2"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #a5124d,  #E91E63)",
                }}
              >
                <a href="#contact">{t("about.button1")}</a>
              </button>
            </div>
          </div>
          {/* izquierda */}
          <div
            className={`flex items-center lg:justify-end xl:justify-end justify-center h-fit lg:mt-8  mt-4`}
          >
            <img
              src={profile_picture}
              alt="Moira Brun"
              className={`${
                isVisible ? "animate-fade-left animate-duration-[2000ms]" : ""
              } w-[80%] h-auto rounded-full `}
            />
          </div>
        </div>
      </section>
    </AnimationScrollHandler>
  );
};

export default About;
