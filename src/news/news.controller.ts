import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { NewsService } from './news.service';
import { NewsDto } from './dto/news.dto';

@Controller('news')
export class NewsController {
  constructor(private newService: NewsService) {}
  @Get('getnews')
  async getNews() {
    return await this.newService.getAllNews();
  }
  @Post('addnews')
  async addNews(@Body() newDto: NewsDto) {
    return this.newService.addNews(newDto);
  }
  @Get('delnews/:_id')
  async delNews(@Param() params) {
    return await this.newService.delNews(params._id);
  }
}
