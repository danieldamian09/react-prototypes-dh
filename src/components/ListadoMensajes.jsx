import React from "react";
// IMPORTAMOS PROPTYPES

const ListadoMensajes = ({ mensajes = [], seleccionarMensaje }) => (
  <div id="listadoMensajes">
    {mensajes.map((mensaje) => (
      <div onClick={() => seleccionarMensaje(mensaje.id)} key={mensaje.id}>
        <strong>De: {mensaje.remitente}</strong>
        <p>Asunto: {mensaje.asunto}</p>
        <small> {mensaje.fecha}</small>
      </div>
    ))}
  </div>
);

// AGREGAMOS PROPTYPES AL COMPONENTE, DECLARANDO LOS TIPOS DE
// LAS PROPS QUE ESPERA RECIBIR EL COMPONENTE

export default ListadoMensajes;
