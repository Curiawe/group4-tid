import React from "react";
import { NavButtonLinks } from "./navButtonLinks";
import "./buttons.css";

const NavButtons = () => {
  return (
    <div className="navButtonContainer">
      <ul className="navButtons">
        {NavButtonLinks.map((val, key) => {
          return (
            <li
              key={key}
              className="navButtonsColumn"
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <h4>{val.title}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { NavButtons };
