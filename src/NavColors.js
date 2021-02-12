import React from "react";
import {NavLink} from "react-router-dom";
import "./Nav.css"

const defaultNames = ["duke", "perry", "tubby", "whiskey"];
function Nav({ names = defaultNames }){
    const navBar = 
        <nav className="navbar">
          <NavLink exact to="/dogs" key="dogs">Dogs</NavLink>
          {names.map(name => (
              <NavLink exact to={`/dogs/${name}`} key={name}>{name}</NavLink>
          ))}
          <NavLink exact to="/colors" key="colors">Colors</NavLink>
        </nav>
    
    return navBar;
}

export default Nav;