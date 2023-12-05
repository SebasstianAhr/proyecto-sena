import React from "react";
import "../hojas-de-estilo/card.css";

function Card(props) {
  return (
    <div className="contenedor-card">
      <img
        className="foto"
        src={require(`../imagenes/usuario-${props.imagen}.png`)}
        alt="Foto"
      />
      <div className="contenedor-atrubutos-card">
        <p className="nombre-card">
          <strong>NOMBRE: </strong>
          {props.nombre}
        </p>
        <p className="id-card">
          <strong>DOCUMENTO: </strong>
          {props.id}
        </p>
        <p className="cargo-card">
          <strong>CARGO: </strong>
          {props.cargo}
        </p>
      </div>
    </div>
  );
}

export default Card;
