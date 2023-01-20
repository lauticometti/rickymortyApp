import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from './Detail.module.css'

export default function Detail() {
  
  const {detailId} = useParams()
  const navigate = useNavigate()
  const [character, setCharacter] = useState({})

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${+detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          navigate('/')
          window.alert(`No hay personajes con el ID ${detailId}`);
        }
      })
      .catch((err) => {
        console.log(err);
        navigate('/')
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={styles.container}>
      <section className={styles.info}>
        <h1 className={styles.name}>{character.name ? character.name : 'Unknown'}</h1>
        <h3 className={styles.h3}>Status: {character.status ? character.status : 'Unknown'}</h3>
        <h3 className={styles.h3}>Specie: {character.species ? character.species : 'Unknown'}</h3>
        <h3 className={styles.h3}>Gender: {character.gender ? character.gender : 'Unknown'}</h3>
        <h3 className={styles.h3}>Origin: {character.origin ? character.origin.name : 'Unknown'} </h3>
      </section>

      <div className={styles.imageContainer}>
        <img className={styles.image} src={character.image ? character.image : 'character.image no existe'} alt={character.name ? character.name : 'Unknown'} />
      </div>
    </div>
  )
}


