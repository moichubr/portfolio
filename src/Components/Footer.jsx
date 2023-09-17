import React from "react";
import {BiSolidHeartCircle} from "react-icons/bi"


const Footer = () => {

    return(
        <div className="bg-indigo-950 text-white font-mono text-sm p-2 lg:w-screen max-w-full">
            <p className="mb-0">Copyright © 2023 Moira Brun </p>
            <div className="inline-block text-rose-600 text-2xl">
            <BiSolidHeartCircle />
            </div>
        </div>
    )

}

export default Footer