import React from "react";

import "./DropDownMenu.css";

import { ReactComponent as CogIcon } from "../icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";

const DropDownMenu = (props) => {
  const DropdownItem = (props) => {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  };
  return (
    <div className="dropdown">
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>
        Settings
      </DropdownItem>
    </div>
  );
};

export default DropDownMenu;
