//import eu from "../../assets/images/eu2.jpg";
import eu from "../../assets/images/yo7.jpg";
import { FaAward } from "react-icons/fa";
import { TbMessageLanguage } from "react-icons/tb";
import { VscFolderLibrary } from "react-icons/vsc";

import "./About.styles.css";

export const About: React.FC = () => {
  return (
    <div className="container about__container">
      <section id="about">
        <h4>Get To Know</h4>
        <h2>About Me</h2>
        <div className="about__image__description">
          <div className="about__image__container">
            <img src={eu} alt="About" className="about__me-image" />
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>3+ Years </small>
              </article>
              <article className="about__card">
                <TbMessageLanguage className="about__icon" />
                <h5>Languages</h5>
                <small>Portuguese, English</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </article>
            </div>

            <p>
              Computer Science student at{" "}
              <a href="https://www.ufsm.br/" target="_blank" rel="noopener noreferrer">
                Federal University of Santa Maria
              </a>
              {", "}
              I'm passionate about teaching and helping others, currently i spend my time studying CS stuff and
              Fullstack development.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
