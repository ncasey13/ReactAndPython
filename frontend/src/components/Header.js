import React from "react";
import { Nav, NavLink, NavMenu, NavItem, NavMenuRight } from "./HeaderElems";
import { PersonFill, BoxArrowRight } from "react-bootstrap-icons";
import logo from "../logo.svg";

const Navbar = ({ userinfo }) => {
  return (
    <div>
      <Nav>
        <NavMenu>
          {/* Links to webpages */}
          <NavLink to="/">
            <NavItem>
              <img src={logo} width={150} className="App-logo" alt="logo" />
            </NavItem>
          </NavLink>
          <NavLink to="/users">Users</NavLink>
        </NavMenu>
        <NavMenuRight></NavMenuRight>
      </Nav>
    </div>
  );
};

export default Navbar;
