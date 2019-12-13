import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class UserService {
  constructor(@Inject('USER_MODEL') private readonly userModel: Model<User>) {}
  // 创建用户
  async createUser(createUserDto: CreateUserDto) {
    const createUser = new this.userModel(createUserDto);
    const name = createUserDto.user;
    if (await this.userModel.findOne({user: name})) {
      return 0;
    } else {
      return await createUser.save();
    }
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
  // 查询全部用户
  async findAll() {
    return await this.userModel.find();
  }
  // 包装返回值
  async goodRes(results, text, codes) {
    if (results === 0) {
      return {
        code: 200,
        status: 0,
      };
    }
    if (results.length === 0) {
      return {
        code: 200,
        status: 0,
      };
    }
    const data = {
      code: codes,
      status: text,
      result: results,
      length: results.length,
    };
    return data;
  }
}
