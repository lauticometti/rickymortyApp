import styles from './Cards.module.css'
import Card from '../Card/Card';


export default function Cards(props) {

   function onClose(event) {
      const id = event.target.id
       
      props.setCharacters(characters => characters.filter(char => char.id !== +id))
   }

   return (
      <div className={styles.container}>
         {props.characters.map(character => 
         <Card 
            id = {character.id}
            name = {character.name}
            species = {character.species}
            gender = {character.gender}
            image = {character.image}
            onClose = {onClose}
         ></Card>
         )}
      </div>
   )
}
