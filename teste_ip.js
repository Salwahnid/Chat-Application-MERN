import http from 'http';
import { Server } from 'socket.io';

const httpServer = http.createServer();
const io = new Server(httpServer);

httpServer.listen(3000, () => {
  console.log('Serveur Socket.io en écoute sur http://100.94.243.169:3000');
});

io.on('connection', (socket) => {
  console.log('Client connecté au serveur');

  socket.on('message', (message) => {
    console.log('Message reçu du client:', message);
    socket.broadcast.emit('message', message); // Diffuser le message aux autres clients
    // Traiter le message ici
  });
});
