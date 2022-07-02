/* Styles */
import "./Card.styles.css";

interface CardProps {
  title: string;
  description: string;
  technologies: string[];
  color: string;
  demo_url?: string;
  img?: string;
  url: string;
}

export const CardComponent: React.FC<CardProps> = ({ title, description, technologies, color, url, demo_url, img }) => {
  if (img) {
    return (
      <a
        href={url}
        className="project-redirecionamento"
        style={{ borderColor: color, backgroundColor: color }}
        target="_blank"
      >
        <div className="project-card" style={{ borderColor: color, backgroundColor: color }}>
          <img key={img} src={require(`../../assets/images/${img}.gif`)} className="imagem-demo" />
          <div className="informacao-descricao">{title}</div>
          <div className="stacks">
            {technologies.map((item) => (
              <img key={item} src={require(`../../assets/images/${item}.png`)} className="imagem-stack" />
            ))}
          </div>
        </div>
      </a>
    );
  } else {
    return (
      <a
        href={url}
        className="redirecionamento-card"
        style={{ borderColor: color, backgroundColor: color }}
        target="_blank"
      >
        <div className="informacao-title">{title}</div>
        <div className="informacao-descricao">{description}</div>
        <div className="stacks">
          {technologies.map((item) => (
            <img key={item} src={require(`../../assets/images/${item}.png`)} className="imagem-stack" />
          ))}
        </div>
      </a>
    );
  }
};
