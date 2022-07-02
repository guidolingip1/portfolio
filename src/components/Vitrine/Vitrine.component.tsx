import { CardComponent } from "../Card/Card.compnent";

/* Styles */
import "./Vitrine.styles.css";

interface Card {
  title: string;
  description: string;
  technologies: string[];
  url: string;
  demo_url?: string;
  img?: string;
  id: number;
}

interface VitrineProps {
  title: string;
  color: string;
  cards: Card[];
  type: string;
  link: string;
}

export const Vitrine: React.FC<VitrineProps> = ({ title, color, cards, type, link }) => (
  <div className="vitrine">
    <div className="titulo-botao">
      {title}
      <button style={{ borderColor: color, backgroundColor: color }}>
        <a href={link} className="redirecionamento" target="_blank">
          More {type}
        </a>
      </button>
    </div>
    <hr className="rounded" style={{ borderColor: color }} />
    <div className="vitrine-cartoes">
      {
        <>
          {cards.map((item) => (
            <CardComponent
              key={item.id}
              color={color}
              url={item.url}
              title={item.title}
              description={item.description}
              technologies={item.technologies}
              demo_url={item.demo_url}
              img={item.img}
            />
          ))}
        </>
      }
    </div>
  </div>
);
