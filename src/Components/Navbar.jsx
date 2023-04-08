import React from 'react'
import { Link } from "react-router-dom";
import { useContextGlobalDentist } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {themeState, themeDispatch} = useContextGlobalDentist()

  const switchTheme = () => {
    if(themeState.theme){
      themeDispatch({type: 'SWITCH_LIGHT'})
    } else {
      themeDispatch({type: 'SWITCH_DARK'})
    }
  }

  return (
    <nav className='theme-nav'>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <Link to="/"> DH Odonto </Link>
        <Link to="/"> Home </Link> 
        <Link to="/contacto"> Contact </Link>
        <Link to="/favs"> Favoritos </Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div onClick={switchTheme}>{themeState.theme ? <img src="./images/icons8-estrella-de-sol-50.png"/> : <img src="./images/icons8-luna-brillante-50.png"/>}</div>
    </nav>
  )
}

export default Navbar