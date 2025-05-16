// src/charts/StackedChart.jsx
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const StackedChart = () => {
  // Sample data representing GDP contribution by sector as percentages
  const series = [
    { name: 'Agriculture', data: [35, 36, 37, 38, 39] }, // Agriculture contribution (%)
    { name: 'Industry', data: [25, 24, 23, 22, 21] },    // Industry contribution (%)
    { name: 'Services', data: [40, 40, 40, 40, 40] },    // Services contribution (%)
  ];

  const options = {
    chart: {
      type: 'bar',
      stacked: true,
      stackType: '100%', // Ensure the bars stack to 100%
      height: 350,
      toolbar: {
        show: false, // Hide the toolbar
      },
    },
    plotOptions: {
      bar: {
        horizontal: true, // Horizontal bars
        borderRadius: 4,  // Rounded corners
      },
    },
    title: {
      text: 'Stacked Chart - Sector-wise GDP Contribution (%)',
      align: 'center',
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    xaxis: {
      categories: ['2020', '2021', '2022', '2023', '2024'],
      labels: {
        formatter: (val) => `${val}`, // Display year labels
      },
    },
    yaxis: {
      title: {
        text: 'Sector-wise GDP Contribution (%)',
      },
      axisTicks: {
        show: false, // Hide y-axis ticks
      },
      axisBorder: {
        show: false, // Hide y-axis border
      },
      labels: {
        formatter: (val) => `${val}%`, // Format as percentage
      },
    },
    legend: {
      position: 'top', // Position legend at the top
      horizontalAlign: 'right', // Align legend to the right
      offsetX: -10, // Adjust offset for better alignment
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}%`, // Format tooltip as percentage
      },
    },
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c'], // Custom colors for sectors
    fill: {
      opacity: 1,
    },
  };

  return (
    <div className="chart-container">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default StackedChart;