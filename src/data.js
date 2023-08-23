import wanderlust from "./assets/portada.jpg"
import foody from "./assets/foody_landing.jpg"
import homerym from "./assets/landing.png"
import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiRedux, SiJavascript, SiHtml5, SiCss3, SiExpress, SiPostgresql, SiTailwindcss, SiSequelize } from "react-icons/si"
//Mis proyectos
export const myProjects = [
    {
        name:"WANDERLUST",
        date:"JULY 2023-AGUST 2023 (45 DAYS)",
        description:"This innovative e-commerce platform connects travelers with a top-tier travel agency, offering curated packages to the world's most iconic destinations. Can tailor the adventure by adding personalized activities to the itinerary, ensuring your journey will be unique.",
        technologies:["React", "Redux", "TailwindCSS", "HTML5", "Firebase", "PostgreSQL", "Sequelize", "Express", "Cloudinary", "Nodemailer", "Axios", "Vercel", "Railway"],
        image: wanderlust,
        deploy:"https://wanderlust-phi.vercel.app",
        repository:"https://github.com/Wanderlust-8/wanderlust",
        video:"https://www.youtube.com/watch?v=l1Snp-dxvh0",
        
    },
    
    {
        name:"FOODYAPP",
        date:"JUNE 2023 (30 DAYS)",
        description: "This useful app works as a recipe book where user can find over +100 recipes, create there own ones an delete them if wanted. Also, can look up for a recipe by its name or by keyword, filter them by diet type and sort them alphabetically or by health score.",
        technologies:["React", "Redux", "CSS3", "HTML5", "PostgreSQL", "Sequelize", "Express", "Axios"],
        image: foody,
        deploy:"",
        repository:"https://github.com/moichubr/foodyApp",
        video:"",
        
    },
    {
        name:"Rick and Morty",
        date:"JUNE 2023 (30 DAYS)",
        description: "This is an academic project I developed to apply all the learned technologies during bootcamp such as React, Redux, CSS3, Express, Sequelize, PostgreSQL. In this app user can search and filter over +750 Rick and Morty's serie characters, save their favs and delete them if wanted.",
        technologies:["React", "Redux", "CSS3", "HTML5", "PostgreSQL", "Sequelize", "Express", "Axios"],
        image: homerym,
        deploy:"",
        repository:"https://github.com/moichubr/foodyApp",
        video:"",
        
    },


]

export const skills = [{
    skill: "JavaScript",
    icon: <SiJavascript className="mr-2"/>
},
{
    skill: "React",
    icon: <FaReact className="mr-2"/>
},
{
    skill: "Redux",
    icon: <SiRedux className="mr-2"/>
},
{
    skill: "HTML5",
    icon: <SiHtml5 className="mr-2"/>
},
{
    skill: "CSS3",
    icon: <SiCss3 className="mr-2"/>
},
{
    skill: "TailwindCSS",
    icon: <SiTailwindcss className="mr-2"/>
},
{
    skill: "Node.js",
    icon: <FaNodeJs className="mr-2"/>
},
{
    skill: "Express",
    icon: <SiExpress className="mr-2"/>
},
{
    skill: "PostgreSQL",
    icon: <SiPostgresql className="mr-2"/>
},
{
    skill: "Sequelize",
    icon: <SiSequelize className="mr-2"  />
}
]





