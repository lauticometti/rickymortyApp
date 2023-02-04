import { useEffect, useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Form from './components/LoginForm/LoginForm'
import Favorites from './components/Favorites/Favorites'
import './App.css'

function App () {
 
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    !access && navigate('/');
 }, [access]);  
  
  const username = 'l@g.com';
  const password = 'l1'
  
  function login(userData){
    if (userData.username === username && userData.password === password){
      setAccess(true)
      navigate('/home')
    }
  }

  function logout() {
    setAccess(false)
  }

  function onSearch(character) {
    if (character) {
      fetch(`http://localhost:3001/rickandmorty/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if (!(characters.map(character => character.id).includes(data.id))) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {window.alert(`${data.name} ya esta en la lista`)}
        }
        else {window.alert(`No existe personaje con el id ${character}`)} 
      }).catch(error => console.log(error))
    }
  }

  return (
    <div className='App'>
      {/* location.pathname */ '.' != '/' && <Nav onSearch={onSearch} setCharacters={setCharacters} logout={logout}/>}
      <Routes>
        {/* <Route exact path='/' element = { <Form login={login}/> } /> */}
        <Route path='/'/*home*/ element = { <Home /> } />
        <Route path='/about' element = { <About /> } />
        <Route path='/detail/:detailId' element = { <Detail /> } />
        <Route path='/favorites' element = { <Favorites  /> } /> 
      </Routes>
    </div>
  )
}

export default App
