import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  const [ characters, setCharacters ] = useState([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(data => data.json())
      .then(response => setCharacters(response.results))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h1>Rick and Morty</h1>
      {
        characters.map(character => {
          return <div key={character.id}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>{character.gender}</p>
            <Link to={`/character/${character.id}`}>See character profile</Link>
          </div>
        })
      }
    </div>
  )
}
