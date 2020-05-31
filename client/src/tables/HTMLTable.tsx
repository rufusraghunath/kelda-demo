import React from 'react';
import { COLUMNS } from './tableConstants';
import './Table.css';

function HTMLTable({ rows, selected, checked, select, check }: TableProps) {
  return (
    <table className="table">
      <thead className="row header">
        <tr>
          <th>
            <input type="checkbox" readOnly className="hidden" />
          </th>
          {COLUMNS.map((column) => (
            <th key={column}>{column.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody className="body">
        {rows.map((row, i) => (
          <tr
            key={i}
            className={selected === row.id ? 'row selected' : 'row'}
            onClick={() => select(row.id)}
          >
            <td className="cell">
              <input
                type="checkbox"
                checked={checked === row.id}
                onChange={(e) => {
                  check(row.id);
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </td>
            {COLUMNS.map((column) => (
              <td className="cell" key={column}>
                {row[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default HTMLTable;
