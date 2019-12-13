import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<CreateUserDto> {
    return this.userService.createUser(createUserDto);
  }
  @Get('del/:_id')
  async delUser(@Param()Params: CreateUserDto) {
    return this.userService.delUser(Params._id);
  }
  @Post('update/:_id')
  async modiUser(@Body() createUserDto: CreateUserDto, @Param()Params: CreateUserDto): Promise<CreateUserDto> {
    return this.userService.modiUser(createUserDto, Params._id);
  }
  @Post('login')
  async loginUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.loginUser(createUserDto);
  }
}
