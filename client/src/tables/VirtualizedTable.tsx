import React from 'react';
import { Table, Column, TableCellProps } from 'react-virtualized';
import 'react-virtualized/styles.css';
import './Table.css';

// https://github.com/bvaughn/react-virtualized/tree/master/docs#documentation

function VirtualizedTable({
  rows,
  checked,
  selected,
  check,
  select,
}: TableProps) {
  function checkboxRenderer({ rowData }: TableCellProps) {
    return (
      <div>
        <input
          type="checkbox"
          checked={checked === rowData.id}
          onChange={(e) => {
            check(rowData.id);
          }}
          onClick={(e) => e.stopPropagation()}
        />{' '}
      </div>
    );
  }

  return (
    <Table
      height={600}
      width={400}
      headerHeight={25}
      rowHeight={25}
      rowCount={rows.length}
      rowGetter={({ index }) => rows[index]}
      className="table"
      rowClassName={({ index }) =>
        selected === rows[index]?.id ? 'row selected' : 'row'
      }
      onRowClick={({ rowData }) => select(rowData.id)}
    >
      <Column
        label=""
        dataKey="checkbox"
        width={100}
        headerClassName="header"
        cellRenderer={checkboxRenderer}
      />
      <Column label="ID" dataKey="id" width={100} headerClassName="header" />
      <Column
        label="NAME"
        dataKey="name"
        width={100}
        headerClassName="header"
      />
      <Column label="AGE" dataKey="age" width={100} headerClassName="header" />
    </Table>
  );
}

export default VirtualizedTable;
