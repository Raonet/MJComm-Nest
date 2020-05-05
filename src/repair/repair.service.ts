import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Repair } from './interfaces/Repair.interfaces';
import { RepairDto } from './dto/repair.dto';

@Injectable()
export class RepairService {
  constructor(@Inject('REPAIR_MODEL') private readonly repairModel: Model<Repair>) {}
  async getAllrepair() {
    return await this.repairModel.find();
  }
  async addrepair(newDto: RepairDto) {
    const repair = new this.repairModel(newDto);
    return await repair.save();
  }
  async delrepair(repairId) {
    return await this.repairModel.remove({_id: repairId});
  }
}
