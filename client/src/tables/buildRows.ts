import moment from 'moment';

const buildRows = (users: User[]): Row[] =>
  users.map(({ id, name, age }) => ({
    id,
    age,
    birthYear: moment().subtract(age, 'years').year(),
    name: name[0].toUpperCase() + name.slice(1, name.length),
  }));

export default buildRows;
