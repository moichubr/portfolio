const SkillsCard = ({ skill, isVisible }) => {


  return (
    
    <article className={`${isVisible ? 'animate-flip-up animate-ease-in animate-duration-[2000ms]' : ''} bg-pink-950 bg-opacity-30 dark:bg-pink-400 dark:bg-opacity-10 w-[40%] md:w-[20%] lg:w-[13%] h-auto rounded-tl-[16px] pt-4 pl-5 shadow-md `}>
      <p className="poppins-regular text-sm text-white tracking-wide">
        {skill.skill}
      </p>
      <div className="bg-stone-200  rounded-tl-3xl w-[85%] mt-3 float-right h-16 flex items-center justify-center pt-1">
        <span className="text-pink-950 text-opacity-40  text-3xl pl-2">
          {skill.icon}
        </span>
      </div>
    </article>
   
  );
};

export default SkillsCard;
