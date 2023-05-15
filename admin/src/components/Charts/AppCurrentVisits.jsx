import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const AppCurrentVisits = () => {
  const data = {
    labels: ["Toshkent", "Farg'ona", "Samarqand", "Andijon", "Xorazm"],
    datasets: [
      {
        label: "Pol",
        data: [35, 15, 25, 15, 10],
        backgroundColor: ["green", "red", "pink", "orange", "yellow"],
        borderColor: ["green", "red", "pink", "orange", "yellow"],
      },
    ],
  };
  const option = {};
  return (
    <div className="w-[500px]">
      <Pie data={data} option={option} width={500} height={500} />
    </div>
  );
};

export default AppCurrentVisits;
