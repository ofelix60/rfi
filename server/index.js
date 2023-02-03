import { Server } from 'socket.io';
import addUser from './users.js';

let rooms = {};

const getRoomCode = () =>
  new Array(5)
    .fill('')
    .map(() => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
    .join('');

const io = new Server(8000, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  //
  socket.on('room:create', ({ dmName, playerCount }) => {
    let roomCode = getRoomCode();
    while (rooms[roomCode]) roomCode = getRoomCode();
    rooms[roomCode] = { users: [], userCount: playerCount, dm: dmName };
    // console.log('DM: ', dmName);
    // console.log('userCount: ', playerCount);

    socket.emit('room:created', roomCode);
    console.log('ROOMCODE: ', roomCode);
    console.log('room: ', rooms[roomCode]);
    console.log(rooms);
  });

  socket.on('room:join', ({ username, roomCode }, callback) => {
    // const { error, username } = addUser({ id: socket.id, username, roomCode });

    // if (error) return callback(error);

    console.log(roomCode, username);
    //   if (!rooms[data.roomCode]) {
    //     console.log('invalid room code. please try again');
    //     return;
    //   }

    //   if (!socket.adapter.rooms.has(data.roomCode)) {
    //     rooms[data.roomCode];
    //   }
    //   socket.join(data.roomCode);
    //   console.log(socket.rooms);
    //   console.log('rooms', rooms);
    //   console.log(
    //     '=============================================================='
    //   );
  });
});

const schema = {
  ZVYDT: {
    user1: {
      role: 'DM',
      order: 1,
    },
    user2: {
      role: 'PC',
      order: 4,
      modifier: 0,
    },
    user2: {
      role: 'PC',
      order: 1,
      modifier: 0,
    },
    user2: {
      role: 'PC',
      order: 3,
      modifier: 0,
    },
    user2: {
      role: 'PC',
      order: 2,
      modifier: 0,
    },
  },
  KWBEX: {
    OSCAR: {
      role: 'PC',
      order: 5,
      modifier: 4,
    },
  },
};
