import { Controller, Get, Render, Post, UseInterceptors, UploadedFile} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('服务器')
export class AppController {
  @ApiOperation({
    summary: '图片上传服务器',
})
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
