import { useState } from "react";
import {myProjects} from "../data";
import { useTranslation } from 'react-i18next';
import ProjectCard from "./ProjectCard";
import AnimationScrollHandler from "./Reusable/AnimationScrollHandler";


const Projects = () => {
  const {t} = useTranslation("global")
  const [isVisible, setIsVisible] = useState(false)

    return(
      <AnimationScrollHandler setIsVisible={setIsVisible} component={'projects'}>
        <section id="projects" className="flex flex-col h-auto max-h-auto w-full max-w-full md:px-24 lg:px-48 xl:px-48 px-4 lg:py-3 xl:py-3 mt-0 pb-14 lg:pb-20 xl:pb-20">
      <div className={`${isVisible ? 'animate-fade-right animate-duration-[2000ms]' : ''}flex flex-col mt-20  w-full`}>
                <div className="flex flex-row gap-3 items-center">
           <span className="bg-pink-700 w-[20px] h-1"></span> <span className="text-pink-900 roboto-regular font-semibold text-md tracking-wide">{t("projects.title")}</span>

                </div>
            <p className="text-pink-900 roboto-regular font-semibold text-2xl tracking-wide">{t("projects.description")}</p>
            </div>
        <div className="flex flex-col w-full mt-8 gap-12 ">
          {myProjects.map((project, index) => (
            <a
              href={project.deploy ? project.deploy : null}
              key={index}
              className={`${isVisible ? 'animate-flip-up animate-duration-[2000ms]' : ''} w-full h-auto`}>
                 <ProjectCard project={project} />
            </a>
          ))}
        </div>
     
    </section>
    </AnimationScrollHandler>


    )
}

export default Projects