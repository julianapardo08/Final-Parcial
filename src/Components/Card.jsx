import React from "react";

const Card = ({data}) => {

  return (
      <div className="card">
          {/* En cada card deberan mostrar en name - username y el id */}
          {/* <img src="./images/doctor.jpg" alt='DH-logo' /> */}
          <h2>{data.name}</h2>
          <h3>{data.username}</h3>
          <h4>{data.id}</h4>
          {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
          {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </div>
  );
};

export default Card;
