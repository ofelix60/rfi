import Link from 'next/link';
import { useState } from 'react';
import { useApi } from '../contexts/ApiContext';

const JoinPage = () => {
  const api = useApi();

  const [code, setCode] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    api.joinRoom(code, username);
    setCode('');
    setUsername('');
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>join</h2>
        <Link href='/'>HOME</Link>
        <br />
        <br />
        <input
          autoComplete='off'
          placeholder='room code'
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
        <br />
        <input
          autoComplete='off'
          placeholder='username'
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <br />
        <button>Join Room</button>
      </form>
    </div>
  );
};

export default JoinPage;
