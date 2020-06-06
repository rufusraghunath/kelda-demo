import moment from 'moment';
import { Complexity } from '../ComplexitySwitch';

function buildRows(complexity: Complexity, users: User[]): Row[] {
  return users.map(({ id, name, age }) => ({
    id,
    age,
    birthYear: moment().subtract(age, 'years').year(),
    name: name[0].toUpperCase() + name.slice(1, name.length),
    bestFriend: complexity === 'n^2' ? getBestFriend(id, users) : 'No one :(',
  }));
}

function getBestFriend(userId: number, users: User[]): string {
  const friends = users
    .filter(({ id }) => id !== userId)
    .map(({ name }) => ({
      name,
      closeness: Math.random(),
    }))
    .sort((a, b) => {
      if (a.closeness > b.closeness) return -1;
      if (a.closeness < b.closeness) return 1;
      return 0;
    });

  return friends[0].name;
}

export default buildRows;
