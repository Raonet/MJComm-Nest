import { Controller, Get, Post, UseInterceptors, UploadedFile, Param } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { HomepageService } from './homepage.service';

@Controller('homepage')
export class HomepageController {
  constructor(private homepageServic: HomepageService) { }
  @Get('homeimg')
  async getHomeImg() {
    return this.homepageServic.getHomeImg();
  }
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
  @Get('delhomeimg/:_id')
  async delHomeImg(@Param() params) {
    return this.homepageServic.delHomeImg(params._id);
  }
}
