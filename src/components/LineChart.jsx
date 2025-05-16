// src/charts/LineChart.jsx
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
  const series = [{
    name: 'GDP Growth (%)',
    data: [4.0, 5.2, 5.5, 3.8, 2.9, 1.7, 3.6, 4.1, 4.5, 4.8]
  }];

  const options = {
    chart: { type: 'line', height: 350 },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth' },
    title: { text: 'Line Chart - GDP Growth Rate', align: 'center' },
    xaxis: {
      categories: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']
    },
    yaxis: { title: { text: 'Growth (%)' } }
  };

  return <ReactApexChart options={options} series={series} type="line" height={350} />;
};

export default LineChart;