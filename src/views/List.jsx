import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useHistory, useLocation, useRouteMatch, Route } from 'react-router-dom';
import Item from '../components/Item';
import styles from '../App.css';
import Detail from './Detail';


export default function List() {
  // set state
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [status, setStatus] = useState('all');
  // const history = useHistory();
  // const location = useLocation(); //location object has a search property which comes after ? in url
  // const status = new URLSearchParams(location.search).get('status') ?? 'all';
  const { url, path } = useRouteMatch();

  console.log('url', url, path)

  useEffect(() => {
    async function setAndFetchCharacters() {
      setIsLoading(true);

      // const search = new URLSearchParams(location.search);
      // const statusParam = search.get('status') ?? 'all'; // ?? allows you to use default value when evaluates to null or undefined

      // const url =
      //   statusParam === 'all'
      //     ? 'https://rickandmortyapi.com/api/character'
      //     : `https://rickandmortyapi.com/api/character?status=${status}`;
      const resp = await fetch('https://rickandmortyapi.com/api/character');
      const data = await resp.json();
      // console.log('data', data);
      setCharacters(data.results);
      setIsLoading(false);
    }
    setAndFetchCharacters();
  }, [])
  
  // console.log('characters', characters);
  // console.log('status', status);



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
              {/* <select
                name=""
                id="status"
                value={status}
                onChange={(e) => history.push(`/?status=${e.target.value}`)}
              >
                <option value="all">All</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
              </select> */}
              <div className={styles['list']}>
              {
                  characters.map((character) => (
                    <Link
                      to={`${url}/${character.id}/`}
                      key={character.id}>
                  <Item
                    character={character}
                    >
                  </Item>
                </Link>
              ))
                }
              </div>
              <Route path={`${path}/:id`}>
                <h2>Character Detail</h2>
                <Detail
                  characters={characters}
                />
              </Route>
            </section>
          )
      }
    </div>
  )
}
