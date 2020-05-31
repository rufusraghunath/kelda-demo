interface User {
  id: number;
  age: number;
  name: string;
}

interface Row {
  [key: string]: number | string;
  id: number;
  age: number;
  name: string;
}

interface TableProps {
  rows: Row[];
  selected: number | null;
  checked: number | null;
  select: (id: number) => void;
  check: (id: number) => void;
}
