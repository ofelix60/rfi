import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { useApi } from '../contexts/ApiContext';

function Create() {
  const api = useApi();

  const [code, setCode] = useState('');
  const [userCount, setUserCount] = useState('');
  const [dm, setDm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    api.createRoom(code, userCount, dm);
    // console.log('code:', code);
    // console.log('user count:', userCount);
    // console.log('DM:', dm);
    // api.dmJoin(code, userCount, dm);
  };

  return (
    <>
      <h1>create room</h1>
      <br />
      <Link href='/'>Home</Link>
      <Link href='/join'>Join</Link>
      <br />
      <br />
      <lable>DM Name:</lable>
      <br />
      <input
        autoComplete='off'
        onChange={(e) => {
          setDm(e.target.value);
        }}
      ></input>
      <br />
      <br />
      <label>how many players?</label>
      <br />
      <input
        type='number'
        min='1'
        max='10'
        onChange={(e) => {
          setUserCount(e.target.value);
        }}
      ></input>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <button>Create Room</button>
        <p
          onChange={() => {
            setCode(api.roomCode);
          }}
        >
          {api.roomCode}
        </p>
      </form>
    </>
  );
}

export default Create;
