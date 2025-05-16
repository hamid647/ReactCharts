// src/charts/DonutChart.jsx
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart = () => {
  const series = [38.5, 24.7, 18.6, 10.2, 8];
  const labels = ['Punjab', 'Sindh', 'KPK', 'Balochistan', 'ICT'];

  const options = {
    chart: { type: 'donut' },
    labels: labels,
    title: { text: 'Donut Chart - GDP Contribution by Region', align: 'center' },
    responsive: [{
      breakpoint: 480,
      options: { chart: { width: 200 }, legend: { position: 'bottom' } }
    }]
  };

  return <ReactApexChart options={options} series={series} type="donut" height={350} />;
};

export default DonutChart;