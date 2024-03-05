import React from "react";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import Main from "./components/Main";
import Footer from "./components/Footer";
import MenuContext from "./context/MenuContext";
import LinkObject from "./utils/LinkObject";

import { useState } from "react";

function App() {
  const links = [
    LinkObject("Home", "/home.png"),
    LinkObject("Sevices", "/cloud-service.png"),
    LinkObject("Pricing", "/price-tag.png"),
    LinkObject("Blog", "/communication.png"),
  ];

  const [isLoggedIn, setLogIn] = useState(false);

  const onClick = (event) => {
    event.preventDefault();
    setLogIn(!isLoggedIn);
  };

  const context = {
    links: links,
    isLoggedIn: isLoggedIn,
    onClick: onClick,
  };

  return (
    <div>
      <MenuContext.Provider value={context}>
        <NavBar />
        <hr className="m-0" />
        <Main value={"Welcome to this website"} />
        <hr />
        <Footer>
          <Button href={"/"} value={"About"} />
          <Button href={"/"} value={"Contact"} />
          <Button href={"/"} value={"React Quickly 2E"} />
        </Footer>
      </MenuContext.Provider>
    </div>
  );
}

export default App;
