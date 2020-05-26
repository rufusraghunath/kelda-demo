interface User {
  [key: string]: number | string;
  id: number;
  age: number;
  name: string;
}

interface TableProps {
  users: User[];
  selected: number | null;
  checked: number | null;
  select: (id: number) => void;
  check: (id: number) => void;
}
