import { globalContext } from "./globalContext";
import { useState } from "react";

const StatesComponents = ({ children }) => {

/*GLOBAR wORKERS*/

  const [nameWorker, setNameWorker] = useState("sebasstian Ahr");
  const [correoWorker, setCorreoWorker] = useState("jcpastas@dayrep.com");
  const [idusuarioWorker, setIdusuarioWorker] = useState("sebas117");

  /*GLOBAL ARCHIVES*/

  const [nameArchives, setNameArchives] = useState("sebasstian Ahr");
  const [dateArchives, setDateArchives] = useState("04/12/2023");
  const [processArchives, setProcessArchives] = useState("Café oscuro");
  const [machineArchives, setMachineArchives] = useState("Maquináme ésta");

  /*GLOBAL MACHINE*/

  const [nameMachines, setNameMachines] = useState("Maquina 1");

  /*GLOBAL PROCESS*/

  const [nameProcess, setNameProcess] = useState("GEISHA");
  const [stateProcess, setStateProcess] = useState("ACTIVO");




  const [show, setShow,] = useState(false);
  const [deleteMachines,setDeleteMachines] = useState(false)

  return (
    <globalContext.Provider value={{ nameWorker, correoWorker, idusuarioWorker, nameArchives, dateArchives, processArchives, machineArchives, nameMachines, nameProcess, stateProcess, show, setShow,deleteMachines,setDeleteMachines}}>
      {children}
    </globalContext.Provider>
  );
};

export default StatesComponents;
