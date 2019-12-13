import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  async getIndex() {
    return 'Hello world!';
  }
}
