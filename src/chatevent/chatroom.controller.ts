import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ChateventService } from './chatevent.service';
import { ChatRoomDto } from './dto/create-chatroom.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('聊天室')
@Controller('chatroom')
export class ChatRoomController {
  constructor(private chatService: ChateventService) {}
  @ApiOperation({
    summary: '获取聊天室列表',
})
  @Get()
  async getChatRoom() {
    return this.chatService.getChatRoom();
  }
  @ApiOperation({
    summary: '添加新的聊天室',
})
  @Post('addchatroom')
  async addChatRoom(@Body() chatroomDto: ChatRoomDto) {
    return this.chatService.addChatRoom(chatroomDto);
  }
  @ApiOperation({
    summary: '删除聊天室',
})
  @Post('delchatroom')
  async delChatRoom(@Body() body) {
    return this.chatService.delChatRoom(body._id);
  }
  @ApiOperation({
    summary: '聊天室内的聊天信息',
})
  @Post('chatlist')
  async getChatlist(@Body() body) {
    return this.chatService.getChatInfo(body);
  }
  @ApiOperation({
    summary: '修改聊天室信息',
})
  @Post('updatechat/:id')
  async updateChatRoom(@Body() chatRoomDto: ChatRoomDto, @Param() params) {
    return this.chatService.updateChatRoom(chatRoomDto, params.id);
  }
}
