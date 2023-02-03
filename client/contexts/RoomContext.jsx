import React, { createContext, useContext, useState } from 'react';
import { useApi } from './ApiContext';

const RoomContext = createContext(null);
export const useRoom = () => useContext(RoomContext);

const RoomProvider = ({ children }) => {
  const api = useApi();
  let something = '';
  return (
    <RoomContext.Provider value={something}>{children}</RoomContext.Provider>
  );
};

export default RoomProvider;
