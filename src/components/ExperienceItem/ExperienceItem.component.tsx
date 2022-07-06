import { BsPatchCheckFill } from "react-icons/bs";

interface ExperienceItemProps {
  skill: string;
  level: string;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ skill, level }) => {
  return (
    <article className="experience__details">
      <BsPatchCheckFill className="experience__details-icon" />
      <div>
        <h4>{skill}</h4>
        <small className="text-light">{level}</small>
      </div>
    </article>
  );
};
