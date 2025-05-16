// src/App.jsx
import React, { useState } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import ChartContainer from './components/ChartContainer';

const App = () => {
  const [activeChart, setActiveChart] = useState('Bar');

  return (
    <div className="App">
      <NavBar onChartChange={setActiveChart} />
      <main className="chart-main">
        <ChartContainer activeChart={activeChart} />
      </main>
    </div>
  );
};

export default App;