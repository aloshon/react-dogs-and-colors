import React from "react";
import {Redirect, useParams} from "react-router-dom";
import {v4 as uuid} from "uuid";

const DogDetails = ({dogs}) => {
    const {name} = useParams();
    // Get the dog with the correct name
    const dog = dogs.find(d => (
        d.name.toLowerCase() === name
    ))
    // If the dog they are searching for doesn't exist
    // Redirect to home page
    if(!dog)  return <Redirect to="/dogs" />

    let allFacts = dog.facts.map(fact => (
        <li key={uuid()} style={{listStyleType: 'none'}}>{fact}</li>
    ))
    return (
        <div key={name}>
            <h1>{name}</h1>
            <h2>{dog.age}</h2>
            <img src={dog.src} />
            <ul>{allFacts}</ul>
        </div>
    )
}

export default DogDetails;