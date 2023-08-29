import React from "react";
import {BiSolidHeartCircle} from "react-icons/bi"
import { useTranslation } from "react-i18next";

const Footer = () => {
const {t} = useTranslation("global")

    return(
        <div className="bg-indigo-950 text-white font-mono text-lg p-2 lg:w-screen max-w-full">
            <p className="mb-0">{t('footer.title')} </p>
            <p>Moira Brun</p>
            <div className="inline-block text-rose-600 text-2xl">
            <BiSolidHeartCircle />
            </div>
        </div>
    )

}

export default Footer