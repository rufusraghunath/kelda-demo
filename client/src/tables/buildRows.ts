import { Complexity } from '../SelectComplexity';

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
    name,
    bestFriend:
      complexity === 'n^2' ? getBestFriend(id, age, users) : 'No one :(',
  };
}

function getBestFriend(userId: number, userAge: number, users: User[]): string {
  const friends = users
    .filter(({ id }) => id !== userId)
    .map(({ name, age }) => ({
      name,
      closeness: Math.abs(userAge - age),
    }))
    .sort((a, b) => {
      if (a.closeness < b.closeness) return -1;
      if (a.closeness > b.closeness) return 1;
      return 0;
    });

  return friends[0].name;
}
