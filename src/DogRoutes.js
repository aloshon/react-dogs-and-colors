import React from "react";
import { Route, Switch } from "react-router-dom";
import Duke from "./dogImages/duke.jpg";
import Perry from "./dogImages/perry.jpg";
import Tubby from "./dogImages/tubby.jpg";
import Whiskey from "./dogImages/whiskey.jpg";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

const DogRoutes = () => {
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
      ]
    
    return (
        <Switch>
            <Route exact path="/dogs" >
                <DogList dogs={dogs}/>
            </Route>
            <Route exact path="/dogs/:name" >
                <DogDetails dogs={dogs}/>
            </Route>
        </Switch>
      );
}

export default DogRoutes