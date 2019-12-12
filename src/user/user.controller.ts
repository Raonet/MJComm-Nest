import { Controller, Post, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<CreateUserDto> {
    return this.userService.createUser(createUserDto);
  }
  @Post('del/:id')
  async delUser(@Param()Params: CreateUserDto) {
    return this.userService.delUser(Params.id);
  }
}
