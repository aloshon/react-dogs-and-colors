import React from "react";
import {NavLink} from "react-router-dom";
import {v4 as uuid} from "uuid";

const ColorsList = ({allColors}) => {
    const colors = allColors.map(c => (
        <li key={uuid()} style={{listStyleType: 'none'}}><NavLink exact to={`/colors/${c.color}`}>{c.color}</NavLink></li>
    ));

    // Reverse order so the newest color appears on top
    colors.reverse();

    return (
        <div>
            <h1>Welcome to the color factory!</h1>
            <h1><NavLink exact to='/colors/new'>Add a new color!</NavLink></h1>
            <ul key="NavAllColors">
                {colors}
            </ul>
        </div>
    )
}

export default ColorsList;