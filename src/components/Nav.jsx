import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

/*import de el componente nombre*/
import Name from "./componentsNavbar/Name";
import Profile from "./componentsNavbar/Profile";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="section-tittle-navbar">
        <Name name="Inicio" />
      </div>
      <div className="section-notification-profile-navbar">
        <div className="nitification-navbar">
        <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="profile-navbar">
          <Profile />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
