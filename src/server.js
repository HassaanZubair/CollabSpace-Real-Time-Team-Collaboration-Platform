const app = require('./app')
const dotenv = require("dotenv");
// const http = require('http');
// const { Server } = require('socket.io');

dotenv.config();
const PORT = process.env.PORT || 3000;

// //Socket.io server
// const server = http.createServer(app);

// //attach socket.io to the server
// const io = new Server(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"]
//   }
// });

// //Handle socket connection
// io.on('connection', (socket) => {
//   console.log('A User connected:', socket.id);

//   socket.on('sendMessage', (data) => {
//     console.log('Message received:', data);
//     io.emit('receiveMessage', data); // Broadcast to everyone
//   });

//   socket.on('disconnect', () => {
//     console.log('User disconnected:', socket.id);
//   });
// });

app.listen(PORT, () => {    
  console.log(`Server is running on port ${PORT}`);
});