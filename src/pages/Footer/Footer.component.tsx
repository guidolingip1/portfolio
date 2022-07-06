import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillMediumSquare } from "react-icons/ai";
import "./Footer.styles.css";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/guilherme-guidolin/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://github.com/guidolingip1" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://medium.com/@guilhermeguidolin" target="_blank" rel="noopener noreferrer">
          <AiFillMediumSquare />
        </a>
      </div>
    </footer>
  );
};
