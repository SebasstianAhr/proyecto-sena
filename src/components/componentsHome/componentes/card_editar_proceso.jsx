import React from 'react';
import '../hojas-de-estilo/card_maquinas.css';

function Card_editar_proceso(props) {
  return (
    <div className='contenedor-card-maquinas'>
        <div className='nombre_maquinas'>
            <h2>{props.Titulo}:</h2>
            <input type="Nombre_maquina"/>
        </div>
        <div className='Descripcion_proceso'>
        <h2>{props.Titulo1}:</h2>
        <input type="Descripcion_proceso"/>
        </div>
        <div className='estado_proceso'>
        <h2>{props.Estado}icono</h2>
        </div>
        <div className='botones_aceptar_cancelar'>
           <button className='aceptar'>Aceptar</button>
           <button className='cancelar'>Cancelar</button>
        </div>
        
       
        
      
    </div>
  );
}

export default Card_editar_proceso;