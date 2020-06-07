import React, { useState, useEffect } from 'react';
import VirtualizedTable from './VirtualizedTable';
import { Complexity } from '../ComplexitySwitch';
import { kelda, options } from '../kelda';

interface KeldaTableProps extends BaseTableProps {
  users: User[];
  complexity: Complexity;
}

export default function KeldaTable({
  complexity,
  users,
  selected,
  checked,
  select,
  check,
}: KeldaTableProps) {
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    kelda.orderWork<Row[]>(options, complexity, users).then(setRows);
  }, [complexity, users]);

  return (
    <VirtualizedTable
      rows={rows}
      selected={selected}
      checked={checked}
      select={select}
      check={check}
    />
  );
}
