import styles from './Home.module.css'

export default function Home() {
  return (
    <div>
      <body className={styles.body}>
        <div className="mainImage">
          <img src={require('../../assets/title.webp')} alt="Rick and Morty" />
        </div>
      </body>
    </div>
  )
}
