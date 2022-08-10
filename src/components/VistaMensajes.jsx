import React from "react";
// IMPORTAMOS PROPTYPES

const VistaMensaje = ({ mensaje }) => {

  return mensaje ? (
    <div id="vistaMensaje">
      <h3 className="titulo">{mensaje.asunto}</h3>
      <strong>
        {mensaje.remitente} ({mensaje.email})
      </strong>
      <p>{mensaje.texto}</p>
    </div>
  ) : null;

}
  

// AGREGAMOS PROPTYPES AL COMPONENTE, DECLARANDO LOS TIPOS DE
// LAS PROPS QUE ESPERA RECIBIR EL COMPONENTE


export default VistaMensaje;