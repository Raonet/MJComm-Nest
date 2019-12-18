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
    if (await this.userModel.findOne({email: createUserDto.email})) {
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
        status: 0, // 用户创建失败，该用户名已注册
      };
    }
    if (results.length === 0) {
      return {
        code: 200,
        status: 0, // 用户登录失败，帐号或密码错误
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
  // 查找用户是否存在方法
  async findOne(username: string) {
    return this.userModel.find(user => user.name === username);
  }
  // 处理上传文件
  async postAvatar(avatar, userId) {
    const avatars = 'http://localhost:3000/static/static/' + avatar;
    return await this.userModel.update({_id: userId}, {avater: avatars});
  }
}
