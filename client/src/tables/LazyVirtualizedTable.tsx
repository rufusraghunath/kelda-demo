import React from 'react';
import { Table, Column, TableCellProps } from 'react-virtualized';
import { COLUMNS } from './tableConstants';
import 'react-virtualized/styles.css';
import './Table.css';

// https://github.com/bvaughn/react-virtualized/tree/master/docs#documentation

function LazyVirtualizedTable({
  users,
  buildRow,
  checked,
  selected,
  check,
  select,
}: LazyTableProps) {
  return (
    <Table
      height={600}
      width={550}
      headerHeight={25}
      rowHeight={25}
      rowCount={users.length}
      rowGetter={({ index }) => buildRow(users, index)}
      onRowClick={({ rowData }) => select(rowData.id)}
      className="table"
      headerClassName="header"
      rowClassName={({ index }) =>
        selected === users[index]?.id
          ? 'virtualized-row selected'
          : 'virtualized-row'
      }
    >
      <Column
        label=""
        dataKey="checkbox"
        width={100}
        headerClassName="header"
        cellRenderer={checkboxRenderer.bind(null, checked, check)}
      />
      {COLUMNS.map(({ label, dataKey, width }) => (
        <Column
          key={dataKey}
          label={label}
          dataKey={dataKey}
          width={width}
          headerClassName="header"
        />
      ))}
    </Table>
  );
}

function checkboxRenderer(
  checked: number | null,
  check: (id: number) => void,
  { rowData }: TableCellProps
) {
  return (
    <div>
      <input
        type="checkbox"
        checked={checked === rowData.id}
        onChange={() => {
          check(rowData.id);
        }}
        onClick={(e) => e.stopPropagation()}
      />{' '}
    </div>
  );
}

export default LazyVirtualizedTable;
