import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const ApiContext = createContext(null);
export const useApi = () => useContext(ApiContext);

const ApiProvider = ({ children }) => {
  const socket = io('http://localhost:8000');
  const [state, setState] = useState('');

  useEffect(() => {
    socket.on('room:created', (data) => {
      // console.log(data);
      setState(data);
      console.log(state);
    });
  }, [state]);

  const api = {
    roomCode: state,
    createRoom: (dm, userCount) => {
      let data = {
        dmName: dm,
        playerCount: userCount,
      };
      socket.emit('room:create', data);
    },

    joinRoom: (roomCode, name) => {
      let data = {
        username: name,
        roomCode: roomCode,
      };
      socket.emit('room:join', data);
    },
  };

  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
};

export default ApiProvider;
