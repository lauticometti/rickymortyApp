import React from "react"
import { useSelector } from "react-redux"
import Card from '../Card/Card'
import styles from './Favorites.module.css'

export default function Favorites() {

  const myFavorites = useSelector((state) => ({myFavorites: state.myFavorites}))

  return (
    <div className={styles.container}>
        {myFavorites.length && myFavorites.map(character => 
          <Card 
            id = {character.id}
            name = {character.name}
            species = {character.species}
            gender = {character.gender}
            image = {character.image}
            key= {character.id}
          ></Card>
        )}
      </div>
  )
}