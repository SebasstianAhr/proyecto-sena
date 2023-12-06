import React, { useContext } from "react";
import "../hojas-de-estilo/card.css";
import img from "../imagenes/usuario-1.png";
import { globalContext } from "../../context/globalContext";

function Card() {

const {show, setShow, nameWorker, correoWorker, idusuarioWorker} = useContext (globalContext)

 const handleClick = () => {
  setShow(false)
  console.log(`desde modal ${show}`)
}
  return (
    <div>

      {show?(
        <div className="modal-style-backgrownd">
          <div className="contenedor-card">
            <button onClick={handleClick}>X</button>
            <img className="foto" src={img} alt="Foto" />
            <div className="contenedor-atrubutos-card">
              <p className="nombre-card">
                <strong>NOMBRE: </strong>
                {nameWorker}
              </p>
              <p className="id-card">
                <strong>DOCUMENTO: </strong>
                {correoWorker}
              </p>
              <p className="cargo-card">
                <strong>CARGO: </strong>
                {idusuarioWorker}
              </p>
            </div>
          </div>       
        </div>):""
      }
     </div>
  );
}

export default Card;
