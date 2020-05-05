import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ForumService } from './forum.service';
import { ForumDto } from './dto/forum.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('论坛')
@Controller('forum')
export class ForumController {
  constructor( private forumService: ForumService) {}
  @ApiOperation({
    summary: '新增帖子',
})
  @Post('addforum')
  async addForum(@Body() forumDto: ForumDto) {
    return this.forumService.addForum(forumDto);
  }
  @ApiOperation({
    summary: '获取帖子列表',
})
  @Get('getall')
  async getAllForum() {
    return this.forumService.getAllForum();
  }
  @ApiOperation({
    summary: '删除帖子',
})
  @Post('delforum')
  async delForum(@Body() body) {
    return this.forumService.delForum(body._id);
  }
  @ApiOperation({
    summary: '获取帖子详情',
})
  @Get('getforum/:_id')
  async getForum(@Param() params) {
    return this.forumService.getForum(params._id);
  }
  @ApiOperation({
    summary: '点赞',
})
  @Post('praise')
  async givePraise(@Body() praise) {
    return this.forumService.givePraise(praise);
  }
  @ApiOperation({
    summary: '取消点赞',
})
  @Post('delpraise')
  async delPraise(@Body() praise) {
    return;
  }
  @ApiOperation({
    summary: '踩',
})
  @Post('step')
  async giveStep(@Body() step) {
    return this.forumService.giveStep(step);
  }
  @ApiOperation({
    summary: '评论',
})
  @Post('comments')
  async giveComment(@Body() comment) {
    return this.forumService.giveComment(comment);
  }
}
