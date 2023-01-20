import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addFavorite, deleteFavorite } from '../../redux/actions';
import styles from './Card.module.css'

export default function Card({id, name, species, gender, image, onClose, addFavorite, deleteFavorite, myFavorites}) {

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         deleteFavorite(id)
      } else {
         setIsFav(true)
         addFavorite({id, name, species, gender, image, onClose, addFavorite, deleteFavorite})
      }

   }

   useEffect(() => myFavorites.forEach(fav => fav.id === id && setIsFav(true)), [myFavorites])

   return (
      <div className={styles.container}>
         {
           isFav ? <button onClick={handleFavorite}>💓</button> : (
                    <button onClick={handleFavorite}>❤</button> )
         }
         <h3 className={styles.id}>{id}</h3>
         <span className={styles.close} onClick={onClose} id={id}>X</span>
         <img className={styles.img} src={image} alt={`Imagen de ${name}`} />
         <Link to={`/detail/${id}`}>
            <h2 className={styles.name}>{name}</h2>
         </Link>
         <div className={styles.info}>
            <h3 className={styles.species}>{species}</h3>
            <h3 className={styles.gender}>{gender}</h3>
         </div>
      </div>
   );
}

const mapStateToProps = state => ({myFavorites: state.myFavorites})

const mapDispatchToProps = dispatch => {
   return {
      addFavorite: dispatch(addFavorite()), 
      deleteFavorite: dispatch(deleteFavorite())
   }
}

connect(mapStateToProps, mapDispatchToProps)(Card)