import React from 'react';
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'
 

export default function Nav({onSearch, setCharacters, logout}) {

  const randomChar = ()=>{
    const random = Math.floor(Math.random() * 826 + 1)
    onSearch(random.toString()) 
  }

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li>
          <Button event={logout} text='Exit'/>
        </li>
        <li>
          <NavLink to='/home' className={styles.listLink}>Home</NavLink>
        </li>
        <li>
          <NavLink to='/favorites' className={styles.listLink}>Favorites</NavLink>
        </li>
        <li>
          <NavLink to='/about' className={styles.listLink}>About</NavLink>
        </li>
      </ul>
      <div className={styles.searchContainer}>
        <Button event={randomChar} text='Random'/>
        <SearchBar onSearch={onSearch}/>
      </div>
    </div>
  )
}