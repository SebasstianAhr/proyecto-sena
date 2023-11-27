import Layouts from "../layouts/Layouts";
import Grafics from "../components/componentsStatistics/Grafics";
const Statistics = () => {
  return (
    <Layouts>
      <div>
        <Grafics tittle="Ultimo proceso: 07/JULIO/2023" />
        <div className="container-statistic">
          <div className="content-statistics content-left-statistics">
            <Grafics tittle="Ultimo proceso: 05/JUL/2023" />
          </div>
          <div className="content-statistics content-right-statistics">
            <Grafics tittle="Ultimo proceso: 04/JUL/2023" />
          </div>
        </div>
        <div className="container-statistic">
          <div className="content-statistics content-left-statistics">
            <Grafics tittle="Ultimo proceso: 03/JUL/2023" />
          </div>
          <div className="content-statistics content-right-statistics">
            <Grafics tittle="Ultimo proceso: 02/JUL/2023" />
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Statistics;
