export default function validate({username, password}) {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i
  const regexOneNumber = /[0-9]/
  const errors = {};

  /* 
  el nombre de usuario tiene que ser un email (explora validaciónes REGEX en internet!).
  el nombre de usuario no puede estar vacío.
  el nombre de usuario no puede tener más de 35 caracteres.
  */

  if(!(regexEmail.test(username) && username.length <= 35)) errors.username= 'Should write a correct email.';

  /* 
  la contraseña tiene que tener al menos un número.
  la contraseña tiene que tener una longitud entre 6 y 10 caracteres.
  */

  if(!(!!password.match(regexOneNumber) && password.length >= 6 && password.length <= 10)) errors.password = 'Should enter a valid password.'

  return errors 
}


