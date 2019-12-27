import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { ChatRoom } from './interfaces/chatroom.interfaces';
import { ChatRoomDto } from './dto/create-chatroom.dto';
@Injectable()
export class ChateventService {
  constructor(@Inject('CHATROOM_MODEL') private readonly chatroomModel: Model<ChatRoom>) {}
  async getChatRoom() {
    return await this.chatroomModel.find();
  }
  // tslint:disable-next-line: no-shadowed-variable
  async addChatRoom(ChatRoom: ChatRoomDto) {
    const chatRoom = new this.chatroomModel(ChatRoom);
    if (await this.chatroomModel.findOne({name: chatRoom.name})) {
      return 0;
    } else {
      return await chatRoom.save();
    }
  }
  async delChatRoom(id) {
    return this.chatroomModel.remove({_id: id});
  }
  async updateChatRoom(chatroomDto, id) {
    return await this.chatroomModel.update({_id: id}, chatroomDto);
  }
  async getChatInfo(data) {
    return await this.chatroomModel.findOne({name: data.name});
  }
  async postchat(datas) {
    await this.chatroomModel.update({name: datas.name}, {$push: {data: datas.data}});
    return this.getChatInfo(datas);
  }
}
