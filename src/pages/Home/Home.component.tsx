import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillMediumSquare } from "react-icons/ai";
import CV from "../../assets/cv.pdf";

/* Styles*/
import eu from "../../assets/images/eu2.jpg";
//import eu from "../../assets/images/yo7.jpg";
import "./Home.styles.css";

export const Home = () => {
  return (
    <div className="container home__container">
      <div className="home__description">
        <h4>Hello I'm</h4>
        <h2>Guilherme Guidolin</h2>
        <h5>
          and i <span className="span-heart">&#128151;</span> Fullstack Development
        </h5>
        <div className="cta">
          <a href={CV} download className="btn" target="_blank" rel="noreferrer">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary" rel="noreferrer">
            Let's Talk
          </a>
        </div>
        <img src={eu} alt="Guilherme and his dog" className="home__description-picture" />
        <div className="header__socials">
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
      </div>
    </div>
  );
};
