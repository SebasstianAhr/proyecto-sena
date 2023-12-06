import { useContext, useState } from "react";
import { globalContext } from "../context/globalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff, faBan, faCircleInfo } from "@fortawesome/free-solid-svg-icons";


const Worker = () => {
  const {nameWorker, correoWorker, idusuarioWorker, setShow,show} = useContext(globalContext);
  const [workerState, setWorkerState] = useState(false)

   

   const changeWorkerStateActive = () => setWorkerState(true);
   const changeWorkerStateInactive = () => setWorkerState(false);


   

   const handleClick = () =>{
      setShow(true)
      console.log(show);
   }

  return (

    
    
    
  

    <tr>

  

      <td>{nameWorker}</td>
      <td>{correoWorker}</td>
      <td>{idusuarioWorker}</td>
      <td>
        <span onClick={workerState ? changeWorkerStateInactive :changeWorkerStateActive} className={ workerState ? "color-active-workers" :"color-inactive-workers"}>{workerState ? 'Activo' : 'Activar'}</span>
      </td>
      <td>
        <span className="general-icons-tables-workers">
          <FontAwesomeIcon icon={faBan}/>
        </span>
      </td>
      <td>
        <span className="general-icons-tables-workers-info"
           >
          <FontAwesomeIcon icon={faCircleInfo}
            onClick={handleClick}
          />
        </span>
      </td>
    </tr>
    
    
  );
};

export default Worker;