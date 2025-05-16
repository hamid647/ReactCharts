// src/charts/BarChart.jsx
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {
  // Sample GDP data for Pakistan (in USD Billion)
  const series = [
    {
      name: 'GDP (USD Billion)',
      data: [288, 305, 340, 345, 325, 310, 347, 376, 385, 394]
    }
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 400,
      stacked: false,
      toolbar: {
        show: true, // Show toolbar for export options
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false
        }
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        }
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 10, // Rounded corners
        columnWidth: '50%', // Bar width
        distributed: true, // Distribute bars evenly
        dataLabels: {
          position: 'top' // Position data labels on top of bars
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val} USD Billion`, // Format data labels
      style: {
        colors: ['#000000'], // Dark text for better readability
        fontSize: '12px',
        fontFamily: 'Arial, sans-serif'
      }
    },
    title: {
      text: 'Bar Chart - GDP Growth (Pakistan)',
      align: 'center',
      style: {
        color: '#333',
        fontSize: '20px',
        fontWeight: 'bold'
      }
    },
    xaxis: {
      categories: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
      axisBorder: {
        show: true,
        color: '#999'
      },
      axisTicks: {
        show: true,
        color: '#999'
      },
      labels: {
        style: {
          colors: ['#333'],
          fontSize: '12px',
          fontFamily: 'Arial, sans-serif'
        }
      }
    },
    yaxis: {
      title: {
        text: 'GDP (USD Billion)',
        style: {
          color: '#333',
          fontSize: '14px',
          fontWeight: 'bold'
        }
      },
      labels: {
        formatter: (val) => `${val} USD Billion`, // Format y-axis labels
        style: {
          colors: ['#333'],
          fontSize: '12px',
          fontFamily: 'Arial, sans-serif'
        }
      }
    },
    colors: ['#007bff'], // Primary color for bars
    fill: {
      type: 'solid',
      opacity: 1
    },
    grid: {
      borderColor: '#e0e0e0', // Subtle grid lines
      strokeDashArray: 5
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} USD Billion`, // Format tooltip
        title: {
          formatter: (seriesName) => `${seriesName}: `
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <ReactApexChart options={options} series={series} type="bar" height={400} />
    </div>
  );
};

export default BarChart;