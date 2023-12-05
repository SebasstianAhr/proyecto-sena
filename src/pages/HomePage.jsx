import Layouts from "../layouts/Layouts";
import Grafics from "../components/componentsStatistics/Grafics";
import Card_inicio from "../components/componentsHome/componentes/card_inicio";

import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <Layouts>
      <div className="home">
        <Link to="/statistics" className="link-home-style">
          <Grafics tittle="Estadisticas" />
        </Link>
      </div>
      <div className="container-statistic container-home">
        <div className="content-statistics ">
          <Link className="link-home-style" to="/workers">
            <Card_inicio
              titulo="Operarios"
              imagen="1"
              texto="daniel :"
              descripcion=" personero"
              icono="nADA"
              imagen1="1"
              texto1="daniel1 :"
              descripcion1=" personero1"
              icono1="nADA1"
              imagen2="1"
              texto2="daniel2 :"
              descripcion2=" personero2"
              icono2="nADA2"
            />
          </Link>
        </div>
        <div className="content-statistics ">
          <Link className="link-home-style" to="/archives">
            <Card_inicio
              titulo="Archivos"
              imagen="1"
              texto="daniel :"
              descripcion=" personero"
              icono="nADA"
              imagen1="1"
              texto1="daniel1 :"
              descripcion1=" personero1"
              icono1="nADA1"
              imagen2="1"
              texto2="daniel2 :"
              descripcion2=" personero2"
              icono2="nADA2"
            />
          </Link>
        </div>
      </div>
      <div className="container-statistic container-home">
        <div className="content-statistics ">
          <Grafics tittle="Ultimo proceso: 03/JUL/2023" />
        </div>
        <div className="content-statistics">
          <Link className="link-home-style" to="/suppliers">
            <Card_inicio
              titulo="Proveedores"
              imagen="1"
              texto="daniel :"
              descripcion=" personero"
              icono="nADA"
              imagen1="1"
              texto1="daniel1 :"
              descripcion1=" personero1"
              icono1="nADA1"
              imagen2="1"
              texto2="daniel2 :"
              descripcion2=" personero2"
              icono2="nADA2"
            />
          </Link>
        </div>
      </div>
    </Layouts>
  );
};

export default HomePage;
