import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { RepairService } from './repair.service';
import { RepairDto } from './dto/repair.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('报修')
@Controller('repair')
export class RepairController {
  constructor(private repairService: RepairService) {}
  @ApiOperation({
    summary: '获取报修信息列表',
})
  @Get('getrepair')
  async getrepair() {
    return await this.repairService.getAllrepair();
  }
  @ApiOperation({
    summary: '增加报修条目',
})
  @Post('addrepair')
  async addrepair(@Body() repairDto: RepairDto) {
    return this.repairService.addrepair(repairDto);
  }
  @ApiOperation({
    summary: '删除报修条目',
})
  @Post('delrepair')
  async delrepairs(@Body() body) {
    return await this.repairService.delrepair(body._id);
  }
}
