import { useState, useContext } from "react";
import { globalContext } from "../context/globalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faTrash } from "@fortawesome/free-solid-svg-icons";

const Machine = () => {
  const { nameMachines, setShow,show ,deleteMachines,setDeleteMachines} = useContext(globalContext);

  const [machineState, setMachineState] = useState(false)

  const changeMachineStateActive = () => setMachineState(true);
  const changeMachineStateInactive = () => setMachineState(false);

  const handleClick = () =>{
    setShow(true)
    console.log(show);
    
   
 }
 const handleClickDelete = () =>{
 setDeleteMachines(true)
 console.log(deleteMachines);
 }
  return (
    <tr>
      <td>{nameMachines}</td>

      <td className="action-icon-from-processes icon-table-center">
        <span
          onClick={
            machineState ? changeMachineStateInactive : changeMachineStateActive
          }
          className={
            machineState ? "color-active-workers" : "color-inactive-workers"
          }
        >
          {machineState ? "Activo" : "Activar"}</span>
        <span className="general-icons-tables-workers-info">
          <FontAwesomeIcon icon={faCircleInfo} onClick={handleClick} />
         
        </span>
        <span className="color-icon-trash-processes">
          <FontAwesomeIcon icon={faTrash} onClick={handleClickDelete}/>
        </span>
      </td>
    </tr>
  );
};

export default Machine;
