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
    name: name[0].toUpperCase() + name.slice(1, name.length),
    bestFriend:
      complexity === 'n^2' ? getBestFriend(id, age, users) : 'No one :(',
  };
}

function getBestFriend(userId: number, userAge: number, users: User[]): number {
  const friends = users
    .filter(({ id }) => id !== userId)
    .map(({ id, age }) => ({
      id,
      closeness: Math.abs(userAge - age),
    }))
    .sort((a, b) => {
      if (a.closeness < b.closeness) return -1;
      if (a.closeness > b.closeness) return 1;
      return 0;
    });

  return friends[0].id;
}
