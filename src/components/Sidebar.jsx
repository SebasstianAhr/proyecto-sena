import imgLogo from "../../public/img-logo-indestec-nav.png";
import Icon from "./componentsSidebar/Icon";
import Button from "./componentsSidebar/Button";
import { Link } from "react-router-dom";

/*iconos*/
import { FaHome, FaUsersCog, FaFileArchive } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { PiPlantFill } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
import { GiGears } from "react-icons/gi";

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
            <Icon icon={<FaHome />} name="Inicio" />
          </Link>
        </div>
        <div className="icon-sidebar">
          <Link className="icons-sidebar-link" to="/workers">
            <Icon icon={<FaUsersCog />} name="Operarios" />
          </Link>
        </div>
        <div className="icon-sidebar">
          <Link className="icons-sidebar-link" to="/statistics">
            <Icon icon={<BsGraphUp />} name="Estadisticas" />
          </Link>
        </div>
        <div className="icon-sidebar">
          <Link className="icons-sidebar-link" to="/archives">
            <Icon icon={<FaFileArchive />} name="Archivos" />
          </Link>
        </div>
        <div className="icon-sidebar">
          <Link className="icons-sidebar-link" to="/processes">
            <Icon icon={<PiPlantFill />} name="Procesos" />
          </Link>
        </div>
        <div className="icon-sidebar">
          <Link className="icons-sidebar-link" to="/suppliers">
            <Icon icon={<MdGroups />} name="Proveedores" />
          </Link>
        </div>
        <div className="icon-sidebar">
          <Link className="icons-sidebar-link" to="/machines">
            <Icon icon={<GiGears />} name="Maquinas" />
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
