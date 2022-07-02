import { NavLink } from "react-router-dom";

import "./Header.styles.css";

export const Header = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <a
            href="https://medium.com/@guilhermeguidolin"
            target="_blank"
            rel="noreferrer"
          >
            Posts
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/guilherme-guidolin/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://github.com/guidolingip1"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </div>
  );
};
