import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
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
  
  // console.log('characters', characters);



  return (
    <div>
      {
        isLoading
          ? (<p>Loading characters...</p>)
          : (
            <section>
              <label
                htmlFor='status'
              >Character status:</label>
              <select
                name=""
                id="status"
                // value={status}
                // onChange={handleStatusChange}
              >
                <option value="all">All</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
              </select>
              <div className={styles['list']}>
              {
              characters.map((character) => (
                <Link to={`/character/${character.id}/`}>
                  <Item
                    key={character.id + character.name}
                    character={character}
                    >
                  </Item>
                </Link>
              ))
                }
                </div>
            </section>
          )
      }
    </div>
  )
}
