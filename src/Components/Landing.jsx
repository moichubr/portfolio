import React from "react";
import profile_picture from "../assets/profile_picture.png";

const Landing = () => {
  return (
    <section id="about" class="py-8 md:py-16 lg:py-2">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:w-full items-center">
          <div class="text-center md:text-left md:mt-12 lg:mt-24 md:ml-12 lg:ml-32">
            <p class="text-white font-semibold text-4xl sm:text-5xl md:text-5xl lg:text-3xl">
              Welcome!
            </p>
            <p class="lg:text-indigo-950 md:text-indigo-950 font-bold text-5xl sm:text-6xl md:text-6xl lg:text-6xl mt-2">
              I'm Moira Brun
            </p>
            <p class="text-white font-light text-xl sm:text-2xl md:text-2xl lg:text-xl mt-2">
              FullStack web developer
            </p>
            <p class="text-white font-light md:text-lg lg:text-base mt-2">
              Committed to delivering user-centric experiences, I excel in both
              frontend and backend development, ensuring seamless functionality
              and dynamic interactions applying modern web developing
              technologies. Eager to contribute my expertise and drive to
              innovative projects, I am enthusiastic about collaborating with
              teams that share a common goal of generating a positive impact.
            </p>

            <div class="flex flex-col md:flex-row mt-4 md:mt-6 space-y-2 md:space-y-1 md:space-x-2 lg:space-x-4">
              <a
                href="https://calendly.com/brunmoira/meeting"
                class="inline-flex justify-center items-center text-white bg-green-500 border-0 py-2 px-3 md:px-4 lg:px-6 focus:outline-none hover:bg-green-600 rounded text-base md:text-lg"
              >
                Coordinate a meeting
              </a>
              <a
                href="#projects"
                class="mt-3 md:mt-0 inline-flex justify-center items-center text-gray-400 bg-indigo-950 border-0 py-2 px-3 md:px-4 lg:px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base md:text-lg"
              >
                Take a look at my projects
              </a>
            </div>
          </div>

          <div class="text-center md:text-center md:mt-8 lg:mt-10 lg:ml-20 md:w-2/3 lg:w-full">
            <img
              src={profile_picture}
              alt="Moira Brun"
              class="w-full md:w-3/5 h-auto rounded-full mx-auto md:mx-0 md:mt-16"
            />
          </div>
        </div>
      </div>
    </section>

    // <section id="about">
    // <div class="grid grid-cols-2 h-fit w-full">
    //     <div class="col-span-1 text-left mt-24 ml-32">
    //     <p className="text-white font-semibold text-4xl ">Welcome!</p>
    //     <p className="text-indigo-950 font-bold text-6xl ">I'm Moira Brun</p>
    //     <p className="text-white font-light text-2xl">FullStack web developer</p>
    //     <p className="text-white font-light text-lg mt-2">
    //     Committed to delivering user-centric experiences, I excel in both frontend and backend development, ensuring seamless functionality and dynamic interactions applying modern web developing technologies. Eager to contribute my expertise and drive to innovative projects, I am enthusiastic about collaborating with teams that share a common goal of generate a positive impact.
    //     </p>

    //     <div className="flex justify-center mt-6">
    //     <a
    //       href="https://calendly.com/brunmoira/meeting"
    //       className="inline-flex  text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
    //       Coordinate a meeting
    //     </a>
    //     <a
    //       href="#projects"
    //       className="ml-4 inline-flex text-gray-400 bg-indigo-950 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
    //       Take a look at my projects
    //     </a>
    //   </div>
    //     </div>

    //     <div>
    //         <img src={profile_picture} alt="Moira Brun" className="col-span-1 w-3/5 h-auto rounded-full ml-28 mt-20"/>
    //     </div>

    // </div>
    // </section>
  );
};

export default Landing;
