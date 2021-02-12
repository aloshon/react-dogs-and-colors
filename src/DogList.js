import React from "react";
import {v4 as uuid} from "uuid";

const DogList = ({dogs}) => {
    const allDogs = dogs.map((dog, id) => {
        let facts = dog.facts.map(fact => (
            <li key={uuid()} style={{listStyleType: 'none'}}>{fact}</li>
        ));

        return (
            <div key={id}>
                <h1>{dog.name}</h1>
                <h2>{dog.age} year(s) old</h2>
                <img src={dog.src} />
                <ul>{facts}</ul>
            </div>
        )
    })
    return allDogs;
}

export default DogList;