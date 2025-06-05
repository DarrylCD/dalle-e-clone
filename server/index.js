import express from 'express';
import { createServer } from 'http';    
import { Server } from 'socket.io';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.get('/', async (req, res) => {
  res.send('Hello from DALL-E!');
});

// start the server
const startServer = async () => {
  const PORT = process.env.PORT || 8080;
  const server = createServer(app);
  const io = new Server(server, {
    cors: {
      origin: 'http://localhost:5173', // Adjust this to your client URL
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer().catch((error) => {
  console.error('Error starting server:', error);
});