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
  birthYear: number;
  name: string;
}

interface TableProps {
  rows: Row[];
  selected: number | null;
  checked: number | null;
  select: (id: number) => void;
  check: (id: number) => void;
}
