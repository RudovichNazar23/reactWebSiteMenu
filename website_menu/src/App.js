import React from "react";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div>
      <NavBar>
          <Button className={"btn border border-dark m-1 p-1 b"} 
            value={"Home"} 
            icon={<img src="/home.png"></img>}
          />
          <Button 
            className={"btn border m-1 border border-dark b"} 
            value={"Services"} 
            icon={<img src="/cloud-service.png"></img>}
            />
          <Button 
            className={"btn border m-1 border border-dark b"} 
            value={"Pricing"} 
            icon={<img src="/price-tag.png"></img>}
          />
          <Button 
            className={"btn border m-1 border border-dark b"} 
            value={"Blog"} 
            icon={<img src="/communication.png"></img>}
          />
      </NavBar>
      <hr className="m-0" />
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
