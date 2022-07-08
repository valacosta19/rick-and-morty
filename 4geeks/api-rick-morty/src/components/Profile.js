import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const Profile = () => {

  let { id } = useParams()

  const [ profile, setProfile ] = useState()

  const navigate = useNavigate()

  const handlerPrev = () => navigate(`/character/${ parseInt(profile.id-1) }`, {replace: true})

  const handlerNext = () => navigate(`/character/${ parseInt(profile.id+1) }`, {replace: true})

  useEffect(()=>{
    
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(data => data.json())
      .then(response => setProfile(response))
      .catch(err => console.log(err))

  },[id])

  return (
    <div>
      { (profile) ? (<>
          <h2>{profile.name}</h2>
          <h3>{profile.species}</h3>
          <img src={profile.image} alt={profile.name}/>
          <button onClick={handlerPrev}>prev</button>
          <button onClick={handlerNext}>next</button>
          <button onClick={() => navigate('/', {replace: true})}>home</button>
        </>) 
        : <h2>...Loading</h2> }
    </div>
  )
}
