import { globalContextArchives } from "./globalcontextArchives";
import { useState } from "react";

const StateComponentArchives = ({ children }) => {
  const [name, setName] = useState("sebasstian Ahr");
  const [date, setDate] = useState("04/12/2023");
  const [process, setProcess] = useState("Café oscuro");
  const [machine, setMachine] = useState("Maquináme ésta");

  return (
    <globalContextArchives.Provider value={{ name, date, process, machine }}>
      {children}
    </globalContextArchives.Provider>
  );
};

export default StateComponentArchives;
