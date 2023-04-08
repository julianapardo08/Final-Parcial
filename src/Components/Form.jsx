import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [info, setInfo] = useState({
    nombre: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let emailTest = emailRegex.test(info.email);
      if (
        info.nombre.length >= 5 &&
        emailTest &&
        info.nombre[0] !== " "
      ) {
        setShow(true);
        setErr(false);
      } else {
        setErr(true);
      }
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
      <input 
          type="text"
          value={info.nombre}
          onChange={(e) => setInfo({ ...info,nombre:e.target.value })}
          placeholder="Ingresa tú nombre"
        />
        <input 
          type="email"
          value={info.email}
          onChange={(e) => setInfo({ ...info,email:e.target.value })}
          placeholder="Ingresa tú correo electrónico"
        />
        <button> Enviar</button>
      </form>
      <h5>{err && <p className="error-container">Por favor verifique su información nuevamente</p>}</h5>
      <h5>{show && <p>Gracias {info.nombre}, te contactaremos cuando antes vía email</p>}</h5>
    </div>
  );
};

export default Form;
