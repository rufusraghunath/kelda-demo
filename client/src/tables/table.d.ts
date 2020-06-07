interface User {
  id: number;
  age: number;
  name: string;
}

interface ColumnDefinition {
  label: string;
  dataKey: string;
  width: number;
}

interface Row {
  [key: string]: number | string;
  id: number;
  age: number;
  name: string;
  bestFriend: id;
}

interface BaseTableProps {
  selected: number | null;
  checked: number | null;
  select: (id: number) => void;
  check: (id: number) => void;
}

interface TableProps extends BaseTableProps {
  rows: Row[];
}

interface LazyTableProps extends BaseTableProps {
  users: User[];
  buildRow: (users: User[], index: number) => Row;
}
