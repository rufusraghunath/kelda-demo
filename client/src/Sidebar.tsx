import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const TABLES = [
  {
    name: 'HTML Table',
    link: '/html',
  },
  {
    name: 'Virtualized Table',
    link: '/virtualized',
  },
];

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>JS Perf</h1>
      <ul>
        {TABLES.map(({ name, link }, i) => (
          <li key={i}>
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
