/* import React from "react"
import { connect } from "react-redux"
import { deleteFavorite } from "../../redux/actions"
import Card from '../Card/Card'
import styles from './Favorites.module.css'

export default function Favorites(props) {

  

  return (
    <div className={styles.container}>
        {props.myFavorites.length && props.myFavorites.map(character => 
          <Card 
            id = {character.id}
            name = {character.name}
            species = {character.species}
            gender = {character.gender}
            image = {character.image}
          ></Card>
        )}
      </div>
  )
}

const mapStateToProps = state => ({ myFavorites: state.myFavorites })
const mapDispatchToProps = dispatch => ({deleteFavorite: dispatch(deleteFavorite())})

connect(mapStateToProps, mapDispatchToProps)(Favorites)
 */