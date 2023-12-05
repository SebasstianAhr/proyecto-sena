import img from "../../../public/imagen-processes-home.jpg";

const ProcessesHome = ({ tittle }) => {
  return (
    <div className="container-processes-home">
      <div className="content-processes-home">
        <p className="tittle-processes-home">{tittle}</p>
      </div>
      <img className="img-processes-home" src={img} alt="coffe" />
    </div>
  );
};

export default ProcessesHome;
