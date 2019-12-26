import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { ChatRoom } from './interfaces/chatroom.interfaces';
@Injectable()
export class ChateventService {
  constructor(@Inject('CHATROOM_MODEL') private readonly chatroomModel: Model<ChatRoom>) {}
}
