import { Controller, Get, Render, Post, UseInterceptors, UploadedFile} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller()
export class AppController {
  @Get()
  async getIndex() {
    return 'Hello world!';
  }
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: (req, file, cb) => {
        cb(null, '\public/upload');
      },
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      },
    }),
  }))
  async upLoad(@UploadedFile() file) {
    return {url: 'http://localhost:3000/static/upload/' + file.originalname};
  }
}
