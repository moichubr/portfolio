import React from "react";
import Projects from "../Components/Projects";

const Home = () => {

    return(
        
        <div className="h-screen">
        <div class="landing-content">
            <div class="corner-text">
            <p className="text-white font-semibold text-4xl ">Welcome!</p>
            <p className="text-indigo-950 font-bold text-7xl ">I'm Moira Brun</p>
            <p className="text-white font-light text-2xl">and this is what I do...</p>
            </div>
        </div>
            <div className="row-span-1">
            <Projects />

            </div>
        </div>
    )
}

export default Home