import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ChateventService } from './chatevent.service';
import { ChatRoomDto } from './dto/create-chatroom.dto';

@Controller('chatroom')
export class ChatRoomController {
  constructor(private chatService: ChateventService) {}
  @Get()
  async getChatRoom() {
    return this.chatService.getChatRoom();
  }
  @Post('addchatroom')
  async addChatRoom(@Body() chatroomDto: ChatRoomDto) {
    return this.chatService.addChatRoom(chatroomDto);
  }
  @Post('delchatroom')
  async delChatRoom(@Body() body) {
    return this.chatService.delChatRoom(body.id);
  }
  @Post('updatechat/:id')
  async updateChatRoom(@Body() chatRoomDto: ChatRoomDto, @Param() params) {
    return this.chatService.updateChatRoom(chatRoomDto, params.id);
  }
}
