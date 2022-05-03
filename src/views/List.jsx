import React from 'react'
import { useState, useEffect } from 'react'
import Item from '../components/Item';
import styles from '../App.css';

export default function List() {
  // set state
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function setAndFetchCharacters() {
      const resp = await fetch('https://rickandmortyapi.com/api/character')
      const data = await resp.json();
      // console.log('data', data);
      setCharacters(data.results);
      setIsLoading(false);
    }
    setAndFetchCharacters();
  }, [])
  
  console.log('characters', characters);



  return (
    <div className={styles['list']}>
      {
        isLoading
          ? <p>Loading characters...</p>
          : (
            characters.map((character) => (
              <Item
                key={character.id}
                character={character}
              >
              </Item>
            ))
          )
      }
    </div>
  )
}
