export const generateResponse = (
  maybeName: string | null,
  maybeN: string | null
) => {
  const name = maybeName || 'John Doe';
  const n = maybeN ? parseInt(maybeN, 10) : 1;

  return Array(n)
    .fill(null)
    .map((_, i) => ({
      name,
      id: i + 1,
      age: Math.floor(Math.random() * 100),
    }));
};
