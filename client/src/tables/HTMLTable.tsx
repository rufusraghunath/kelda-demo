import React from 'react';
import { COLUMNS } from './tableConstants';
import './Table.css';

function HTMLTable({ users, selected, checked, select, check }: TableProps) {
  return (
    <table className="table">
      <thead className="row header">
        <tr>
          <th></th>
          {COLUMNS.map((column) => (
            <th key={column}>{column.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody className="body">
        {users.map((user, i) => (
          <tr
            key={i}
            className={selected === user.id ? 'row selected' : 'row'}
            onClick={() => select(user.id)}
          >
            <td className="cell">
              <input
                type="checkbox"
                checked={checked === user.id}
                onClick={(e) => {
                  e.stopPropagation();
                  check(user.id);
                }}
              />
            </td>
            {COLUMNS.map((column) => (
              <td className="cell" key={column}>
                {user[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default HTMLTable;
