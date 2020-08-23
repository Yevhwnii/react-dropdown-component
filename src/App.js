import React from "react";

import NavBar from "./components/NavBar";
import NavItem from "./components/NavItem";
import DropDownMenu from "./components/DropdownMenu";

// Icons
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CarretIcon } from "./icons/caret.svg";

function App() {
  return (
    <NavBar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CarretIcon />}>
        <DropDownMenu />
      </NavItem>
    </NavBar>
  );
}

export default App;
