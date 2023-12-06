
import '../hojas-de-estilo/card_eliminar_maquina.css';
import { globalContext } from "../../context/globalContext";
import React, { useContext } from "react";

function Card_eliminar_maquinas(props) {
  const {deleteMachines, setDeleteMachines} = useContext (globalContext)
  const handleClickDelete = () => {
    setDeleteMachines(false)
    console.log(`desde modal ${deleteMachines}`)
  }
  return (
    <div>
       {deleteMachines?(

        <div className='modal-style-backgrownd'>

    <div className='contenedor-card-maquinas'>
        <div className='texto_maquinas'>
            <h2>¿Deseas eliminar esta maquina?</h2>
        </div>
        <div className='botones_aceptar_cancelar'>
           <button className='aceptar'>Aceptar</button>
           <button className='cancelar' onClick={handleClickDelete}>Cancelar</button>
        </div>
        
        </div>
       
        
      
    </div>):""
}
    </div>
  );
}

export default Card_eliminar_maquinas;