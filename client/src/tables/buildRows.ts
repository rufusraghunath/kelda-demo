const buildRows = (users: User[]): Row[] =>
  users.map(({ id, name, age }) => ({
    id,
    age,
    name: name[0].toUpperCase() + name.slice(1, name.length),
  }));

export default buildRows;
