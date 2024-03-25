import React from "react";
import { useTranslation } from "react-i18next";
import RrssButtons from "./Reusable/RrssButtons";

const Contact = () => {
  const { t } = useTranslation("global");

  return (
    <section
      id="contact"
      className="bg-[#E9E2DC] flex lg:flex-row xl:flex-row flex-col h-auto max-h-auto w-full max-w-full md:px-24 lg:px-48 xl:px-48 px-4 lg:pt-20 xl:pt-20 pt-6 pb-14 lg:pb16 xl:pb-16 "
    >
      <div className="py-10 flex flex-col lg:w-[50%] xl:w-[50%] w-full md:items-center lg:items-start">
        <h2
          style={{
            background: "linear-gradient(90deg, #240046, #ff0072,  #FFC296)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",

            //        // textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}
          className="lg:text-7xl xl:text-7xl lg:max-w-[90%] xl:max-w-[90%] md:text-center lg:text-left pb-3.5 h-auto max-h-auto text-6xl lg:mb-8 xl:mb-12 mb-4 font-bold poppins-regular"
        >
          {t("contact.title")}
        </h2>
        <p className="text-gray-800 poppins-regular lg:mb-0 xl:mb-0 mb-3 md:max-w-[80%]  md:text-center lg:text-left lg:max-w-auto">
          {t("contact.description")}
        </p>
        <RrssButtons />
      </div>

      {/* -----------form------------ */}
      <div className="container lg:w-[50%] xl:w-[50%] w-full md:justify-center lg:my-6 xl:my-6 mx-auto flex flex-wrap lg:justify-end xl:justify-end">
        <form
          method="POST" //API para gestionar forms
          action="https://formsubmit.co/c5c932f011fd5241af4b6737ae449311"
          name="contact"
          className="lg:w-[80%] md:w-[70%] w-full flex flex-col mt-2 xl:mt-4 lg:mt-4 "
        >
          <div className="relative mb-4 text-left">
            <label
              htmlFor="name"
              className="leading-10 text-md text-pink-800 font-semibold poppins-regular"
            >
              {t("contact.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              minLength="3"
              maxLength="40"
              placeholder="Jane Doe"
              required
              className="w-full bg-transparent border-b poppins-regular border-gray-300 text-sm outline-none text-gray-800 py-1 px-3 leading-8 ease-in-out"
            />
          </div>
          <div className="relative mb-4 text-left">
            <label
              htmlFor="email"
              className="leading-7 text-md text-pink-800 font-semibold poppins-regular"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@mail.com"
              className="w-full bg-transparent border-b poppins-regular border-gray-300 text-sm outline-none text-gray-800 py-1 px-3 leading-8 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4 text-left">
            <label
              htmlFor="message"
              className="leading-10 text-md text-pink-800 font-semibold poppins-regular"
            >
              {t("contact.message")}
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="..."
              minLength="20"
              className="w-full bg-transparent poppins-regular border-b border-gray-300 h-32 text-sm outline-none text-gray-800 py-1 px-3 resize-none leading-6 ease-in-out"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-[#88c29e] poppins-regular border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg mt-3"
          >
            {t("contact.button")}
          </button>

          <input
            type="hidden"
            name="_next"
            value="https://moirabrun.netlify.app/"
          />
          <input type="hidden" name="_captcha" value="false" />
        </form>

        {/* 
         <div className="text-white lg:w-2/5 flex flex-col lg:ml-28 md:w-1/2 bg-transparent  overflow-hidden sm:mr-10 p-10 items-center justify-center relative">
          <h2>Encontrame en mis redes sociales</h2>
          <div className="text-white mt-4">
            <button onClick={changeGitHub} className="mr-2 hover:bg-gray-600 border border-white hover:opacity-90 rounded-full p-2 trasform" title="GitHub">
              <FaGithub size={25} />
            </button>
            <button onClick={changeLinkdIn} className="mr-2 hover:bg-gray-600 border border-white hover:opacity-90 rounded-full p-2 trasform" title="LinkedIn">
              <AiFillLinkedin size={25} />
            </button>
            
          </div> */}

        {/* <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Entre+Ríos,+Argentina&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-lg p-2 items-center justify-center lg:items-start">
            <div className="lg:w-3/4">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                {t("contact.location")}
              </h2>
              <p className="mt-1 text-white">Entre Ríos, Argentina</p>
            </div>
            <div className="lg:w-1/2 mt-4 mx-auto">
              <h2 className="title-font font-semibold text-white tracking-widest text-s">
                <TfiEmail className="text-lg text-white inline-block" />
              </h2>
              <a
                className="text-indigo-400"
                href="mailto:brunmoira@gmail.com?subject=I want a meeting with you&body=Hello! I was looking at your portfolio and ..."
              >
                brunmoira@gmail.com
              </a>

              <div className="mx-auto text-white bg-green-600 hover:bg-white hover:text-green-600 p-2 w-fit rounded-full mt-4">
                <a
                  href="https://api.whatsapp.com/send?phone=3447625497"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>
                    <BsWhatsapp size={30} className="text-lg" />
                  </i>
                </a>
              </div>
            </div>
          </div> */}
        {/* </div>  */}
      </div>
    </section>
  );
};

export default Contact;
