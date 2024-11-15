import React from 'react'
import NavBar from './navBar'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { supabase } from "../supabase/client.js"
import './styles/loginForm.css'

function loginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // Limpia cualquier error previo
  
    try {
      const { data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
  
      console.log('Inicio de sesión exitoso:', data); // Imprime la respuesta en caso de éxito
    } catch (error) {
      setError(error.message); // Muestra el mensaje de error si ocurre
    }
  };



  return (
    <div>
      <NavBar/>
      <div className='formContainer'>
        <form onSubmit={handleLogin}>
          <input type="email" name="" id="email" placeholder='Correo Electrónico' className='loginInput'
            onChange={(e) => setEmail(e.target.value)} />
          <input type="password" name="" id="password" className='loginInput' placeholder='Contraseña'
            onChange={(e) => setPassword(e.target.value)} />
          <button className='loginInput'>Enviar</button>
        </form>
        <Link to="/signup" className='registerLink'>Registrarse</Link>
      </div>
    </div>
  )
}

export default loginForm