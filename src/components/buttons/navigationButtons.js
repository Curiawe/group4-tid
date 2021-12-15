import React from "react";
import "./buttons.css";
import { Link } from "react-router-dom";

const NavButtons = (props) => {
  return (
    <div className="navButtons">
      <Link
        to={props.linkButtonOne}
        style={{ textDecoration: "none" }}
        className="navButton"
      >
        <h4>{props.textButtonOne}</h4>
      </Link>
      <Link
        to={props.linkButtonTwo}
        style={{ textDecoration: "none" }}
        className="navButton"
      >
        <h4>{props.textButtonTwo}</h4>
      </Link>
      <Link
        to={props.linkButtonThree}
        style={{ textDecoration: "none" }}
        className="navButton"
      >
        <h4>{props.textButtonThree}</h4>
      </Link>
    </div>
  );
};

export { NavButtons };
