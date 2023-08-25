import React from "react";
import {myProjects} from "../data";
import {FaCode, FaYoutube, FaGithub} from "react-icons/fa"
import {CgWebsite} from "react-icons/cg"


const Projects = () => {

    return(
        <section id="projects" className="text-gray-400 body-font mt-1">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <FaCode className="mx-auto inline-block w-10 mb-4 text-2xl" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects I developed
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-white text-base">
            Here's some of my main projects that I developed by myself and in collaboration with collegues, applying the agile <b>SCRUM</b> method. I'm always ready and motivated to start new challenges! I'm strongly result-oriented: love designing, creating and materializing solutions for each particular case. Give client the <em>best experience</em> is my goal.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {myProjects.map((project, index) => (
            <a
              href={project.deploy ? project.deploy : null}
              key={index}
              className="sm:w-1/2 w-100 p-4">
                 <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.name}
                  </h1>
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                 
                  <p className="leading-relaxed">{project.description}</p>

                <h2 className="text-sm title-font font-medium text-green-400 mb-1">
                    Technologies stack:
                        <div>
                        {project.technologies?.map((el, index) => {
                            return (
                                <span key={index}>| {el} |</span>
                         )
                        })}
                        </div>
                        
                  </h2>
                </div>
              </div>
            <div className="text-white justify-center flex mt-2">
              {
                project.video ? (
          <div className="mr-4">
            <a href={project.video} title="Presentation video">
            <FaYoutube className="text-2xl"/>
            </a>
          </div>
                ) : null
              }
          <div className="mr-4">
            <a href={project.repository} title="Repository">
            <FaGithub className="text-2xl"/>
            </a>
          </div>

            { project.deploy ?
          (<div className="mr-4">
           <a href={project.deploy} title="Deployment">
            <CgWebsite className="text-2xl"/>
            </a>
          </div>) :  null 
        }

            </div>
            </a>
          ))}
        </div>
      </div>
    </section>


    )
}

export default Projects