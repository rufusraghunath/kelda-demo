import { NAMES } from './names.ts';

export const generateResponse = (maybeN: string | null) => {
  const n = maybeN ? parseInt(maybeN, 10) : 1;

  return Array(n)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      name: getName(),
      age: Math.floor(Math.random() * 100),
    }));
};

const getName = () => {
  const index = Math.floor(Math.random() * NAMES.length);

  return NAMES[index];
};
