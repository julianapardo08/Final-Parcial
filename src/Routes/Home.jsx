import Card from '../Components/Card'
import React from 'react'
import { Link } from "react-router-dom";
import { useContextGlobalDentist } from '../Components/utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {apiState} = useContextGlobalDentist()
  return (
    <main className="home">
      <h1>Bienvenid@</h1>
      <p>Selecciona tu odontólogo de preferencia, para obtener más información: 👇</p>
      <div className='card-grid'>
      {/* Aqui deberias renderizar las cards */}
        {apiState.length && apiState.map(infoDentist => (<Link key={infoDentist.id} to={'/detail/'+ infoDentist.id}><Card data={infoDentist}/></Link>))}
      </div>
    </main>
  )
}

export default Home