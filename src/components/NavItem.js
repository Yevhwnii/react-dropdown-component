import React from "react";

import "./NavItem.css";

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <a className="icon-button" href="/">
        {props.icon}
      </a>
    </li>
  );
};

export default NavItem;
