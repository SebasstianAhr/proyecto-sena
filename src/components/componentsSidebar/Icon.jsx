import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon, name }) => {
  return (
    <div className="icon-component-sidebar">
      <FontAwesomeIcon icon={icon}/>
      <p>{name}</p>
    </div>
  );
};

export default Icon;

/*los estilos de este componente estal en la linea 145 de css*/
