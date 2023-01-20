import styles from './SearchBar.module.css'
import Button from '../Button/Button';
import { useState } from 'react';

export default function SearchBar({onSearch}) {
   
   const [character, setCharacter] = useState(0);

   const changeCharacter = event => {
      const value = event.target.previousSibling.value;
      onSearch(value)
      event.target.previousSibling.value = ''
   }

   return (
      <div>
         <input className={styles.container} placeholder='Id del personaje...'/>
         <Button event={changeCharacter} text='Agregar'/>
      </div>
   );
}
