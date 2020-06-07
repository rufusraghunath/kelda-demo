import React from 'react';
import './SelectNumberOfTables.css';

export type TableNumber = 1 | 2 | 4;

interface Props {
  numberOfTables: number;
  setNumberOfTables: (n: TableNumber) => void;
}

export default function SelectNumberOfTables({
  numberOfTables,
  setNumberOfTables,
}: Props) {
  return (
    <div className="num-tables">
      <label htmlFor="num-tables" className="num-tables-label">
        Number of tables:
      </label>
      <select
        id="num-tables"
        value={numberOfTables}
        onChange={(e) =>
          setNumberOfTables(parseInt(e.target.value, 10) as TableNumber)
        }
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={4}>4</option>
      </select>
    </div>
  );
}
