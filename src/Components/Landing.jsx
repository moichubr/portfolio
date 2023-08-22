import React from "react";
import profile_picture from "../assets/profile_picture.png"


const Landing = () => {

    return(
        <section id="about">
        <div class="grid grid-cols-2 h-fit w-full">
            <div class="col-span-1 text-left mt-24 ml-32">
            <p className="text-white font-semibold text-4xl ">Welcome!</p>
            <p className="text-indigo-950 font-bold text-6xl ">I'm Moira Brun</p>
            <p className="text-white font-light text-2xl">FullStack web developer</p>
            <p className="text-white font-light text-lg mt-2">
            Committed to delivering user-centric experiences, I excel in both frontend and backend development, ensuring seamless functionality and dynamic interactions applying modern web developing technologies. Eager to contribute my expertise and drive to innovative projects, I am enthusiastic about collaborating with teams that share a common goal of generate a positive impact.
            </p>

            <div className="flex justify-center mt-6">
            <a
              href="https://calendly.com/brunmoira/meeting"
              className="inline-flex  text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Coordinate a meeting
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-indigo-950 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Take a look at my projects
            </a>
          </div>
            </div>

            
            <div>
                <img src={profile_picture} alt="Moira Brun" className="col-span-1 w-3/5 h-auto rounded-full ml-28 mt-20"/>
            </div>


        </div>
        </section>
        
    )
}

export default Landing