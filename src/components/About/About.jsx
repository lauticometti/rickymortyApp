import styles from './About.module.css'

export default function About() {

  const knowledges=['HTML5', 'CSS3', 'BOOTSTRAP', 'SASS', 'JAVASCRIPT', 'GIT', 'NPM', 'REACTJS']

  return (
    <div className={styles.container}>
      <h2>Lautaro Cometti</h2>
      <p>Gracias a esta pequeña app estilo biblioteca de personajes, aprendi a desarrollar en el entorno de ReactJS.</p>
      <p>Me alegra decir que mis conocimientos a dia de hoy, y con los cuales pude crear la Rick&Morty App son estos:</p>
      <ul>
      {knowledges.map(tech => <li key={tech}>{tech}</li>)}
      </ul>

      
    </div>
  )

}
