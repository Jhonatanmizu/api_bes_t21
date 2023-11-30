import { OnModuleInit } from '@nestjs/common';

import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MyGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log('Connection established', socket.id);
    });
  }

  @SubscribeMessage('room')
  handleMessage(@MessageBody() body: string) {
    console.log('Message body', body);
  }

  @SubscribeMessage('connectInRoom')
  handleConnectInRoom(@MessageBody() body: string) {
    console.log('Connecting in room', body);
  }

  @SubscribeMessage('answer')
  handleAnswer(@MessageBody() body: string) {
    console.log('Answer body', body);
    this.server.emit('onAnswer', {
      answerId: 10,
      answerType: 'click',
    });
  }
}
