import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class UserService {
  constructor(@Inject('USER_MODEL') private readonly userModel: Model<User>) {}
  // 创建用户
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(createUserDto);
    return await createUser.save();
  }
  // 删除用户
  async delUser(userid) {
    return this.userModel.remove({_id: userid});
  }
  // 修改用户
  async modiUser(createUserDto: CreateUserDto, objId): Promise<User> {
    return await this.userModel.update({_id: objId}, createUserDto);
  }
  // 登陆
  async loginUser(obj) {
    return await this.userModel.find( obj );
  }
}
