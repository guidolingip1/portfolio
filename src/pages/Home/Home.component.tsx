import { Vitrine } from "../../components/Vitrine/Vitrine.component";
import GITHUB_REPOS from "../../data/github-repos";
import BLOG_POSTS from "../../data/blog-posts";

/* Styles*/
import "./Home.styles.css";
import eu from "../../assets/images/eu2.jpg";

export const Home = () => {
  return (
    <div className="home">
      <div className="foto-descricao">
        <img src={eu} alt="Minha foto de perfil" className="foto-de-perfil" />
        <div className="descricao">
          <p className="descricao-principal">
            Hello! I'm &nbsp;
            <span className="span-guilherme">"Guilherme</span>
            <span className="span-guidolin">Guidolin"</span>
            <br />
            and i <span className="span-heart">&#128151;</span> Fullstack Development
          </p>
          <p className="descricao-secundaria">
            Front: HTML + CSS/SCSS + JavaScript/Typescript + ReactJS
            <br />
            Back: NodeJS + Express &#40;NestJS&#41; + Insomnia/Postman
          </p>
        </div>
      </div>
      <Vitrine
        title="Projects"
        color="#4f3a9b"
        cards={GITHUB_REPOS}
        type="Projects"
        link="https://github.com/guidolingip1"
      />
      <Vitrine
        title="Blog posts"
        color="#ff5c8d"
        cards={BLOG_POSTS}
        type="Posts"
        link="https://medium.com/@guilhermeguidolin"
      />
    </div>
  );
};
