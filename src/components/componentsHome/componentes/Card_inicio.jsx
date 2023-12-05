import img from "../imagenes/usuario-1.png";
import "../hojas-de-estilo/card_inicio.css";

function Card_inicio(props) {
  return (
    <div className="contenedor-card-inicio">
      <div className="titulo-card">
        <strong> {props.titulo} </strong>
      </div>
      <div className="imagen-texto-color-icono">
        <div className="foto-inicio">
          <img className="foto-card-inicio" src={img} alt="Foto" />
        </div>
        <div className="texto-descrpcion">
          {props.texto} {props.descripcion}
        </div>
        <div className="icono">{props.icono}</div>
      </div>
      <div className="imagen-texto-color-icono">
        <div className="foto-inicio">
          <img className="foto-card-inicio" src={img} alt="Foto" />
        </div>
        <div className="texto-descrpcion">
          {props.texto1} {props.descripcion1}
        </div>
        <div className="icono">{props.icono1}</div>
      </div>
      <div className="imagen-texto-color-icono">
        <div className="foto-inicio">
          <img className="foto-card-inicio" src={img} alt="Foto" />
        </div>
        <div className="texto-descrpcion">
          {props.texto2} {props.descripcion2}
        </div>
        <div className="icono">{props.icono2}</div>
      </div>
    </div>
  );
}

export default Card_inicio;
