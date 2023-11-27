import Layouts from "../layouts/Layouts";
import Grafics from "../components/componentsStatistics/Grafics";
const HomePage = () => {
  return (
    <Layouts>
      <div className="home">
        <Grafics tittle="Estadisticas" />
      </div>
    </Layouts>
  );
};

export default HomePage;
