import { Connection } from 'mongoose';
import { ChatRoomSchema } from './schemas/chatroom.shcemas';

export const chatroomProviders = [
  {
    provide: 'CHATROOM_MODEL',
    useFactory: (connection: Connection) => connection.model('chatroom', ChatRoomSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
