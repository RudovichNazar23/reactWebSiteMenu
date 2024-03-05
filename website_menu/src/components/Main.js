import { useContext } from "react";

import MenuContext from "../context/MenuContext";
import Button  from "./Button";

function Main({ value }) {
    const { isLoggedIn, onClick } = useContext(MenuContext);
    const buttonStyle = `btn ${isLoggedIn ? "btn-danger" : "btn-success"}`;

  return (
    <main className="m-3">
      <h1>{value}</h1>
      <Button
        value={isLoggedIn ? "Log out" : "Log in"}
        className={buttonStyle}
        onClick={onClick}
        />
    </main>
  );
}

export default Main;
