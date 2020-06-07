import moment from 'moment';
import { Complexity } from '../ComplexitySwitch';

export default function buildRows(
  complexity: Complexity,
  users: User[]
): Row[] {
  return users.map((_, i) => buildRow(complexity, users, i));
}

export function buildRow(
  complexity: Complexity,
  users: User[],
  userIndex: number
) {
  const { id, age, name } = users[userIndex];
  return {
    id,
    age,
    birthYear: moment().subtract(age, 'years').year(),
    name: name[0].toUpperCase() + name.slice(1, name.length),
    bestFriend: complexity === 'n^2' ? getBestFriend(id, users) : 'No one :(',
  };
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
