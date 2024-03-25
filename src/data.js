import wanderlust from "./assets/portada.jpg"
import foody from "./assets/foody_landing.jpg"
import homerym from "./assets/landing.png"
import agroseed from "./assets/agroseed.png"
import horses_house from "./assets/Horses_House.png"
import { FaReact, FaNodeJs, FaFigma, FaGithub } from "react-icons/fa"
import { TbBrandReactNative } from "react-icons/tb";
import { SiTypescript, SiVitest, SiNextdotjs, SiRedux, SiJavascript, SiHtml5, SiCss3, SiExpress, SiPostgresql, SiTailwindcss, SiSequelize, SiExpo, SiWebpack } from "react-icons/si"

//Mis proyectos
export const myProjects = [
    {
        name:"THE HORSES HOUSE",
        id:"1",
        date:"MAR 2024",
        description:"Project to digitalize the ecuestrian world.",
        technologies:["Next","Redux Toolkit", "React Native", "Expo", "TailwindCSS", "Node", "AWS", "Firebase", "MongoDB"],
        image: horses_house,
        deploy:"https://play.google.com/store/apps/details?id=com.blackstallion.thehorseshouse&hl=es_AR&gl=US",
        repository:"",
        video:"",
        
    },
    {
        name:"AGROSEED SERVICIOS",
        id:"2",
        date:"SEPTEMBER 2022",
        description:"A Landing Page for an agricultural company with the goal of bolstering its digital presence. The information architecture is geared towards providing a clear and straightforward user experience, communicating the services offered and the company's added value, with a focus on facilitating a swift and personalized contact process between the visitor and the company via WhatsApp.",
        technologies:["Vite.js", "React", "React-icons", "TailwindCSS", "HTML5", "Cloudinary", "WhatsApp API", "Netlify"],
        image: agroseed,
        deploy:"https://agroseedservicios.com",
        repository:"https://github.com/moichubr/agroseeds",
        video:"",
        
    },
    {
        name:"WANDERLUST",
        id:"3",
        date:"AGUST 2023",
        description:"This innovative e-commerce platform connects travelers with a top-tier travel agency, offering curated packages to the world's most iconic destinations. Can tailor the adventure by adding personalized activities to the itinerary, ensuring your journey will be unique.",
        technologies:["React", "Redux", "TailwindCSS", "HTML5", "CSS", "Firebase", "PostgreSQL", "SQL", "Node", "Express", "Cloudinary", "Nodemailer", "OpenAI API"],
        image: wanderlust,
        deploy:"https://wanderlust-phi.vercel.app",
        repository:"https://github.com/Wanderlust-8/wanderlust",
        video:"https://www.youtube.com/watch?v=zCYnhixTC0c",
        
    },
    
    {
        name:"FOODYAPP",
        id:"4",
        date:"JUNE 2023",
        description: "This useful app, completely responsive, works as a recipe book where user can find over +100 recipes, create there own ones an delete them if wanted. Also, can look up for a recipe by its name or by keyword, filter them by diet type and sort them alphabetically or by health score.",
        technologies:["React", "Redux", "CSS", "HTML", "APIRest", "Node", "PostgreSQL", "Sequelize", "Express", "Axios"],
        image: foody,
        deploy:"",
        repository:"https://github.com/moichubr/foodyApp",
        video:"https://youtu.be/wDCsNpNwHAo",
        
    },
    {
        name:"RICK AND MORTY",
        id:"5",
        date:"MAR 2023",
        description: "This is an academic project I developed to apply all the learned technologies during bootcamp such as React, Redux, CSS3, Express, Sequelize, PostgreSQL. In this app user can search and filter over +750 Rick and Morty's serie characters, save their favs and delete them if wanted.",
        technologies:["React", "Redux", "CSS3", "HTML5", "APIRest", "Node", "PostgreSQL", "Sequelize", "Express", "Axios"],
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
    skill: "TypeScript",
    icon: <SiTypescript className="mr-2"/>
},
{
    skill: "SQL",
    icon: <SiSequelize className="mr-2"  />
},
{
    skill: "React",
    icon: <FaReact className="mr-2"/>
},
{
    skill: "HTML",
    icon: <SiHtml5 className="mr-2"/>
},
{
    skill: "CSS",
    icon: <SiCss3 className="mr-2"/>
},
{
    skill: "Next",
    icon: <SiNextdotjs className="mr-2"/>
},
{
    skill: "React Native",
    icon: <TbBrandReactNative className="mr-2"/>
},
{
    skill: "Redux",
    icon: <SiRedux className="mr-2"/>
},
{
    skill: "Expo",
    icon: <SiExpo className="mr-2"/>
},
{
    skill: "TailwindCSS",
    icon: <SiTailwindcss className="mr-2"/>
},
{
    skill: "Vite",
    icon: <SiVitest className="mr-2"/>
},
{
    skill: "Webpack",
    icon: <SiWebpack className="mr-2"/>
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
    skill: "Figma",
    icon: <FaFigma className="mr-2"/>
},
{
    skill: "GitHub",
    icon: <FaGithub className="mr-2"/>
},

]

export const certificates = [{
    title: "FullStack Web Developer",
    img: "https://certificates.soyhenry.com/new-cert?id=fc82790c32b4cfb3e91273ff4c79bb901d819590c8b2d970804f60552b00f986"
},
{
    title: "UX/UI Design",
    img: "https://www.udemy.com/certificate/UC-e14f930a-1ea9-41dd-b19e-b2cf9440e856/"
},
{
    title: "Scrum Fundamentals",
    img: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1003043"
},
{
    title: "English C2 Proficient",
    img: "https://www.efset.org/cert/KqDFiw"
}
]





