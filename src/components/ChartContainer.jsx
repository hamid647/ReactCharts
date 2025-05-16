// src/components/ChartContainer.jsx
import React from 'react';

import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';
import DonutChart from './DonutChart';
import StackedChart from './StackedChart';

const chartComponents = {
  Bar: <BarChart />,
  Pie: <PieChart />,
  Line: <LineChart />,
  Donut: <DonutChart />,
  Stacked: <StackedChart />
};

const ChartContainer = ({ activeChart }) => {
  return (
    <div className="chart-wrapper">
      {chartComponents[activeChart] || <p>Select a chart</p>}
    </div>
  );
};

export default ChartContainer;