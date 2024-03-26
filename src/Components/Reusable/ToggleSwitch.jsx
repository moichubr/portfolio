import { useState } from "react";

const ToggleSwitch = ({toggleDarkMode}) => {
    const [isActive, setIsActive] = useState(false);
  
  const handleToggle = () => {
    setIsActive(prevState => !prevState);
    toggleDarkMode()
  };

    return(
        <div className="flex items-center justify-left sm:ml-2 lg:ml-4">
        <label htmlFor="contactSwitch" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              id="contactSwitch"
              className="sr-only"
              checked={isActive}
              onChange={handleToggle}
            />
            <div className="block bg-slate-400 dark:bg-slate-700 w-9 h-5 rounded-full"></div>
            <div className={`dot absolute left-1 top-0.5 bg-white w-4 h-4 rounded-full transition transform ${isActive ? 'translate-x-3' : 'translate-x-0'}`}></div>
          </div>
          {/* <div className="font-lato text-indigo-950 leading-loose text-sm ml-2"></div> */}
        </label>
      </div>
    )
}

export default ToggleSwitch