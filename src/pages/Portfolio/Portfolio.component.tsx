import "./Portfolio.styles.css";
import IMG1 from "../../assets/images/wordle.gif";
import IMG2 from "../../assets/images/github.gif";
import IMG3 from "../../assets/images/sw.gif";

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Clone of Wordle Game</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/guidolingip1/wordle-project"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://wordle-project1.herokuapp.com"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Consuming Github API</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/guidolingip1/github-cards"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://github-cards-project.herokuapp.com"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Star Wars Memory Game</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/guidolingip1/Star-Wars-Memory-Game"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://star-wars-memory.herokuapp.com"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
