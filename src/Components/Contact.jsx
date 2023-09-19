import React from "react";
import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { useTranslation } from "react-i18next";
// import validate from "./ContactValidation";

const Contact = () => {
  const { t } = useTranslation("global");
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const [errors, setErrors] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  const handleInputChange = (e) => {
    e.preventDefault();

    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });

    // setErrors(
    //   validate({
    //     ...contactData,
    //     [e.target.name]: e.target.value,
    //   })
    // );
  };

  return (
    <section id="contact" className="relative">
      <div className="container max-w-full px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/5 lg:ml-28 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-center relative">
          <iframe
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
          </div>
        </div>
        <form
          action="https://formsubmit.co/c5c932f011fd5241af4b6737ae449311"
          method="POST" //API para gestionar forms
          name="contact"
          className="lg:w-1/3 lg:mr-36 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            {t("contact.title")}
          </h2>
          <p className="text-white mb-5">{t("contact.description")}</p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              {t("contact.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactData.name}
              onChange={handleInputChange}
              className="w-full bg-gray-200 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {/* {errors.name ? (
              <span className="text-indigo-950 text-s">
                <b>{errors.name}</b>
              </span>
            ) : null} */}
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactData.email}
              onChange={handleInputChange}
              className="w-full bg-gray-100 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {/* {errors.email ? (
              <span className="text-indigo-950">
                <b>{errors.email}</b>
              </span>
            ) : null} */}
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              {t("contact.message")}
            </label>
            <textarea
              id="message"
              name="message"
              value={contactData.message}
              onChange={handleInputChange}
              className="w-full bg-gray-100 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
            {/* {errors.message ? (
              <span className="text-indigo-950">
                <b>{errors.message}</b>
              </span>
            ) : null} */}
          </div>
          {/* {!errors.length ? ( */}
          <button
            type="submit"
            className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            {t("contact.button")}
          </button>
          {/* ) : window.alert("Check the provided information")} */}
          <input
            type="hidden"
            name="_next"
            value="https://moirabrun.netlify.app/"
          />
          <input type="hidden" name="_captcha" value="false" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
