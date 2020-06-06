import React, { useState } from 'react';

interface FetchUsersProps {
  setUsers: (users: User[]) => void;
}

async function fetchUsers(
  name: string,
  n: string,
  cb: (users: User[]) => void
) {
  try {
    const res = await fetch(`http://localhost:8080?name=${name}&n=${n}`);
    const users: User[] = await res.json();

    cb(users);
  } catch (e) {
    console.log(e);
  }
}

function FetchUsers({ setUsers }: FetchUsersProps) {
  const [name, setName] = useState('');
  const [n, setN] = useState('0');

  return (
    <div className="fetch-users">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        min="0"
        value={n}
        onChange={(e) => setN(e.target.value)}
      />
      <button onClick={() => fetchUsers(name, n, setUsers)}>Fetch users</button>
    </div>
  );
}

export default FetchUsers;
