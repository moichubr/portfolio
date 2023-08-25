import React from "react";
import {PiCertificate} from "react-icons/pi"
import { certificates } from "../data";

const Certificates = () => {
  return (
    <section id="certificates">
      <div className="text-white text-center container px-5 py-10 mx-auto">
        <PiCertificate className="w-10 inline-block mb-4 text-gray-400 text-5xl"/>
        <p className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">Certificates</p>
        <div className="mt-4 justify-center items-center">
            
        <div className="flex justify-center items-center">
  <ul className="text-center">
    {certificates?.map((cert) => {
      return (
        <a href={cert.img} key={cert.title}>
          <li className="font-semibold text-base mb-2 bg-indigo-950 text-white p-4 w-full rounded-sm">
            {cert.title}
          </li>
        </a>
      );
    })}
  </ul>
</div>
        {/* <ul>
        {certificates?.map((cert) => {
          return (
              <a  href={cert.img}>
            <li key={cert.title} className="font-semibold text-base mb-2 bg-indigo-950 text-white p-4 w-2/5 rounded-sm">
                {cert.title}
              </li>
              </a>
          );
        })}
       </ul> */}
       </div>
      </div>
    </section>
  );
};

export default Certificates;