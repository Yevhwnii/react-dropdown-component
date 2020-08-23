import React, { useState } from "react";

import "./NavItem.css";

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a className="icon-button" onClick={() => setOpen(!open)} href="#">
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
};

export default NavItem;
