import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to='/'>
        <div className={styles.logoContainer}>
          <img 
          className={styles.logo} 
          src={require('../../assets/128x128.png')} 
          alt="Home icon of Rick Sanchez"
          />
        </div>
        </Link>

        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to='/favorites' className={styles.link}>Favorites</Link>
          </li>
          <li className={styles.li}>
            <Link to='/' className={styles.link}>Home</Link>
          </li>
        </ul>
      </header>
      
    </div>
  )
}