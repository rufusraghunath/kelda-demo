import React, { useState } from 'react';
import HTMLTable from './tables/HTMLTable';
import FetchUsers from './FetchUsers';
import './Main.css';

function Main() {
  const [users, setUsers] = useState<User[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState<number | null>(null);
  const select = (id: number) => {
    id === selected ? setSelected(null) : setSelected(id);
  };
  const check = (id: number) => {
    id === checked ? setChecked(null) : setChecked(id);
  };

  return (
    <div className="main">
      <FetchUsers setUsers={setUsers} />
      <h2>Users</h2>
      <div className="table-container">
        <HTMLTable
          users={users}
          selected={selected}
          checked={checked}
          select={select}
          check={check}
        />
      </div>
    </div>
  );
}

export default Main;
