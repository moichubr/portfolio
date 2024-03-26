import React from "react";
import {BiSolidHeartCircle} from "react-icons/bi"
import { useTranslation } from "react-i18next";


const Footer = () => {
    const { t } = useTranslation("global");

    return(
        <section className="lg:w-screen max-w-full h-20 flex flex-col justify-center items-center py-8 dark:bg-body">
            <p className="mb-0 poppins-regular text-indigo-950 dark:text-gray-600 text-sm pt-4 ">{t("footer.title")} Moira Brun </p>
            <div className="inline-block text-pink-700 text-2xl pb-4">
            <BiSolidHeartCircle />
            </div>
        </section>
    )

}

export default Footer