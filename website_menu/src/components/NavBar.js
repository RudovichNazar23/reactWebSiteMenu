import { useContext } from "react";
import MenuContext from "../context/MenuContext";

import Button from "./Button";
import "../index.css";

function NavBar() {
  const { links, isLoggedIn } = useContext(MenuContext);
  return (
    <nav
      className="p-2 border-rounded d-flex flex-row align-items-center justify-content-center"
      style={{ backgroundColor: "#eee" }}
    >
      {links &&
        links.map((item) => (
          <Button
            href={item.link}
            value={item.value}
            icon={item.icon}
            className={"btn border border-dark m-1 p-1 b"}
          />
        ))}
        {
            isLoggedIn && (
                <Button 
                    value={"Profile"} 
                    className={"btn border border-dark m-1 p-1 b"} 
                    icon={<img src="/user.png" />}
                />
            )
        }
    </nav>
  );
}

export default NavBar;
