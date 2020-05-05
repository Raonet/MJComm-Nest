import { Controller, Post, Body, Param, Get, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private userService: UserService ) {}
  @ApiOperation({
    summary: '创建用户',
})
  @Post('create')
  @UseInterceptors(FileInterceptor('pic'))
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.goodRes(await this.userService.createUser(createUserDto), '创建成功', '200');
  }
  @ApiOperation({
    summary: '删除用户',
})
  @Post('del')
  async delUser(@Body() body) {
    return this.userService.goodRes(await this.userService.delUser(body._id), '删除成功', '200');
  }
  @ApiOperation({
    summary: '修改用户信息',
})
  @Post('update')
  async modiUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.goodRes(await this.userService.modiUser(createUserDto, createUserDto._id), '更新成功', '200');
  }
  @ApiOperation({
    summary: '登录',
})
  @Post('login')
  async loginUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.goodRes(await this.userService.loginUser(createUserDto), '登录成功', '200');
  }
  @ApiOperation({
    summary: '获取用户列表',
})
  @Get('getalluser')
  async getAlluser() {
    return this.userService.goodRes(await this.userService.findAll(), '获取全部用户列表成功', '200');
  }
  @ApiOperation({
    summary: '用户头像图片接收接口',
})
  @Post('uploadavatar/:_id')
  @UseInterceptors(FileInterceptor('avater', {
    storage: diskStorage({
      destination: (req, file, cb) => {
        cb(null, '\public/static');
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
  @Get('cjforum/:id')
  async getCJForum(@Param() params) {
    return await this.userService.getCJForum(params);
  }
}
