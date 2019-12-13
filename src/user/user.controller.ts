import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.goodRes(await this.userService.createUser(createUserDto), '创建成功', '200');
  }
  @Get('del/:_id')
  async delUser(@Param()Params: CreateUserDto) {
    return this.userService.goodRes(await this.userService.delUser(Params._id), '删除成功', '204');
  }
  @Post('update/:_id')
  async modiUser(@Body() createUserDto: CreateUserDto, @Param()Params: CreateUserDto) {
    return this.userService.goodRes(await this.userService.modiUser(createUserDto, Params._id), '更新成功', '201');
  }
  @Post('login')
  async loginUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.goodRes(await this.userService.loginUser(createUserDto), '登录成功', '200');
  }
  @Get('getalluser')
  async getAlluser() {
    return this.userService.goodRes(await this.userService.findAll(), '获取全部用户列表成功', '200');
  }
}
