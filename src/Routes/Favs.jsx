import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  let dataDentistFav = localStorage.getItem('dentistsFavs')
  let parsedFav = JSON.parse(dataDentistFav)
  const numero = Math.random()
  return (
    <>
      <h1>Tus dentistas Favoritos ⭐</h1>
      <div className="card-grid">
      {parsedFav.map(dentist => (
            <Card key={numero} data={dentist}/>
        ))}
      </div>
    </>
  );
};

export default Favs;
