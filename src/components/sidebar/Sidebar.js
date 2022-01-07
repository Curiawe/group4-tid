import "./sidebar.css";
import { SidebarLinks } from "./SidebarLinks";
import React, { useState } from "react";
import Pages from "../../pages/Pages";
import logo from "../../Images/logo/logo.png";
import FeatherIcon from "feather-icons-react";

function Sidebar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    return setClick(!click);
  };

  return (
    <div className="sidebarContainer">
      <div>
        <a href={Pages.Home} className="logo">
          <img src={logo} alt="ScanCar Logo" height="50px" />
        </a>
        <div className="menuIcon" onClick={handleClick}>
          <FeatherIcon icon={click ? "x" : "menu"} />{" "}
        </div>
      </div>
      <ul className={click ? "sidebarListActive" : "sidebarList"}>
        {SidebarLinks.map((val, key) => {
          return (
            <li
              key={key}
              className="sidebarRow"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
