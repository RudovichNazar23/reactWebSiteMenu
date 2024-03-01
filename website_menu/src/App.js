import React from "react";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar>
          <Button className={"btn border border-dark m-1 p-1"} value={"Home"}/>
          <Button className={"btn border m-1"} value={"Services"}></Button>
          <Button className={"btn border m-1"} value={"Pricing"}></Button>
          <Button className={"btn border m-1"} value={"Blog"}></Button>
      </NavBar>
      <hr />
      <Main value={"Welcome to this website"} />
      <hr />
      <Footer>
          <Button href={"/"} value={"About"} />
          <Button href={"/"} value={"Contact"} />
          <Button href={"/"} value={"React Quickly 2E"} />
      </Footer>
    </div>
  );
}

export default App;
