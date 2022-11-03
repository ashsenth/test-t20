import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./SideBar";

const Navbar = () => {
    return (
        <>
          <Nav>
            <NavMenu>
              <NavLink to="/Homepage" activeStyle>
                Home
              </NavLink>
              <NavLink to="/About" activeStyle>
                About
              </NavLink>
              <NavLink onClick = "location.href='https://github.com/anahitaafsh/t20'">Github</NavLink>
            </NavMenu>
          </Nav>
        </>
      );
}

export default Navbar;
