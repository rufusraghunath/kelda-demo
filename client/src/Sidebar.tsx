import React from 'react';
import './Sidebar.css';

const TABLES = [
  {
    name: '',
    component: null,
  },
];

// TODO: add react-router here

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>JS Perf</h1>
      <>
        {TABLES.map((table, i) => (
          <div key={i}>Table</div>
        ))}
      </>
    </div>
  );
}

export default Sidebar;
