import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobalDentist } from '../Components/utils/global.context'
import axios from 'axios'
import Card from '../Components/Card'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {favDispatch} = useContextGlobalDentist()
  const [dentist, setDentist] = useState({})
  const {id} = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${id}` 
  
  useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(data => setDentist(data))
  }, [])

  const addFav = () => {
      favDispatch({type: 'ADD_FAV', payload: dentist})
  }
  return (
    <>
      <h1>Detalle dentista #{dentist.id}</h1>
      <div className="content-detail">
        <div className="card card-detail">
            {/* En cada card deberan mostrar en name - username y el id */}
            <div className='card-img'><img src="../images/doctor.jpg"/></div>  
            <div>
              <button onClick={addFav}>⭐</button>
              <h2>🖊️ Nombre: {dentist.name}</h2>
              <h2>📧 Email: {dentist.email}</h2>
              <h2>📞 Teléfono: {dentist.phone}</h2>
              <h2>🌐 Sitio web: {dentist.website}</h2>
            </div>
            {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
            {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        </div>
      </div>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail