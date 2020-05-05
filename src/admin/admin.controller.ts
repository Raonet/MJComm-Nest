import { Controller, Post, Body, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { CreateAdminDto } from './dto/create-admin.dto';
import { AdminService } from './admin.service';

@ApiTags('管理员帐号管理')
@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}
    @ApiOperation({
        summary: '创建管理员帐号',
    })
    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() createAdminDto: CreateAdminDto) {
        return this.adminService.create(createAdminDto);
    }

    @ApiOperation({
        summary: '获取所有管理员列表',
    })
    @Get()
    async findAll() {
        return this.adminService.findAll();
    }

    @ApiOperation({
        summary: '管理员帐号登录',
    })
    @Post('login')
    async loginAdmin(@Body() createAdminDto: CreateAdminDto) {
        return this.adminService.loginAdmin(createAdminDto);
    }
}
