import {FaYoutube, FaGithub} from "react-icons/fa"
import {CgWebsite} from "react-icons/cg"
import { useTranslation } from "react-i18next"

const ProjectCard = ({project}) => {
    const {t} = useTranslation("global")

    return(
        <article className="w-full bg-transparent h-auto min-h-[300px]  max-h-auto lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2 flex flex-col">
           
            <div className="lg:col-span-1 xl:col-span-1 lg:w-full xl:w-full w-full  h-auto bg-cover bg-center sm:rounded-t-[10px] md:rounded-t-3xl lg:rounded-r-none lg:rounded-l-3xl xl:rounded-l-3xl overflow-hidden" >
                <img className="w-full h-full object-cover" src={project.image} alt="project imagen" />
            </div>
            <div className="lg:col-span-1 xl:col-span-1 w-full h-auto pl-6 lg:rounded-r-3xl xl:rounded-r-3xl bg-white dark:bg-gray-800">
        <h1 className="text-lg poppins-regular text-pink-900 dark:text-slate-300 font-semibold mb-2 mt-3  w-[90%] tracking-wide pb-2 border-b border-b-gray-200">
                    {project.name}
                  </h1>

                  <p className="poppins-regular text-gray-700 dark:text-slate-400 max-w-[90%]  min-h-[120px] text-sm">{t(`projectsdata.${project.id}.description`)}</p>

                  <h2 className="text-[12px] poppins-regular font-bold tracking-tight text-pink-900 dark:text-slate-300 border-b-2 border-pink-800 dark:border-slate-300 w-fit pr-2 py-0.5 mt-2 mb-1">
                {t('projects.stack')}  </h2>
              
                        
                        <ul className="flex flex-row gap-x-3 gap-y-2 flex-wrap mt-3 max-w-[95%] lg:max-w-full xl:max-w-full">
                        {project.technologies?.map((el, index) => {
                            return (
                                <li key={index} className="bg-pink-950 bg-opacity-30 dark:bg-pink-400 dark:bg-opacity-10  text-white font-semibold text-sm px-3 py-1 rounded-full flex items-center">{el}</li>
                         )
                        })}
                        </ul>
                        
                        <div className="gap-3 justify-start flex py-2 ">
              {
                project.video ? (
          <div>
            <a href={project.video} title="Presentation video">
            <FaYoutube className="text-2xl" color="#6A557E"/>
            </a>
          </div>
                ) : null
              }
            {project.repository ? 
          <div>
            <a href={project.repository} title="Repository">
            <FaGithub className="text-2xl" color="#6A557E"/>
            </a>
          </div> : null}

            { project.deploy ?
          (<div>
           <a href={project.deploy} title="Deployment">
            <CgWebsite className="text-2xl" color="#6A557E"/>
            </a>
          </div>) :  null 
        }

            </div>

            </div>
           
           
            </article>
    )
}

export default ProjectCard