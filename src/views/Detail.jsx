import React from 'react'
import styles from '../App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function Detail() {
  // state
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // useParams to grab id from url
  const { id } = useParams();

  useEffect(() => {
    async function setAndFetchCharacter() {
      const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      const data = await resp.json();
      console.log('data', data);
      setCharacter(data);
      setIsLoading(false);
    };
    setAndFetchCharacter();
  }, []);

  

  return (
    <div className={styles['detail']}>
      {
        isLoading
          ? <p>Loading character...</p>
          : (
            <div>
              <h3>{character.name}</h3>
              <img src={character.image} alt={`image of ${character.name}`} />
              <p>Species: {character.species}</p>
              <p>Status: {character.status}</p>
              <p>Gender: {character.gender}</p>
              <p>Location: {character.location.name}</p>
            </div>
          )
      }
    </div>
  )
}
