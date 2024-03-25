import { useTranslation } from "react-i18next";
import { Spain, England } from "../../assets/icons";

const LanguageButtons = () => {
  const { i18n } = useTranslation("global");

  return (
    <div className="flex flex-row gap-1">
      <button
        className="hover:scale-110 p-1.5 trasform"
        onClick={() => {
          i18n.changeLanguage("es");
        }}
        title="Español"
      >
        <Spain />
      </button>

      <span className="text-white"> </span>

      <button
        className="hover:scale-110 p-1.5 trasform"
        onClick={() => {
          i18n.changeLanguage("en");
        }}
        title="English"
      >
        <England />
      </button>
    </div>
  );
};

export default LanguageButtons;
