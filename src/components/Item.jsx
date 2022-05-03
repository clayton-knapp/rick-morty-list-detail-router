import React from 'react'
import styles from '../App.css';
// import { Link } from 'react-router-dom';

export default function Item({ character }) {
  return (
      <div className={styles['item']}>
        <h3>{character.name}</h3>
      <img src={character.image} alt={`image of ${character.name}`} />
      <p>Species: {character.species}</p>
      <p>Status: {character.status}</p>
      </div>
  )
}
