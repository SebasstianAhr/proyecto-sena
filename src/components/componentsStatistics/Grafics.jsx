import { useRef } from "react";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Line, getDatasetAtEvent } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const Grafics = ({ tittle }) => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Weekdays",
        data: [30, 36, 66, 55, 40, 80, 70],
        borderColor: "#2f3843",
        backgroundColor: "#2f3843",
        tension: 0.4,
        link: [
          "http://www.chartjs.org",
          "http://www.chartjs3.com",
          "http://www.google.com",
        ],
      },
    ],
  };

  const options = {};

  const chartRef = useRef();
  const onClick = (event) => {
    if (getDatasetAtEvent(chartRef.current, event).length > 0) {
      const clickDatasetsIndex = getDatasetAtEvent(chartRef.current, event)[0]
        .datasetIndex;
      const dataPoint = getDatasetAtEvent(chartRef.current, event)[0].index;
      const link = data.datasets[clickDatasetsIndex].link[dataPoint];
      window.open(link, "_blank");
    }
  };

  return (
    <div className="grafics-container-statistics">
      <div className="grafics-content-statistics">
        <div className="grafics-tittle-content">
          <p>{tittle}</p>
        </div>
        <div className="grafic-container">
          <Line
            data={data}
            options={options}
            onClick={onClick}
            ref={chartRef}
          ></Line>
        </div>
      </div>
    </div>
  );
};

export default Grafics;

/*los estilos de este componente estan en la linea 295 de css*/
