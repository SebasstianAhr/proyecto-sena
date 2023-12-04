import Layouts from "../layouts/Layouts";
import Grafics from "../components/componentsStatistics/Grafics";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <Layouts>
      <div className="home">
        <Link to="/statistics" className="link-home-style">
          <Grafics tittle="Estadisticas" />
        </Link>
      </div>
    </Layouts>
  );
};

export default HomePage;
