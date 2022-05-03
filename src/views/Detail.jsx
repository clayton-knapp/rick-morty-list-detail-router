import React from 'react'
import styles from '../App.css';
import { useState, useEffect } from 'react';


export default function Detail() {
  // state
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function setAndFetchCharacter() {
      const resp = await fetch('https://rickandmortyapi.com/api/character/1')
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
            </div>
          )
      }
    </div>
  )
}
