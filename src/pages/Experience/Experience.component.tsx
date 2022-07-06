import { ExperienceItem } from "../../components/ExperienceItem/ExperienceItem.component";

import "./Experience.styles.css";

export const Experience: React.FC = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <ExperienceItem skill={"HTML"} level={"Experienced"} />
            <ExperienceItem skill={"CSS/SCSS"} level={"Experienced"} />
            <ExperienceItem skill={"JavaScript"} level={"Experienced"} />
            <ExperienceItem skill={"TypeScript"} level={"Intermediate"} />
            <ExperienceItem skill={"ReactJS"} level={"Intermediate"} />
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <ExperienceItem skill={"NodeJS"} level={"Intermediate"} />
            <ExperienceItem skill={"Express"} level={"Intermediate"} />
            <ExperienceItem skill={"Insomnia"} level={"Experienced"} />
            <ExperienceItem skill={"Postman"} level={"Novice"} />
          </div>
        </div>
      </div>
    </section>
  );
};
