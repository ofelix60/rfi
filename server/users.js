const users = [];

const addUser = ({ id, username, roomCode }) => {
  username = username.trim().toLowerCase();
  roomCode = roomCode.trim().toLowerCase();

  const existingUser = users.find((user) => {
    user.room = roomCode && user.username === username;
  });

  if (existingUser) {
    return { error: 'Username is taken' };
  }

  const user = { id, username, roomCode };

  users.push(user);
  console.log(users);
  return user;
};

export default addUser;
