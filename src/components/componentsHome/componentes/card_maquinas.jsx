import React from 'react';
import '../hojas-de-estilo/card_maquinas.css';

function Card_maquinas(props) {
  return (
    <div className='contenedor-card-maquinas'>
        <div className='nombre_maquinas'>
            <h2>{props.Titulo}:</h2>
            <input type="Nombre_maquina"/>
        </div>
        <div className='estado_maquina'>
        <h2>{props.Estado}:</h2>
        <div className='botones_estado'>
            <button className='activa'>Activa</button>
            <button className='inactiva'>Inactiva</button>
        </div>
        </div>
        <div className='botones_aceptar_cancelar'>
           <button className='aceptar'>Aceptar</button>
           <button className='cancelar'>Cancelar</button>
        </div>
        
       
        
      
    </div>
  );
}

export default Card_maquinas;