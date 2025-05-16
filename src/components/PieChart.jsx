// src/charts/PieChart.jsx
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const series = [44, 55, 41, 17, 15];
  const labels = ['Agriculture', 'Industry', 'Services', 'IT', 'Others'];

  const options = {
    chart: { type: 'pie' },
    labels: labels,
    title: { text: 'Pie Chart - Sector Contribution to GDP', align: 'center' },
    responsive: [{
      breakpoint: 480,
      options: { chart: { width: 200 }, legend: { position: 'bottom' } }
    }]
  };

  return <ReactApexChart options={options} series={series} type="pie" height={350} />;
};

export default PieChart;