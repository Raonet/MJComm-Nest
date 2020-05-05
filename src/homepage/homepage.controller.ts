import { Controller, Get, Post, UseInterceptors, UploadedFile, Param } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { HomepageService } from './homepage.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('主页轮播图图片')
@Controller('homepage')
export class HomepageController {
  constructor(private homepageServic: HomepageService) { }
  @ApiOperation({
    summary: '获取轮播图',
})
  @Get('homeimg')
  async getHomeImg() {
    return this.homepageServic.getHomeImg();
  }
  @ApiOperation({
    summary: '添加主页轮播图片',
})
  @Post('addhomeimg')
  @UseInterceptors(FileInterceptor('homeimg', {
    storage: diskStorage({
      destination: (req, file, cb) => {
        cb(null, '\public/homepage');
      },
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      },
    }),
  }))
  async postHomeImg(@UploadedFile() homeimg) {
    return this.homepageServic.addHomeImg(homeimg.originalname);
  }
  @ApiOperation({
    summary: '删除轮播图',
})
  @Get('delhomeimg/:_id')
  async delHomeImg(@Param() params) {
    return this.homepageServic.delHomeImg(params._id);
  }
}
