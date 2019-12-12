import { Model } from 'mongoose';
import { Injectable, Inject, HttpCode} from '@nestjs/common';
import { Admin } from './interfaces/admin.interface';
import { CreateAdminDto } from './dto/create-admin.dto';

@Injectable()
export class AdminService {
    constructor(@Inject('ADMIN_MODEL') private readonly adminModel: Model<Admin>) {}
    // 创建数据
    async create(createAdminDto: CreateAdminDto): Promise<Admin> {
        const createAdmin = new this.adminModel(createAdminDto);
        return await createAdmin.save();
    }
    // 查询数据
    async findAll(): Promise<Admin[]> {
        return await this.adminModel.find().exec();
    }
    // 登录
    async loginAdmin(createAdminDto: CreateAdminDto) {
        // tslint:disable-next-line: only-arrow-functions
        return this.adminModel.findOne({username: createAdminDto.username, password: createAdminDto.password}, function(err, result) {
            if (err) {
                return { status: 0 };
            } else {
                return createAdminDto.id;
            }
        }).exec();
    }
}
