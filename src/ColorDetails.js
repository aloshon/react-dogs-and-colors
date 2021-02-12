import React from "react";
import {Redirect, useParams} from "react-router-dom";
import {useHistory} from "react-router-dom";
import "./ColorDetails.css"

const ColorDetails = ({allColors}) => {
    const {color} = useParams();
    const history = useHistory();
    const validColor = allColors.find(c => (
        c.color === color
    ))

    // If validColor doesn't exist
    // Redirect to color home page
    if(!validColor)  return <Redirect to="/colors" />
   
    document.body.style.backgroundColor = validColor.hex;

    // Check for the hex value since if set to default or black
    // it will return ""
    if(validColor.hex === "")
        document.body.style.backgroundColor = '#000000';
    
    return (
        <div key={color}>
            <h1 className="color">THIS IS {color}!!</h1>
            <h1 className="color">ISN'T IT BEAUTIFUL??</h1>
            <button className="color-button" onClick={() => history.push('/colors')}>GO BACK</button>
        </div>
    )
}

export default ColorDetails;