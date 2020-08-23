import React from "react";

import NavBar from "./components/NavBar";
import NavItem from "./components/NavItem";

// Icons
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";

function App() {
  return (
    <NavBar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
    </NavBar>
  );
}

export default App;
