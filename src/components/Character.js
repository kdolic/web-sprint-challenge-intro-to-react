// Write your Character component here

import React from 'react'

export default function Character(props) {

    const {characters, character} = props
    return (
        <div>
            {characters.map(character => {
                return(
                    <div>
                        <img src={character.image} alt={character.name} />
                        <h2>Name: {character.name}</h2>
                        <h3>Status: {character.status}</h3>
                        <h3>Species: {character.species}</h3>
                        <h3>Gender: {character.gender}</h3>
                        <h3>Origin: {character.origin.name}</h3>
                    </div>
                );
            })}
            
        </div>
    )
}
