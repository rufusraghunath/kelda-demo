import React, { useState } from 'react';
import FetchUsers from './FetchUsers';
import SelectNumberOfTables, { TableNumber } from './SelectNumberOfTables';
import ComplexitySwitch, { Complexity } from './ComplexitySwitch';
import TableSwitch from './tables/TableSwitch';
import './Main.css';

function Main() {
  const [users, setUsers] = useState<User[]>([]);
  const [complexity, setComplexity] = useState<Complexity>('n');
  const [numberOfTables, setNumberOfTables] = useState<TableNumber>(1);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState<number | null>(null);
  const select = (id: number) => {
    id === selected ? setSelected(null) : setSelected(id);
  };
  const check = (id: number) => {
    id === checked ? setChecked(null) : setChecked(id);
  };

  return (
    <>
      <div className="main">
        <FetchUsers setUsers={setUsers} />
        <ComplexitySwitch
          complexity={complexity}
          setComplexity={setComplexity}
        />
        <SelectNumberOfTables
          numberOfTables={numberOfTables}
          setNumberOfTables={setNumberOfTables}
        />
        <h2>Users</h2>
        <div className="table-switch-wrapper">
          {Array(numberOfTables)
            .fill(null)
            .map((_, i) => (
              <TableSwitch
                key={i}
                users={users}
                complexity={complexity}
                selected={selected}
                checked={checked}
                select={select}
                check={check}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Main;
