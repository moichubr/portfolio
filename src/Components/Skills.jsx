import { useState } from "react";
import { skills } from "../data";
import { useTranslation } from "react-i18next";
import AnimationScrollHandler from "./Reusable/AnimationScrollHandler";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  const { t } = useTranslation("global");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <AnimationScrollHandler setIsVisible={setIsVisible} component={"skills"}>
      <section id="skills">
        <div className="flex flex-col h-auto max-h-auto w-full max-w-full md:px-24 lg:px-48 xl:px-48 px-4 pt-3  pb-8 ">
          <div
            className={`${
              isVisible ? "animate-fade-right animate-duration-[2000ms]" : ""
            }flex flex-col w-full pt-20`}
          >
            <div className="flex flex-row gap-3 items-center">
              <span className="bg-pink-700 dark:bg-pink-500 w-[20px] h-1"></span>{" "}
              <span className="text-pink-900 dark:text-pink-700 roboto-regular font-semibold text-md tracking-wide">
                {t("skills.title")}
              </span>
            </div>
            <p className="text-pink-900 dark:text-pink-700 roboto-regular font-semibold text-2xl tracking-wide">
              {t("skills.description")}
            </p>
          </div>
          <div
            className={`flex flex-row flex-wrap justify-center items-center w-full mt-8 gap-4`}
          >
            {skills.map((skill, index) => (
              <SkillsCard index={index} skill={skill} isVisible={isVisible}/>
            ))}
          </div>
        </div>
      </section>
    </AnimationScrollHandler>
  );
};

export default Skills;
