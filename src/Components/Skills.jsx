import React from "react";
import {skills} from "../data"
import {BsCheck2Circle, BsTools} from "react-icons/bs"


const Skills = () => {
    return(
        <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <BsTools className="w-10 inline-block mb-4 text-gray-400 text-2xl" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills and technologies
          </h1>
          <p className="text-base text-white leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Because of mi curiosity and interest on the latest technologies, I'm looking for enhancing my skills practicing and researching about new develop tools to achive a high-quality product.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
  {skills.map((skill) => (
    <div key={skill} className="p-2 sm:w-1/2 w-full">
      <div className="bg-indigo-950 rounded flex p-4 h-full items-center">
      <BsCheck2Circle className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
        <div className="flex-grow"> 
          <span className="title-font font-medium text-white">{skill.skill}</span>
        </div>
        <div className="flex-shrink-0 flex items-center"> 
          <span className="mr-4 text-white text-2xl">{skill.icon}</span>
  
        </div>
      </div>
    </div>
  ))}
</div>
        
      </div>
    </section>
    )
}

export default Skills