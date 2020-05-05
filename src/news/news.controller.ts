import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { NewsService } from './news.service';
import { NewsDto } from './dto/news.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('新闻')
@Controller('news')
export class NewsController {
  constructor(private newService: NewsService) {}
  @ApiOperation({
    summary: '获取新闻',
})
  @Get('getnews')
  async getNews() {
    return await this.newService.getAllNews();
  }
  @ApiOperation({
    summary: '添加新闻',
})
  @Post('addnews')
  async addNews(@Body() newDto: NewsDto) {
    return this.newService.addNews(newDto);
  }
  @ApiOperation({
    summary: '删除新闻',
})
  @Post('delnews')
  async delNews(@Body() body) {
    return await this.newService.delNews(body._id);
  }
}
