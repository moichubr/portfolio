import React from "react";
import myProjects from "../data";

const Projects = () => {

    return(
        <div className="w-full flex flex-col align-center">
            {myProjects?.map((el, index) => {
                return (
                    <div key={index} className="w-2/3 text-left">
                        <img src={el.image} alt={el.name} />
                        <p>{el.name}</p>
                        <p>{el.date}</p>
                        <p>{el.description}</p>
                        <p>Technologies:</p>
                        <ul>
                        {el.technologies?.map((el, index) => {
                            return (
                                <li key={index}>{el}</li>
                            )
                        })}
                        </ul>
                    </div>
                )
            }   
            )}
        </div>
    )
}

export default Projects