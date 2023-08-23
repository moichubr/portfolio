import React from "react";
import {BiSolidHeartCircle} from "react-icons/bi"

const Footer = () => {

    return(
        <div className="bg-indigo-950 text-white font-mono text-lg p-2 lg:w-screen">
            <p className="mb-0">Developed with React</p>
            <p>by Moira Brun</p>
            <div className="inline-block text-rose-600 text-2xl">
            <BiSolidHeartCircle />
            </div>
        </div>
    )

}

export default Footer