import React from "react";
import {
  Bar,
  Line,
  Pie,
  Radar,
  PolarArea,
  Doughnut,
  Scatter,
} from "react-chartjs-2";

const Chart = (props) => {
  const Nationalities = [];
  const test = [];
  let count = 0;
  props.data.forEach((item) => {
    let index = Nationalities.findIndex((e) => {
      return item.nat == e[0];
    });
    // Taking out all the possible nationalities
    if (index == -1) {
      Nationalities.push([item.nat, 1]);
    }
    if (index !== 1) {
      if (Nationalities[index]) {
        Nationalities[index][1]++;
      }
    }
  });

  const aabbxx = Nationalities.map((item) => item[1]);

  const Data = {
    labels: Nationalities.map((item) => item[0]),
    datasets: [
      {
        label: "Nationalities",
        data: aabbxx,
        backgroundColor: [
          "rgba(255, 0, 0, 0.6)",
          "rgba(120, 162, 235, 0.6)",
          "rgba(140, 206, 186, 0.6)",
          "rgba(180, 192, 192, 0.6)",
          "rgba(200, 102, 255, 0.6)",
          "rgba(0, 0, 255, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(100, 99, 132, 0.6)",
          "rgba(120, 120, 235, 0.6)",
          "rgba(140, 140, 86, 0.6)",
          "rgba(238, 130, 238, 0.6)",
          "rgba(200, 180, 255, 0.6)",
          "rgba(220, 200, 64, 0.6)",
          "rgba(255, 255, 132, 0.6)",
          "rgba(255, 255, 100, 0.6)",
          "rgba(255, 165, 0, 0.6)",
          "rgba(255, 255, 180, 0.6)",
          "rgba(255, 255, 200, 0.6)",
          "rgba(255, 255, 200, 0.6)",
          "rgba(106, 90, 205, 0.6)",
          "rgba(255, 255, 200, 0.6)",
        ],
        borderColor: "rgba(0, 0, 0,.2)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Pie data={Data}></Pie>
    </div>
  );
};

export default Chart;
