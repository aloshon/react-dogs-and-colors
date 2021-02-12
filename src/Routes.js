import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import Duke from "./dogImages/duke.jpg";
import Perry from "./dogImages/perry.jpg";
import Tubby from "./dogImages/tubby.jpg";
import Whiskey from "./dogImages/whiskey.jpg";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import ColorsList from "./ColorsList";
import ColorDetails from "./ColorDetails";
import NewColorForm from "./NewColorForm";

const Routes = () => {
    // Change the DOM background color back to normal
    document.body.style.backgroundColor = '';

    const dogs = [
        {
          name: "Whiskey",
          age: 5,
          src: Whiskey,
          facts: [
            "Whiskey loves eating popcorn.",
            "Whiskey is a terrible guard dog.",
            "Whiskey wants to cuddle with you!"
          ]
        },
        {
          name: "Duke",
          age: 3,
          src: Duke,
          facts: [
            "Duke believes that ball is life.",
            "Duke likes snow.",
            "Duke enjoys pawing other dogs."
          ]
        },
        {
          name: "Perry",
          age: 4,
          src: Perry,
          facts: [
            "Perry loves all humans.",
            "Perry demolishes all snacks.",
            "Perry hates the rain."
          ]
        },
        {
          name: "Tubby",
          age: 4,
          src: Tubby,
          facts: [
            "Tubby is really stupid.",
            "Tubby does not like walks.",
            "Angelina used to hate Tubby, but claims not to anymore."
          ]
        }
      ];
      
    const initialColors = [
        {color: 'red', hex: "#FF0000"},
        {color: 'green', hex: "#00FF00"},
        {color: 'blue', hex: "#0000FF"},
    ]

    const [allColors, setAllColors] = useState(initialColors)


    const addColors = ({color, hex}) => {
        setAllColors(colors => [...colors, {color, hex}]);
    }
    
    return (
        <Switch>
            <Route exact path="/dogs" >
                <DogList dogs={dogs}/>
            </Route>
            <Route exact path="/dogs/:name" >
                <DogDetails dogs={dogs}/>
            </Route>
            <Route exact path="/colors" ><ColorsList allColors={allColors}/></Route>
            <Route exact path="/colors/new" ><NewColorForm addColors={addColors}/></Route>
            <Route exact path="/colors/:color" ><ColorDetails allColors={allColors}/></Route>
        </Switch>
      );
}

export default Routes