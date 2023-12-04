import imgLogo from "../../public/img-logo-indestec-nav.png";
import Icon from "./componentsSidebar/Icon";
import Button from "./componentsSidebar/Button";
import { Link } from "react-router-dom";

/*iconos*/

import { faChartLine, faFolderClosed, faGears, faHome, faPlantWilt, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <span className="section-logo-tittle">
        <img
          className="img-logo-sidebar"
          src={imgLogo}
          alt="Logo indestec S.A.S"
        />
        <h1>Indestec S.A.S</h1>
      </span>

      <div className="components-sidebar">
        <div className="icons-sidebar">
          <Link className="icons-sidebar-link" to="/">
           <Icon icon={faHome} name={"home"}/>
          </Link>
        </div>
        <div className="icon-sidebar">
          <Link className="icons-sidebar-link" to="/workers">
            <Icon icon={faUser} name="Operarios" />
          </Link>
        </div>
        <div className="icon-sidebar">
          <Link className="icons-sidebar-link" to="/statistics">
            <Icon icon={faChartLine} name="Estadisticas" />
          </Link>
        </div>
        <div className="icon-sidebar">
          <Link className="icons-sidebar-link" to="/archives">
            <Icon icon={faFolderClosed} name="Archivos" />
          </Link>
        </div>
        <div className="icon-sidebar">
          <Link className="icons-sidebar-link" to="/processes">
            <Icon icon={faPlantWilt} name="Procesos" />
          </Link>
        </div>
        <div className="icon-sidebar">
          <Link className="icons-sidebar-link" to="/suppliers">
            <Icon icon={faUsers} name="Proveedores" />
          </Link>
        </div>
        <div className="icon-sidebar">
          <Link className="icons-sidebar-link" to="/machines">
            <Icon icon={faGears} name="Maquinas" />
          </Link>
        </div>
      </div>
      <div className="button-sidebar">
        <Button />
      </div>
    </div>
  );
};

export default Sidebar;
