import { Controller, Post, Body, Param, Get, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private userService: UserService ) {}
  @Post('create')
  @UseInterceptors(FileInterceptor('pic'))
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.goodRes(await this.userService.createUser(createUserDto), '创建成功', '200');
  }
  @Get('del/:_id')
  async delUser(@Param()Params: CreateUserDto) {
    return this.userService.goodRes(await this.userService.delUser(Params._id), '删除成功', '200');
  }
  @Post('update/:_id')
  async modiUser(@Body() createUserDto: CreateUserDto, @Param()Params: CreateUserDto) {
    return this.userService.goodRes(await this.userService.modiUser(createUserDto, Params._id), '更新成功', '200');
  }
  @Post('login')
  async loginUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.goodRes(await this.userService.loginUser(createUserDto), '登录成功', '200');
  }
  @Get('getalluser')
  async getAlluser() {
    return this.userService.goodRes(await this.userService.findAll(), '获取全部用户列表成功', '200');
  }
  @Post('uploadavatar/:_id')
  @UseInterceptors(FileInterceptor('avater', {
    storage: diskStorage({
      destination: (req, file, cb) => {
        cb(null, '/bishe/mjcomm/public/static');
      },
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      },
    }),
  },
  ))
  async uploadAvatar(@UploadedFile() avater, @Param() userId) {
    return this.userService.postAvatar(avater.originalname, userId);
  }
}
