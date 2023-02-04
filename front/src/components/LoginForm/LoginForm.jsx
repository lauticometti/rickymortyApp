import styles from './LoginForm.module.css'
import React from 'react';
import validate from './validation';

export default function Form(props) {

  const [userData, setUserData] = React.useState({ username: '', password: '' });

  const [errors, setErrors] = React.useState({username: '', password: ''})

  const [firstLetter, setfirstLetter] = React.useState({username: false, password: false})

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setfirstLetter({
      ...firstLetter,
      [property]: true
    })

    setUserData({
      ...userData,
      [property]: value
    })

    setErrors(validate({
      ...userData,
      [property]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData)
  }

  return (
    <form className={styles.login} onSubmit={handleSubmit}>
      <h2 className={styles.h2}>User Login</h2>

      <div className={styles.inputContainer}>
        <input className={styles.username} type="text" autoComplete='off' name='username' value={userData.username} onChange={handleInputChange} placeholder="Username"/>
        {errors.username && firstLetter.username && <span className={styles.warning}>{errors.username}</span>}
      </div>

      <div className={styles.inputContainer}>
        <input className={styles.password} type="text" autoComplete='off' name='password' value={userData.password} onChange={handleInputChange} placeholder="Password"/>
        {errors.password && firstLetter.password && <span className={styles.warning}>{errors.password}</span>}
      </div>

      <button className={styles.button} type='submit'>Login</button>
    </form>
  )
}