// src/components/NavBar.jsx
import React from 'react';

const NavBar = ({ onChartChange }) => {
  const charts = ['Bar', 'Pie', 'Line', 'Donut', 'Stacked'];

  return (
    <nav className="navbar">
      <h1>Pakistan GDP Charts</h1>
      <ul>
        {charts.map((chart) => (
          <li key={chart}>
            <button onClick={() => onChartChange(chart)}>{chart} Chart</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;