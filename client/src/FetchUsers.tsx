import React, { useState } from 'react';
import './FetchUsers.css';

interface FetchUsersProps {
  setUsers: (users: User[]) => void;
}

async function fetchUsers(n: string, cb: (users: User[]) => void) {
  try {
    const res = await fetch(`http://localhost:8080?n=${n}`);
    const users: User[] = await res.json();

    cb(users);
  } catch (e) {
    console.log(e);
  }
}

function FetchUsers({ setUsers }: FetchUsersProps) {
  const [n, setN] = useState('0');
  const [isFetching, setIsFetching] = useState(false);
  const onClick = async () => {
    setIsFetching(true);

    await fetchUsers(n, setUsers);

    setIsFetching(false);
  };

  return (
    <div className="fetch-users">
      <input
        className="num-users"
        type="number"
        min="0"
        value={n}
        onChange={(e) => setN(e.target.value)}
      />
      <button onClick={onClick}>Fetch users</button>
      {isFetching && <span className="fetching">Fetching...</span>}
    </div>
  );
}

export default FetchUsers;
