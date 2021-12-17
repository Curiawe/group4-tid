import "./sidebar.css";
import { SidebarLinks } from "./sidebarLinks";
import React, { useState, useEffect } from "react";
import Pages from "../../pages/Pages";
import logo from "../../images/logo/logo.png";
import FeatherIcon from "feather-icons-react";

function Sidebar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

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

/* <Link to={Pages.Home} className="Navtab-Logo">
          <img src={logo} alt="ScanCar Logo" height="40px" />
        </Link>
        <SidebarLinks /> */
