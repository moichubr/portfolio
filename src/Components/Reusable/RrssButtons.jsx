import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const RrssButtons = () => {
  const linkedin = "https://www.linkedin.com/in/moira-brun/";
  const github = "https://github.com/moichubr";
  const instagram =
    "https://www.instagram.com/moichubr?igsh=MTQ0c3Mxd2Y4dXZ5Nw==";

  return (
    <div className="mt-4 gap-4 flex flex-row items-center">
      <a
        href={linkedin}
        target="_blank"
        rel="noreferrer"
        title="Linkedin"
        className="hover:scale-110 transform"
      >
        <FaLinkedin color="#6A557E" size={30} />
      </a>
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        title="GitHub"
        className="hover:scale-110 transform"
      >
        <FaGithub color="#6A557E" size={30} />
      </a>
      <a
        href={instagram}
        target="_blank"
        rel="noreferrer"
        title="Instagram"
        className="hover:scale-110 transform"
      >
        <FaInstagram color="#6A557E" size={30} />
      </a>
    </div>
  );
};

export default RrssButtons;
