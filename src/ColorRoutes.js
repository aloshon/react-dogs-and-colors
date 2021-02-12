import React, {useState} from "react";
import { Route, Switch } from "react-router-dom";
import ColorsList from "./ColorsList";
import ColorDetails from "./ColorDetails";
import NewColorForm from "./NewColorForm";

const ColorRoutes = () => {
    // Change the DOM background color back to normal
    document.body.style.backgroundColor = '';
    const [allColors, setAllColors] = useState([
        {
            color: 'red',
            hex: '#FF0000'
        },
        {
            color: 'green',
            hex: '#00FF00'
        },
        {
            color: 'blue',
            hex: '#0000FF'
        }]);

    const addColors = ({color, hex}) => {
        setAllColors(colors => [...colors, {color, hex}]);
    }
    return (
        <Switch>
            <Route exact path="/colors" ><ColorsList allColors={allColors}/></Route>
            <Route exact path="/colors/new" ><NewColorForm addColors={addColors}/></Route>
            <Route exact path="/colors/:color" ><ColorDetails allColors={allColors}/></Route>
        </Switch>
    )
}

export default ColorRoutes;