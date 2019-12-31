import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ForumService } from './forum.service';
import { ForumDto } from './dto/forum.dto';

@Controller('forum')
export class ForumController {
  constructor( private forumService: ForumService) {}
  @Post('addforum')
  async addForum(@Body() forumDto: ForumDto) {
    return this.forumService.addForum(forumDto);
  }
  @Get('getall')
  async getAllForum() {
    return this.forumService.getAllForum();
  }
  @Post('delforum/:_id')
  async delForum(@Param() params) {
    return this.forumService.delForum(params._id);
  }
  @Get('get/:id')
  async getForum(@Param() params) {
    return this.forumService.getForum(params.id);
  }
  @Post('praise')
  async givePraise(@Body() praise) {
    return this.forumService.givePraise(praise);
  }
  @Post('delpraise')
  async delPraise(@Body() praise) {
    return;
  }
  @Post('step')
  async giveStep(@Body() step) {
    return this.forumService.giveStep(step);
  }
}
