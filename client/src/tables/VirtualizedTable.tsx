import React from 'react';
import { Table, Column } from 'react-virtualized';
import 'react-virtualized/styles.css';
import './Table.css';

// https://github.com/bvaughn/react-virtualized/tree/master/docs#documentation

function VirtualizedTable({ rows }: TableProps) {
  return (
    <Table
      height={500}
      width={400}
      headerHeight={25}
      rowHeight={25}
      rowCount={rows.length}
      rowGetter={({ index }) => rows[index]}
      className="table"
      rowClassName="row"
    >
      <Column label="" dataKey="checkbox" width={100} />
      <Column label="ID" dataKey="id" width={100} />
      <Column label="NAME" dataKey="name" width={100} />
      <Column label="AGE" dataKey="age" width={100} />
    </Table>
  );
}

export default VirtualizedTable;
