import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";

const Layouts = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout-sidebar">
        <Sidebar />
      </div>
      <div className="layout-content-container">
        <Nav />
        <div className="layout-content">

        {children}
        </div>
      </div>
    </div>
  );
};

export default Layouts;

/*los estilos de layouts estan en la linea 241 de css */
